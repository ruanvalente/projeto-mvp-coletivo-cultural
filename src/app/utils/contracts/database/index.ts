interface DBClient<T> {
  list(): Promise<T[]>;
}
