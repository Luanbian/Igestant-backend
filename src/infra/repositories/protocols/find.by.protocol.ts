export interface FindByRepository<T, R> {
  exec: (data: T) => Promise<R | null>
}
