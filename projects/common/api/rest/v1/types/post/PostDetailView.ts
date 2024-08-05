import { UserView } from "../user/UserView";
import { PostView } from "./PostView";

export interface PostDetailView extends PostView {
  author: UserView;
}
