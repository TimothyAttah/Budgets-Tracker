import { PostTypes } from "../types";

interface CreatePost {
  type: PostTypes.POST_CREATE;
  payload: object;
}
interface ListPosts {
  type: PostTypes.POSTS_LISTS;
  payload: object;
}
interface ListPost {
  type: PostTypes.POST_LIST;
  payload: object;
}
interface DeletePost {
  type: PostTypes.POST_DELETE;
  payload: string | number;
}
interface DeletePostComments {
  type: PostTypes.DELETE_COMMENT;
  // payload: object | string
  payload:  string | undefined
}

interface EditPost {
  type: PostTypes.POST_EDIT;
  payload: {
    _id: string | number;
    post: object;
  };
}
interface LikePost {
  type: PostTypes.POST_LIKE;
  payload: {
    _id: string;
    data: object | string;
  }
}

interface CommentPost {
  type: PostTypes.POST_COMMENT;
  payload: {
    _id: string;
    data: object
  }
}


export type PostActionTypes = CreatePost
  | ListPost
  | ListPosts
  | DeletePost
  | EditPost
  | LikePost
  | CommentPost
  | DeletePostComments;