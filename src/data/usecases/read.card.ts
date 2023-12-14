import { type Card } from '../../domain/entities/card'
import { type FindAllRepository } from '../../infra/repositories/protocols/find.all.protocol'

export class ReadCard {
  constructor (private readonly findAllRepository: FindAllRepository<Card>) {}

  public async perform (): Promise<Card[]> {
    const result = await this.findAllRepository.exec()
    return result
  }
}
