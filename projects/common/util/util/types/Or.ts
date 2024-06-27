export type Or<A extends boolean, B extends boolean, T = true, F = never> = [
  A
] extends [true]
  ? T
  : [B] extends [true]
  ? T
  : F;
