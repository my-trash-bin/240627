import { DatabaseMap } from "./DatabaseMap";
import { DatabaseModels } from "./DatabaseModels";

export type DatabaseMaps<T, U extends DatabaseModels<T>> = {
  [K in keyof T]: DatabaseMap<T, U, K>;
};
