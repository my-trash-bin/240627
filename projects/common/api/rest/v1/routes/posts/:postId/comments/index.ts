import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";
import { CommentDetailView } from "../../../../types/comment/CommentDetailView";
import { CommentListItemView } from "../../../../types/comment/CommentListItemView";
import { PostCommentRoutes } from "./:id";

export type PostCommentsRoute =
  | EnsureAPIRoute<{
      method: "GET";
      path: "/api/v1/posts/:postId/comments";
      responseType: "json";
      response: CommentListItemView[];
    }>
  | EnsureAPIRoute<{
      method: "PUT";
      path: "/api/v1/posts/:postId/comments";
      requestType: "text";
      responseType: "json";
      response: CommentDetailView;
    }>;

export type PostCommentsRoutes = PostCommentsRoute | PostCommentRoutes;
