import { Awaitable } from "@this-project/common-util-util";

import { TransactionManager } from "./TransactionManager";

export interface TransactionAdapter<T> {
  transaction: <R>(
    doWork: (transactionManager: TransactionManager) => Awaitable<R>
  ) => Promise<R>;
  fetchFailedTransaction: () => Promise<T | undefined>;
}
