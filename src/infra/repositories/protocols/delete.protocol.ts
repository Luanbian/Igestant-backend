export interface DeleteRepository<T> {
  exec: (id: string) => Promise<T>
}
