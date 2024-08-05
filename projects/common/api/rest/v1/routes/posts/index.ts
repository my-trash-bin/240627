import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";
import { PostListItemView } from "../../types/post/PostListItemView";
import { PostRoutes } from "./:postId";

export type PostsRoute = EnsureAPIRoute<{
  method: "GET";
  path: "/api/v1/posts";
  responseType: "json";
  response: PostListItemView;
}>;

export type PostsRoutes = PostsRoute | PostRoutes;
