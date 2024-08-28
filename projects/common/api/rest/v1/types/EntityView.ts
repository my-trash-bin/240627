import { Id } from "@this-project/common-api-common";
import { EntityTypes } from "./EntityTypes";

export interface EntityView {
  id: Id<EntityTypes>;
}
