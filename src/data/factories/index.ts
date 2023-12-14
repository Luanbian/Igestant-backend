import { makeCreateCardRepository, makeFindAllCardsRepository } from '../../infra/repositories/factories'
import { CreateCard } from '../usecases/create.card'
import { ReadCard } from '../usecases/read.card'
import { UpdateCard } from '../usecases/update.card'

export const makeReadCard = (): ReadCard => {
  const findAllRepository = makeFindAllCardsRepository()
  return new ReadCard(findAllRepository)
}

export const makeCreateCard = (): CreateCard => {
  const createCardRepository = makeCreateCardRepository()
  return new CreateCard(createCardRepository)
}

export const makeUpdateCard = (): UpdateCard => {
  return new UpdateCard()
}
