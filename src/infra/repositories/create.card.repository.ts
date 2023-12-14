import { type Card } from '../../domain/entities/card'
import prisma from '../prisma'
import { type CreateRepository } from './protocols/create.protocol'

export class PrismaCreateCard implements CreateRepository<Card> {
  public async exec (data: Card): Promise<void> {
    await prisma.feed.create({
      data
    })
  }
}
