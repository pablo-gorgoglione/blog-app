//interfaces for contexts and providers

export const urlBACKEND: string = process.env.REACT_APP_API_URL as string;

export interface IPostState {
  posts: IPost[];
  loading: boolean;
  error: string;
}

export interface IUserState {
  username: string;
  id: string;
  isLog: boolean;
  isLoading_User: boolean;
  likedPosts: string[];
  likedComments: string[];
}

//models

export interface IComment {
  _id: string;
  user: {
    username: string;
    _id: string;
  };
  postId: string;
  commentParentId?: string;
  isEdit: boolean;
  date: string;
  content: string;
  likeCounter: number;
}

export interface IPost {
  _id: string;
  title: string;
  content: string;
  datePublished: string;
  tags: string[];
  isPublished: number;
  likeCounter: number;
  commentCounter: number;
}

export interface IUser {
  username: string;
  password: string;
}

// Register Form
export interface IFormValues {
  username: string;
  password: string;
  repeatPass: string;
}
