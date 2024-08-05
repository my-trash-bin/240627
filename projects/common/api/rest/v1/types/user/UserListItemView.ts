import { EntityView } from "../EntityView";

export interface UserListItemView extends EntityView {
  name: string;
  profileImageUrl?: string;
}
