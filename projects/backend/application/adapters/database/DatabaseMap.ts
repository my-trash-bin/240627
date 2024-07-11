import { DatabaseModels } from "./DatabaseModels";
import { ExtractPrimitiveFields } from "./ExtractPrimitiveFields";

export type DatabaseIndex<T, U extends DatabaseModels<T>, V extends keyof T> = {
  //
};

export type DatabaseMap<T, U extends DatabaseModels<T>, V extends keyof T> = {
  primitiveFields: {
    [N in ExtractPrimitiveFields<T, T[V]>]: {
      defaultIncluded: boolean;
      map?: string;
    };
  };
  indices: DatabaseIndex<T, U, V>[]; // TODO:
  map?: string;
};
