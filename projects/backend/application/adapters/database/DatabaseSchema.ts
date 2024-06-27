import { DatabaseModel } from "./DatabaseModel";

export interface DatabaseSchema<T> {
  models: {
    [K in Extract<keyof T, string>]: DatabaseModel<K, T[K]>;
  };
}
