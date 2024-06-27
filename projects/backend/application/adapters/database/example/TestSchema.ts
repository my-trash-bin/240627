import { ExpandRecursively } from "@this-project/common-util-util";

import { DatabaseSchema } from "../DatabaseSchema";

export interface User {
  id: string;
  friends: User[];
  // createTime: Date;
  // updateTime: Date;
  name: string;

  posts: Post[];
  comments: Comment[];
}

export interface Post {
  id: string;
  createTime: Date;
  updateTime: Date;
  authorId: string;
  title: string;
  content: string;

  author: User;
  comments: Comment[];
}

export interface Comment {
  id: string;
  createTime: Date;
  updateTime: Date;
  postId: string;
  authorId: string;

  author: User;
  post: Post;
}

export interface TestSchema {
  User: User;
  Post: Post;
  Comment: Comment;
}

export type Test = ExpandRecursively<DatabaseSchema<TestSchema>>;
