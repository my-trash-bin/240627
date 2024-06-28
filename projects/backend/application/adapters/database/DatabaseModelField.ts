export type DatabaseModelField<T, V extends boolean> = (T extends string
  ? { readonly type: "string" | "uuid"; readonly map?: string }
  : T extends number
  ? { readonly type: "int" | "float"; readonly map?: string }
  : T extends boolean
  ? { readonly type: "boolean"; readonly map?: string }
  : T extends Date
  ? { readonly type: "dateTime"; readonly map?: string }
  : {
      readonly type: "custom";
      readonly serialize: (value: T) => string;
      readonly deserialize: (value: string) => T;
      readonly map?: string;
    }) &
  V extends true
  ? { readonly optional: true }
  : { readonly optional?: false };
