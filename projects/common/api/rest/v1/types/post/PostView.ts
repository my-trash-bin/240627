import { DateTime } from "../DateTime";
import { PostListItemView } from "./PostListItemView";

export interface PostView extends PostListItemView {
  contentBbcode: string;
  updateTime: DateTime;
}
