import { makeFindAllCardsRepository } from '../../infra/repositories/factories'
import { ReadCard } from '../usecases/read.card'

export const makeReadCard = (): ReadCard => {
  const findAllRepository = makeFindAllCardsRepository()
  return new ReadCard(findAllRepository)
}
