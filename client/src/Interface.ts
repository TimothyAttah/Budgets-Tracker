export interface Users {
  id: string | number;
  profilePicture: string;
  username: string
}

export type UserLists = {
  userLists: Users[]
}
	

export interface Posts {
  post_id: number | string;
  desc?: string;
  photo?: string;
  date: Date | string;
  userId: string | number
  // likes: number | string;
  likes: any
  comment: any
}

export type PostLists = {
  posts: Posts[]
}
