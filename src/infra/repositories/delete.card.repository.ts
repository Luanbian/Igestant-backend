import { type Card } from '../../domain/entities/card'
import prisma from '../prisma'
import { type DeleteRepository } from './protocols/delete.protocol'

export class PrismaDeleteCard implements DeleteRepository<Card> {
  public async exec (id: string): Promise<Card> {
    const result = await prisma.feed.delete({
      where: {
        id
      }
    })
    return result
  }
}
