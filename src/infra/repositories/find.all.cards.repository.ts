import { type Card } from '../../domain/entities/card'
import prisma from '../prisma'
import { type FindAllRepository } from './protocols/find.all.protocol'

export class PrismaFindAllCards implements FindAllRepository<Card> {
  public async exec (): Promise<Card[]> {
    const result = await prisma.feed.findMany()
    return result
  }
}
