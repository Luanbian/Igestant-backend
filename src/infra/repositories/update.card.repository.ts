import { type updateCardProps } from '../../data/usecases/update.card'
import { type Card } from '../../domain/entities/card'
import prisma from '../prisma'
import { type UpdateRepository } from './protocols/update.protocol'

export class PrismaUpdateCard implements UpdateRepository<updateCardProps, Card> {
  public async exec (id: string, data: updateCardProps): Promise<Card> {
    const result = await prisma.feed.update({
      data,
      where: {
        id
      }
    })
    return result
  }
}
