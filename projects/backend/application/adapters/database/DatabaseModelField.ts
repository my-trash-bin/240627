export type DatabaseModelField<T, V extends boolean> = (T extends string
  ? { readonly type: "string" | "uuid" }
  : T extends number
  ? { readonly type: "int" | "float" }
  : T extends boolean
  ? { readonly type: "boolean" }
  : T extends Date
  ? { readonly type: "dateTime" }
  : {
      readonly type: "custom";
      readonly serialize: (value: T) => string;
      readonly deserialize: (value: string) => T;
    }) &
  (V extends true
    ? { readonly optional: true }
    : { readonly optional?: false }) & {
    defaultIncluded: boolean;
  };
