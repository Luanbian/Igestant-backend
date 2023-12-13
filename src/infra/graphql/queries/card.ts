import { makeReadCard } from '../../../data/factories'
import { makeResolver } from '../factories'

export const readCard = makeResolver(async () => {
  const readCard = makeReadCard()
  const result = await readCard.perform()
  return result
})
