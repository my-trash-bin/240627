import { IsSameType, Or } from "@this-project/common-util-util";

type IsRelationFieldFor<A, M, K extends keyof M> = Or<
  IsSameType<M[K], A>,
  IsSameType<M[K], A[]>,
  K
>;

type IsRelationField<T, M, K extends keyof M> = T[keyof T] extends infer A
  ? A extends any
    ? IsRelationFieldFor<A, M, K>
    : never
  : never;

export type ExtractRelationFields<T, M> = keyof M extends infer K
  ? K extends keyof M
    ? IsRelationField<T, M, K>
    : never
  : never;
