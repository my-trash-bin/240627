import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";
import { UserListItemView } from "../../types/user/UserListItemView";
import { UserRoutes } from "./:id";
import { UserMeRoutes } from "./me";

export type UsersRoute = EnsureAPIRoute<{
  method: "GET";
  path: "/api/v1/api/v1/users";
  responseType: "json";
  response: UserListItemView;
}>;

export type UsersRoutes = UsersRoute | UserRoutes | UserMeRoutes;
