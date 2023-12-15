import 'reflect-metadata'
import { startStandaloneServer } from '@apollo/server/standalone'
import { makeServer } from '../infra/graphql/server'
import path from 'path'
import { middleware } from './middleware'

export interface Context {
  token?: string
}

export async function bootstrap (): Promise<void> {
  const schemaPath = path.resolve(__dirname, '../infra/graphql/schema/*.gql')
  const server = makeServer(schemaPath)
  const { url } = await startStandaloneServer<Context>(server, {
    context: async ({ req }) => ({
      token: await middleware(req.headers.authorization)
    }),
    listen: {
      port: 4000
    }
  })
  console.log(`server running at port ${url}`)
}
bootstrap().then(() => {}).catch((err) => { console.log(err) })
