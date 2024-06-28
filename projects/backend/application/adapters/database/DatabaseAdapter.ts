import { DatabaseSchema } from "./DatabaseSchema";

export interface DatabaseAdapter<
  T,
  V extends DatabaseSchema<T> & ValidateDatabaseSchema<T, V>
> {
  init: () => Promise<void>;
}
