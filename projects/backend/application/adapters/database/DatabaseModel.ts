import { IsOptionalKey } from "@this-project/common-util-util";
import { DatabaseModelField } from "./DatabaseModelField";
import { DatabaseModelIndex } from "./DatabaseModelIndex";
import { DatabaseModelRelation } from "./DatabaseModelRelation";
import { ExtractPrimitiveFields } from "./ExtractPrimitiveFields";
import { ExtractRelationFields } from "./ExtractRelationFields";

export interface DatabaseModel<T, N extends keyof T> {
  readonly fields: {
    readonly [K in ExtractPrimitiveFields<T, T[N]>]-?: DatabaseModelField<
      T[N][K],
      IsOptionalKey<T[N], K>
    >;
  };
  readonly relations: {
    [K in ExtractRelationFields<T, T[N]>]: DatabaseModelRelation<T, N, K>;
  };
  indices: DatabaseModelIndex<T, N>[];
  readonly map?: string;
}
