import { type User } from '../../domain/entities/user'
import prisma from '../prisma'
import { type FindByRepository } from './protocols/find.by.protocol'

export class PrismaFindUserByEmail implements FindByRepository<{ email: string }, User | null> {
  public async exec (data: { email: string }): Promise<User | null> {
    const result = await prisma.user.findFirst({
      where: {
        email: data.email
      }
    })
    return result
  }
}
