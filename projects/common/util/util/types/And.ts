type IsSameType<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

export type And<
  A extends boolean,
  B extends boolean,
  T = true,
  F = never
> = IsSameType<A, true> extends true
  ? IsSameType<B, true> extends true
    ? T
    : F
  : F;
