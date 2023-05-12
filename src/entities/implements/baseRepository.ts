export interface BaseRepository<T> {
  list(tableName: string): Promise<T[]>;
}
