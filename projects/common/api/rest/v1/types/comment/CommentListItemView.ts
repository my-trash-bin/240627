import { DateTime } from "../DateTime";
import { EntityView } from "../EntityView";
import { UserListItemView } from "../user/UserListItemView";

export interface CommentListItemView extends EntityView {
  author: UserListItemView;
  content: string;
  createTime: DateTime;
  updateTime: DateTime;
}
