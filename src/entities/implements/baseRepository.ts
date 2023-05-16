export interface BaseRepository<T> {
  list(tableName: string): Promise<T[]>;
  create(tableName: string, data: T): Promise<{ result?: T; error?: string }>;
}
