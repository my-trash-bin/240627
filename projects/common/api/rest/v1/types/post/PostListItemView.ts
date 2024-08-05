import { DateTime } from "../DateTime";
import { EntityView } from "../EntityView";

export interface PostListItemView extends EntityView {
  title: string;
  createTime: DateTime;
}
