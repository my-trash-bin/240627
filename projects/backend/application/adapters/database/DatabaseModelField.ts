export type DatabaseModelField<N extends string, M extends string, T> = {
  name: N;
} & (T extends string
  ? { type: "string" }
  : T extends number
  ? { type: "int" | "float" }
  : T extends boolean
  ? { type: "boolean" }
  : T extends Date
  ? { type: "dateTime" }
  : {
      type: "custom";
      serialize: (value: T) => string;
      deserialize: (value: string) => T;
    });
