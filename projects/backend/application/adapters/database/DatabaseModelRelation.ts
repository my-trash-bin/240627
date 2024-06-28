import { ExtractRelationFields } from "./ExtractRelationFields";

export type DatabaseModelRelation<
  T,
  N extends keyof T,
  M extends ExtractRelationFields<T, T[N]>
> = T[N][M] extends (infer I)[]
  ? {
      // TODO:
    }
  : never;
