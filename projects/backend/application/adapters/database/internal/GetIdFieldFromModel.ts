import { DatabaseModel } from "../DatabaseModel";

export type GetIdFieldFromModel<T extends DatabaseModel<any, string>> =
  T["indices"][number];
