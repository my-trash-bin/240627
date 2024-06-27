import { DatabaseModelField } from "./DatabaseModelField";
import { ExtractRelationFields } from "./ExtractRelationFields";

export interface DatabaseModel<T, N extends string, M> {
  fields: {
    [K in ExtractPrimitiveFields<T, M>]: DatabaseModelField<M[K]>;
  };
  relation: {
    [K in ExtractRelationFields<T, M>]: {
      //
    };
  };
  map?: string;
}
