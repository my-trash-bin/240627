type IsSameType<A, B> = [A] extends [B]
  ? [B] extends [A]
    ? true
    : false
  : false;

export type Or<
  A extends boolean,
  B extends boolean,
  T = true,
  F = never
> = IsSameType<A, true> extends true
  ? T
  : IsSameType<B, true> extends true
  ? T
  : F;
