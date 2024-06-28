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
    id: { type: "uuid", defaultIncluded: true },
    createTime: { type: "dateTime", defaultIncluded: true },
    updateTime: { type: "dateTime", defaultIncluded: true },
    name: { type: "string", optional: true, defaultIncluded: true },
  },
  Post: {
    id: { type: "uuid", defaultIncluded: true },
    createTime: { type: "dateTime", defaultIncluded: true },
    updateTime: { type: "dateTime", defaultIncluded: true },
    title: { type: "string", optional: true, defaultIncluded: true },
    content: { type: "string", defaultIncluded: true },
    authorId: { type: "uuid", defaultIncluded: false },
  },
  Comment: {
    id: { type: "uuid", defaultIncluded: true },
    createTime: { type: "dateTime", defaultIncluded: true },
    updateTime: { type: "dateTime", defaultIncluded: true },
    postId: { type: "uuid", defaultIncluded: false },
    authorId: { type: "uuid", defaultIncluded: false },
    content: { type: "string", defaultIncluded: true },
  },
  Image: {
    id: { type: "uuid", defaultIncluded: true },
    postId: { type: "uuid", defaultIncluded: false },
    src: { type: "string", defaultIncluded: true },
  },
} as const satisfies DatabaseModels<TestModels>;

export const testRelations = {} as const satisfies DatabaseRelations<
  TestModels,
  typeof testModels
>;
