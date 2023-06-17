import { ObjectId } from "mongodb";

export interface CommentInterface {
  text: string;
  userId: number;
  createdOn: Date;
}

export interface LinkInterface {
  textDisplay: string;
  url: string;
}

export interface PostInterface {
  _id: ObjectId;
  id: string;
  text: string;
  comments: Array<CommentInterface>;
  userId: number;
  createdOn: Date;
  photos: Array<string>;
  likes: number[];
  shares: number;
  saved: number[];
  links: Array<LinkInterface>;
}

export interface ProfileInterface {
  _id: ObjectId;
  id: number;
  name: string;
  pseudo: string;
  email: string;
  location: string;
  description: string;
  photo: URL;
  cover: URL;
  friends: Array<number>;
  links: Array<LinkInterface>;
}

export interface NotesInterface {
  userId: number;
  createdOn: Date;
  text: string;
}

// export interface SavedPostInterface {
//   _id: ObjectId;
//   userId: number;
//   postId: ObjectId;
//   postData: PostInterface[];
// }
