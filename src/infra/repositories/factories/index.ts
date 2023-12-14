import { type Card } from '../../../domain/entities/card'
import { PrismaCreateCard } from '../create.card.repository'
import { PrismaFindAllCards } from '../find.all.cards.repository'
import { type FindAllRepository } from '../protocols/find.all.protocol'
import { type CreateRepository } from '../protocols/create.protocol'
import { type UpdateRepository } from '../protocols/update.protocol'
import { PrismaUpdateCard } from '../update.card.repository'
import { type updateCardProps } from '../../../data/usecases/update.card'

export const makeFindAllCardsRepository = (): FindAllRepository<Card> => {
  return new PrismaFindAllCards()
}

export const makeCreateCardRepository = (): CreateRepository<Card> => {
  return new PrismaCreateCard()
}

export const makeUpdateCardRepository = (): UpdateRepository<updateCardProps, Card> => {
  return new PrismaUpdateCard()
}
