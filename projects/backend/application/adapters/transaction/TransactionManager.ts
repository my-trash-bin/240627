import { TransactionJob } from "./TransactionJob";

export interface TransactionManager {
  commit: () => Promise<void>;
  rollback: () => Promise<void>;
  doJob: <T = void>(work: TransactionJob<T>) => Promise<T>;
}
