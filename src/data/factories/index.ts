import { makeCreateCardRepository, makeDeleteCardRepository, makeFindAllCardsRepository, makeUpdateCardRepository } from '../../infra/repositories/factories'
import { BcryptAdapter } from '../criptography/bcrypt.adapter'
import { type Encrypter } from '../criptography/protocols/encripter.protocol'
import { CreateCard } from '../usecases/create.card'
import { DeleteCard } from '../usecases/delete.card'
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
  const updateCardRepository = makeUpdateCardRepository()
  return new UpdateCard(updateCardRepository)
}

export const makeDeleteCard = (): DeleteCard => {
  const deleteCardRepository = makeDeleteCardRepository()
  return new DeleteCard(deleteCardRepository)
}

export const makeEncrypter = (): Encrypter => {
  const salt = 12
  return new BcryptAdapter(salt)
}
