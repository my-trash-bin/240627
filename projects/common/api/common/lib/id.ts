export type Id<TModelName extends string> = string & { " Id": TModelName };

export function id<TModelName extends string>(id: string): Id<TModelName> {
  return id as Id<TModelName>;
}
