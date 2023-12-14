export interface UpdateRepository<T, R> {
  exec: (id: string, data: T) => Promise<R>
}
