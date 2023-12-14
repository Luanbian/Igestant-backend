import { randomUUID } from 'node:crypto'
import { makeEncrypter } from '../../src/data/factories'
import prisma from '../../src/infra/prisma'
import * as dotenv from 'dotenv'
dotenv.config()

async function main (): Promise<void> {
  const hash = makeEncrypter()
  const user = await prisma.user.create({
    data: {
      id: randomUUID(),
      email: process.env.EMAIL ?? '',
      name: 'Luan',
      password: (process.env.PASSWORD != null) ? await hash.encrypt(process.env.PASSWORD) : ''
    }
  })
  console.log(user)
}
main().then(() => { console.log('sucesso') }).catch((err) => { console.log(err) })
