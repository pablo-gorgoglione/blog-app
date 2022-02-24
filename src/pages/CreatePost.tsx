import { useState } from 'react';
import { Navigate } from 'react-router-dom';
import { Spinner } from '../components/Spinner';
import { StyledCreatePost } from '../components/styles/CreatePost.styled';
import { useUser } from '../hooks/useUser';
import PostService from '../services/post';
import Cookies from 'universal-cookie';
import { PostCreate } from '../interfaces/interfaces';
import axios from 'axios';
import { useSnackBar } from '../hooks/useSnackBar';
import { useNavigate } from 'react-router-dom';
import { FaTimes, FaEdit } from 'react-icons/fa';

interface Tag {
  id: number;
  text: string;
}

const CreatePost = () => {
  let navigate = useNavigate();

  const cookies = new Cookies();
  const jwt: string = cookies.get('JWT');
  const { openSnackBar } = useSnackBar();

  const {
    user: { isAuthor },
    loading,
  } = useUser();

  const [title, setTitle] = useState<string>('');
  const [titleError, setTitleError] = useState<string>('');
  const [content, setContent] = useState<string>('');
  const [contentError, setContentError] = useState<string>('');
  const [tags, setTags] = useState<Tag[]>([]);
  const [tagsError, setTagsError] = useState<string>('');
  const [edit, setEdit] = useState<boolean>(false);
  const [tag, setTag] = useState<Tag>({
    id: Math.random(),
    text: '',
  });
  const [publish, setPublish] = useState<boolean>(false);

  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
    setTitleError('');
  };
  const changeContent = (e: any) => {
    setContent(e.target.value);
    setContentError('');
  };

  const addTag = () => {
    if (tag.text.trim().length < 4) {
      setTagsError('4 characters al least');
    } else {
      if (edit) {
        const index = tags.findIndex((e) => e.id === tag.id);
        let tempTags = tags;
        tempTags[index].text = tag.text;
        setTags(tempTags);
        setEdit(false);
        setTag({
          id: Math.random(),
          text: '',
        });
      } else {
        let tempTags = tags;
        tempTags.push({ id: tag.id, text: tag.text });
        setTags(tempTags);
        setTag({
          id: Math.random(),
          text: '',
        });
      }
    }
  };

  const changeTag = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTag({ ...tag, text: e.target.value });
    setTagsError('');
  };

  const editTag = (tag: Tag) => {
    setEdit(true);
    setTag(tag);
  };
  const deleteTag = (idDelete: number) => {
    // const index = tags.findIndex((e) => e.id === idDelete);
    const tempTags = tags.filter((t) => t.id !== idDelete);
    setTags(tempTags);
  };

  const cancelEdit = () => {
    setEdit(false);
    setTag({
      id: Math.random(),
      text: '',
    });
  };

  const validatePostData = () => {
    let flag = false;
    if (!title) {
      setTitleError('A title is required');
      flag = true;
    }
    if (title.trim().length < 5) {
      setTitleError('The title must be at least 5 characters');
      flag = true;
    }
    if (tags.length === 0) {
      setTagsError('One tag is required');
      flag = true;
    }
    if (content.trim().length === 0) {
      setContentError('Content cannot be empty');
    }
    if (!flag) {
      createPost();
    }
  };

  const createPost = async () => {
    const tagsList: Array<string> = [];
    tags.forEach((e) => tagsList.push(e.text));

    const postCreate: PostCreate = {
      title: title,
      content: content,
      tags: tagsList,
      isPublished: publish,
    };
    try {
      await PostService.createOne(jwt, postCreate);
      openSnackBar('Post created ', false);
      navigate(`../author/post/`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({ ...error });
        openSnackBar('Error creating the post', true);
      } else {
        //Other error
        // throw new Error('different error than axios');
        openSnackBar('Unknow error :( ', false);
      }
    }
  };

  if (!isAuthor && !loading) {
    return <Navigate to='../' />;
  }
  if (loading) {
    return <Spinner />;
  }
  return (
    <StyledCreatePost>
      <h2>Creating a post</h2>

      <h3>Title</h3>
      {titleError && <p className='error-message'>{titleError}</p>}

      <input
        className='title'
        placeholder='Enter title '
        value={title}
        onChange={(e) => changeTitle(e)}
      />
      <h3>Content</h3>
      {contentError && <p className='error-message'>{contentError}</p>}

      <textarea
        className='content'
        onChange={changeContent}
        placeholder='Enter content'
        value={content}
      />

      <h3>Tags</h3>
      {tagsError && <p className='error-message'>{tagsError}</p>}
      <input
        className='tag'
        type='text'
        name='tag'
        id='tag'
        value={tag.text}
        onChange={changeTag}
        disabled={tags.length > 3}
      />

      <button onClick={addTag} disabled={tags.length > 3}>
        {edit ? 'Edit' : 'Add'}
      </button>

      {edit && (
        <button className='cancel-edit' onClick={cancelEdit}>
          cancel
        </button>
      )}

      {tags.length > 0 && (
        <ul>
          {tags.map((tag) => (
            <div className='tag-item' key={tag.id}>
              <li>{tag.text}</li>
              <div>
                <FaEdit onClick={() => editTag(tag)} color='white' />
                <FaTimes onClick={() => deleteTag(tag.id)} color='white' />
              </div>
            </div>
          ))}
        </ul>
      )}

      <div>
        <button onClick={validatePostData}>Save</button>

        <div>
          <input
            type='checkbox'
            name='post'
            id='post'
            onChange={() => setPublish(!publish)}
            checked={publish}
          />
          <label htmlFor='post'>Publish now</label>
        </div>
      </div>
    </StyledCreatePost>
  );
};

export default CreatePost;
