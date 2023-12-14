import { makeCreateCardRepository, makeDeleteCardRepository, makeFindAllCardsRepository, makeFindUserByEmail, makeUpdateCardRepository } from '../../infra/repositories/factories'
import { type Authenticate } from '../auth/protocol/authenticate.protocol'
import { JwtAdapter } from '../auth/token/jwt.adapter'
import { BcryptAdapter } from '../criptography/bcrypt.adapter'
import { type Encrypter } from '../criptography/protocols/encripter.protocol'
import { CreateCard } from '../usecases/create.card'
import { DeleteCard } from '../usecases/delete.card'
import { Login } from '../usecases/login.user'
import { ReadCard } from '../usecases/read.card'
import { UpdateCard } from '../usecases/update.card'
import * as dotenv from 'dotenv'
dotenv.config()

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

export const makeAuthenticate = (): Authenticate => {
  const secret = process.env.SECRET ?? ''
  return new JwtAdapter(secret)
}

export const makeLogin = (): Login => {
  const findUserByEmail = makeFindUserByEmail()
  const encrypter = makeEncrypter()
  return new Login(findUserByEmail, encrypter)
}
