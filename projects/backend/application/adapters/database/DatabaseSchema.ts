import { DatabaseModel } from "./DatabaseModel";

export interface DatabaseSchema<T> {
  readonly models: {
    readonly [K in Extract<keyof T, string>]: DatabaseModel<T, K>;
  };
}
