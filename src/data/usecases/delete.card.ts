import { type Card } from '../../domain/entities/card'
import { type DeleteRepository } from '../../infra/repositories/protocols/delete.protocol'

export class DeleteCard {
  constructor (private readonly deleteCardRepository: DeleteRepository<Card>) {}

  public async perform (id: string): Promise<Card> {
    const result = await this.deleteCardRepository.exec(id)
    return result
  }
}
