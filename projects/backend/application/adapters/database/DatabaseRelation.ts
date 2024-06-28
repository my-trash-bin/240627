import { DatabaseModels } from "./DatabaseModels";
import { ExtractRelationFields } from "./ExtractRelationFields";

type Relation<
  T,
  U extends DatabaseModels<T>,
  V extends keyof T,
  N extends keyof T[V],
  M extends string[] = string[]
> = {
  type: "this 1:1 other";
};

export type DatabaseRelation<
  T,
  U extends DatabaseModels<T>,
  V extends keyof T
> = {
  fields: {
    [N in keyof T[V]]: N extends ExtractRelationFields<T, V>
      ? { defaultIncluded: boolean; map?: string }
      : Relation<T, U, V, N>;
  };
  indices: [][]; // TODO:
  map?: string;
};
