import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";
import { UserDetailView } from "../../../types/user/UserDetailView";

export type UserRoutes = EnsureAPIRoute<{
  method: "GET";
  path: "/api/v1/users/:id";
  responseType: "json";
  response: UserDetailView;
}>;
