import { makeResolver } from '../factories'

export const readCard = makeResolver(async () => {
  return 'hello world from makeResolver'
})
