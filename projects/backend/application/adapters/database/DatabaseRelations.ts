import { DatabaseModels } from "./DatabaseModels";
import { DatabaseRelation } from "./DatabaseRelation";

export type DatabaseRelations<T, U extends DatabaseModels<T>> = {
  [K in keyof T]: DatabaseRelation<T, U, K>;
};
