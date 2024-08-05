import { EnsureAPIRoute } from "@this-project/common-util-util/types/rest/EnsureAPIRoute";
import { UserAuthorizedView } from "../../../types/user/UserAuthorizedView";

export type UserMeRoutes =
  | EnsureAPIRoute<{
      method: "GET";
      path: "/api/v1/users/me";
      responseType: "json";
      response: UserAuthorizedView;
    }>
  | EnsureAPIRoute<{
      method: "PATCH";
      path: "/api/v1/users/me";
      requestType: "json";
      request: {
        name: string;
      };
      responseType: "json";
      response: UserAuthorizedView;
    }>;
