import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";
import { PostDetailView } from "../../../types/post/PostDetailView";
import { PostCommentsRoutes } from "./comments";

export type PostRoute = EnsureAPIRoute<{
  method: "GET";
  path: "/api/v1/posts/:postId";
  responseType: "json";
  response: PostDetailView;
}>;

export type PostRoutes = PostRoute | PostCommentsRoutes;
