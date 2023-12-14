import { type Card } from '../../../domain/entities/card'
import { PrismaCreateCard } from '../create.card.repository'
import { PrismaFindAllCards } from '../find.all.cards.repository'
import { type FindAllRepository } from '../protocols/find.all.protocol'
import { type CreateRepository } from '../protocols/create.protocol'

export const makeFindAllCardsRepository = (): FindAllRepository<Card> => {
  return new PrismaFindAllCards()
}

export const makeCreateCardRepository = (): CreateRepository<Card> => {
  return new PrismaCreateCard()
}
