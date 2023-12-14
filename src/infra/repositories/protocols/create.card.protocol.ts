export interface CreateRepository<T> {
  exec: (data: T) => Promise<void>
}
