import { DatabaseMaps } from "../DatabaseMaps";
import { DatabaseModels } from "../DatabaseModels";

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
  content: string;

  post: Post;
  author: User;
}

export interface Image {
  id: string;
  postId: string;
  src: string;

  post: Post;
}

export interface TestModels {
  User: User;
  Post: Post;
  Comment: Comment;
  Image: Image;
}

export const testModels = {
  User: {
    id: { type: "uuid" },
    createTime: { type: "dateTime" },
    updateTime: { type: "dateTime" },
    name: { type: "string", optional: true },
  },
  Post: {
    id: { type: "uuid" },
    createTime: { type: "dateTime" },
    updateTime: { type: "dateTime" },
    title: { type: "string", optional: true },
    content: { type: "string" },
    authorId: { type: "uuid" },
  },
  Comment: {
    id: { type: "uuid" },
    createTime: { type: "dateTime" },
    updateTime: { type: "dateTime" },
    postId: { type: "uuid" },
    authorId: { type: "uuid" },
    content: { type: "string" },
  },
  Image: {
    id: { type: "uuid" },
    postId: { type: "uuid" },
    src: { type: "string" },
  },
} as const satisfies DatabaseModels<TestModels>;

export const testRelations = {} as const satisfies DatabaseMaps<
  TestModels,
  typeof testModels
>;
