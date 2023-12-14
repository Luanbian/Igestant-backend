import { makeFindAllCardsRepository } from '../../infra/repositories/factories'
import { CreateCard } from '../usecases/create.card'
import { ReadCard } from '../usecases/read.card'

export const makeReadCard = (): ReadCard => {
  const findAllRepository = makeFindAllCardsRepository()
  return new ReadCard(findAllRepository)
}

export const makeCreateCard = (): CreateCard => {
  return new CreateCard()
}
