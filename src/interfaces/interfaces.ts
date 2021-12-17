//interfaces for contexts and providers

export interface IPostState {
  posts: IPost[];
}

export interface IUserState {
  username: string;
  isLog: boolean;
}

//models

export interface IComment {
  _id: string;
  userId: {
    username: string;
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
