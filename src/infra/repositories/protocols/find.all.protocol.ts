export interface FindAllRepository<T> {
  exec: () => Promise<T[]>
}
