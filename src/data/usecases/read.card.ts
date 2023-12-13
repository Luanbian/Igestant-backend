import { Card } from '../../domain/entities/card'

export class ReadCard {
  public async perform (): Promise<Card> {
    return Card.create({
      id: 'random_id',
      question: 'é isso ai?',
      shortAnswer: 'sim',
      longAnswer: 'mas depende',
      reference: 'Dr. talvez'
    })
  }
}
