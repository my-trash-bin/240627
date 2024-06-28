import { ExtractPrimitiveFields } from "./ExtractPrimitiveFields";

export type DatabaseModelIndex<T, N extends keyof T> = {
  type: "id" | "unique" | "index";
  fields: ExtractPrimitiveFields<T, N>[];
};
