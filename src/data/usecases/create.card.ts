import { randomUUID } from 'node:crypto'
import { Card } from '../../domain/entities/card'

interface createCardProps {
  question: string
  shortAnswer: string
  longAnswer: string
  reference: string
}

export class CreateCard {
  public async perform (input: createCardProps): Promise<Card> {
    const card = Card.create({
      id: randomUUID(),
      question: input.question,
      shortAnswer: input.shortAnswer,
      longAnswer: input.longAnswer,
      reference: input.reference
    })
    return card
  }
}
