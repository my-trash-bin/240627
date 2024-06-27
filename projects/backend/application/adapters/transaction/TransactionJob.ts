import { Awaitable } from "@this-project/common-util-util";

export interface TransactionJob<T, R = void> {
  do: (
    start: (metadata: T) => Promise<void>,
    finish: (arg: R) => void
  ) => Awaitable<R>;
  undo: (id: string) => Awaitable<void>;
}
