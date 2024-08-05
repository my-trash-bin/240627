import { UserView } from "../user/UserView";
import { CommentView } from "./CommentView";

export interface CommentDetailView extends CommentView {
  author: UserView;
}
