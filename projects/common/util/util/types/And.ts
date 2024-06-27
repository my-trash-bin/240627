export type And<A extends boolean, B extends boolean, T = true, F = never> = [
  A
] extends [true]
  ? [B] extends [true]
    ? T
    : F
  : F;
