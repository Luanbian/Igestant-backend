import { randomUUID } from 'node:crypto'
import { Card } from '../../domain/entities/card'
import { type CreateRepository } from '../../infra/repositories/protocols/create.protocol'

interface createCardProps {
  question: string
  shortAnswer: string
  longAnswer: string
  reference: string
}

export class CreateCard {
  constructor (private readonly createCardRepository: CreateRepository<Card>) {}

  public async perform (input: createCardProps): Promise<Card> {
    const card = Card.create({
      id: randomUUID(),
      question: input.question,
      shortAnswer: input.shortAnswer,
      longAnswer: input.longAnswer,
      reference: input.reference
    })
    await this.createCardRepository.exec(card)
    return card
  }
}
