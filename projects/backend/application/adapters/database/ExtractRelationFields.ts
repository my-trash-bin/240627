import { IsSameType, Or } from "@this-project/common-util-util";
import { TestSchema, User } from "./example/TestSchema";

type IsRelationField<T, M, K extends keyof M> = T[keyof T] extends infer A
  ? A extends any
    ? Or<IsSameType<A, M[K]>, IsSameType<A[], M[K]>, K>
    : never
  : never;

export type ExtractRelationFields<T, M> = keyof M extends infer K
  ? K extends keyof M
    ? IsRelationField<T, M, K>
    : never
  : never;

// FIXME:

type X = IsRelationField<TestSchema, User, "id">;

type Test = ExtractRelationFields<TestSchema, User>;
