import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";

export type PostCommentRoutes = EnsureAPIRoute<{
  method: "DELETE";
  path: "/api/v1/posts/:postId/comments/:id";
  requestType: "none";
  responseType: "text";
}>;
