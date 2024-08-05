import { UserDetailView } from "./UserDetailView";

export interface UserAuthorizedView extends UserDetailView {
  email: string;
}
