import { DatabaseModelField } from "./DatabaseModelField";

export interface DatabaseModel<N extends string, T> {
  fields: {
    [K in Extract<keyof T, string>]: DatabaseModelField<N, K, T[K]>;
  };
  map?: string;
}
