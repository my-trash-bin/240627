import { DateTime } from "../DateTime";
import { UserListItemView } from "./UserListItemView";

export interface UserView extends UserListItemView {
  createTime: DateTime;
}
