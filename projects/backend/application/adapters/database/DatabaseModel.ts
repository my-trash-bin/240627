import { IsOptionalKey } from "@this-project/common-util-util";
import { DatabaseModelField } from "./DatabaseModelField";
import { ExtractPrimitiveFields } from "./ExtractPrimitiveFields";

export type DatabaseModel<T, N extends keyof T> = {
  readonly [K in ExtractPrimitiveFields<T, T[N]>]-?: DatabaseModelField<
    T[N][K],
    IsOptionalKey<T[N], K>
  >;
};
