//interfaces for contexts and providers

// export const urlBACKEND: string = 'http://localhost:4000';
export const urlBACKEND: string =
  'https://blog-api-pablogorgoglione.herokuapp.com';

export interface IPostState {
  posts: IPost[];
}

export interface IUserState {
  username: string;
  isLog: boolean;
  likedPost: string[];
  isLoading: boolean;
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
