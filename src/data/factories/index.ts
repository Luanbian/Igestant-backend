import { ReadCard } from '../usecases/read.card'

export const makeReadCard = (): ReadCard => {
  return new ReadCard()
}
