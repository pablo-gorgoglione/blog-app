import axios from 'axios';
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { StyledCreatePost } from '../components/styles/CreatePost.styled';
import { IPost } from '../interfaces/interfaces';
import PostService from '../services/post';
import Cookies from 'universal-cookie';
import { Spinner } from '../components/Spinner';
import { FaEdit, FaTimes } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

interface Tag {
  id: number;
  text: string;
}

const EditPost = () => {
  const cookies = new Cookies();
  const params = useParams();
  let navigate = useNavigate();

  const jwt: string = cookies.get('JWT');
  const idPost = params.id as string;

  //editable post
  const [loading, setLoading] = useState<boolean>(true);
  const [tempPost, setTempPost] = useState<IPost>({} as IPost);

  //erros
  const [titleError, setTitleError] = useState<string>('');
  const [contentError, setContentError] = useState<string>('');
  const [tagsError, setTagsError] = useState<string>('');

  //tag state
  const [edit, setEdit] = useState<boolean>(false);
  const [tags, setTags] = useState<Tag[]>([]);
  const [tag, setTag] = useState<Tag>({
    id: Math.random(),
    text: '',
  });

  //fetch postdata with id
  useEffect(() => {
    const getPost = async () => {
      try {
        const {
          data: { Data },
        } = await PostService.getOne(idPost, jwt);

        //set post to edit
        setTempPost(Data);
        setLoading(false);
      } catch (error) {
        setLoading(false);
        if (axios.isAxiosError(error)) {
          console.log({ ...error });
        } else {
          console.log(error);
        }
      }
    };
    setLoading(true);
    getPost();
  }, [idPost, jwt]);

  //set tags when tempPost is not empty
  useEffect(() => {
    if (!loading) {
      //set tags to edit
      let tempTags: Array<Tag> = [];
      tempPost.tags.forEach((t) => {
        tempTags.push({ text: t, id: Math.random() });
        setTags(tempTags);
      });
    }
  }, [tempPost, loading]);

  const validatePostData = () => {
    let flag = false;
    if (!tempPost.title) {
      setTitleError('A title is required');
      flag = true;
    }
    if (tempPost.title.trim().length < 5) {
      setTitleError('The title must be at least 5 characters');
      flag = true;
    }
    if (tags.length === 0) {
      setTagsError('One tag is required');
      flag = true;
    }
    if (tempPost.content.trim().length === 0) {
      setContentError('Content cannot be empty');
    }
    if (!flag) {
      updatePost();
    }
  };

  //send the updated post to the API
  const updatePost = async () => {
    let tempTags: Array<string> = [];
    tags.forEach((t) => {
      tempTags.push(t.text);
    });

    try {
      await PostService.updateOne(idPost, jwt, {
        ...tempPost,
        tags: tempTags,
      });
      navigate(`../post/${idPost}`);
    } catch (error) {
      if (axios.isAxiosError(error)) {
        console.log({ ...error });
      } else {
        console.log(error);
      }
    }
  };

  /* post handlers */
  const changeIsPusblished = () => {
    const tempValue = tempPost.isPublished === 1 ? 0 : 1;
    setTempPost({ ...tempPost, isPublished: tempValue });
  };
  const changeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTempPost({ ...tempPost, title: e.target.value });
    setTitleError('');
  };
  const changeContent = (e: any) => {
    setTempPost({ ...tempPost, content: e.target.value });
    setContentError('');
  };

  /*  tag handlers */
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
        //crear nuevo tag
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
  const cancelEdit = () => {
    setEdit(false);
    setTag({
      id: Math.random(),
      text: '',
    });
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
    const tempTags = tags.filter((t) => t.id !== idDelete);
    setTags(tempTags);
  };

  if (loading) {
    return <Spinner />;
  }
  return (
    <>
      <StyledCreatePost>
        <div className='createpost-container'>
          <h2>Editing a post</h2>

          <h3>Title</h3>
          {titleError && <p className='error-message'>{titleError}</p>}

          <input
            className='title'
            placeholder='Enter title '
            value={tempPost.title}
            onChange={(e) => changeTitle(e)}
          />
          <h3>Content</h3>
          {contentError && <p className='error-message'>{contentError}</p>}

          <textarea
            placeholder='Enter content'
            name='content'
            id='content'
            className='content'
            onChange={(e) => changeContent(e)}
          >
            {tempPost.content}
          </textarea>

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
                onChange={changeIsPusblished}
                checked={tempPost.isPublished === 1 ? true : false}
              />
              <label htmlFor='post'>Publish now</label>
            </div>
          </div>
        </div>
      </StyledCreatePost>
    </>
  );
};

export default EditPost;
