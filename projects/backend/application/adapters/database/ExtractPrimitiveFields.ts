import { ExtractRelationFields } from "./ExtractRelationFields";

export type ExtractPrimitiveFields<T, M> = Exclude<
  keyof M,
  ExtractRelationFields<T, M>
>;
