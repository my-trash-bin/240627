import { DatabaseModel } from "./DatabaseModel";

export type DatabaseModels<T> = {
  readonly [K in Extract<keyof T, string>]: DatabaseModel<T, K>;
};
