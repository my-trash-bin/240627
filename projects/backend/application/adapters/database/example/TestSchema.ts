import { ExpandRecursively } from "@this-project/common-util-util";

import { DatabaseSchema } from "../DatabaseSchema";

export interface User {
  id: string;
  createTime: Date;
  updateTime: Date;
  name?: string;

  posts: Post[];
  comments: Comment[];
}

export interface Post {
  id: string;
  createTime: Date;
  updateTime: Date;
  authorId: string;
  title?: string;
  content: string;

  author: User;
  comments: Comment[];
  images: Image[];
}

export interface Comment {
  id: string;
  createTime: Date;
  updateTime: Date;
  postId: string;
  authorId: string;
  content?: string;

  post: Post;
  author: User;
}

export interface Image {
  id: string;
  postId: string;
  src: string;

  post: Post;
}

export interface TestSchema {
  User: User;
  Post: Post;
  Comment: Comment;
  Image: Image;
}

export type Test = ExpandRecursively<DatabaseSchema<TestSchema>>;
export const test = {
  models: {
    User: {
      fields: {
        id: { type: "string" },
        createTime: { type: "dateTime" },
        updateTime: { type: "dateTime" },
        name: { type: "string" },
      },
      relations: {
        //
      },
      indices: [],
    },
  },
} as const satisfies DatabaseSchema<TestSchema>;
