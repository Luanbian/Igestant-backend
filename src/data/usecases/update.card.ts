import { type Card } from '../../domain/entities/card'
import { type UpdateRepository } from '../../infra/repositories/protocols/update.protocol'

export interface updateCardProps {
  id: string
  question?: string
  shortAnswer?: string
  longAnswer?: string
  reference?: string
}

export class UpdateCard {
  constructor (private readonly updateCardRepository: UpdateRepository<updateCardProps, Card>) {}

  public async perform (input: updateCardProps): Promise<Card> {
    const result = await this.updateCardRepository.exec(input.id, input)
    return result
  }
}
