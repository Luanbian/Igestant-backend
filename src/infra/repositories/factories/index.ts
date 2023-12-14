import { type Card } from '../../../domain/entities/card'
import { PrismaFindAllCards } from '../find.all.cards.repository'
import { type FindAllRepository } from '../protocols/find.all.protocol'

export const makeFindAllCardsRepository = (): FindAllRepository<Card> => {
  return new PrismaFindAllCards()
}
