import { IsSameType, Or } from "@this-project/common-util-util";

export type ExtractRelationFields<T, M> = keyof M extends infer K
  ? K extends keyof M
    ? T[keyof T] extends infer A
      ? A extends any
        ? Or<IsSameType<M[K], A>, IsSameType<M[K], A[]>, K>
        : never
      : never
    : never
  : never;
