import 'reflect-metadata'
import { startStandaloneServer } from '@apollo/server/standalone'
import { makeServer } from '../infra/graphql/server'
import path from 'path'
import context from '../infra/graphql/contexts'

export async function bootstrap (): Promise<void> {
  const schemaPath = path.resolve(__dirname, '../infra/graphql/schema/*.gql')
  const server = makeServer(schemaPath)
  const { url } = await startStandaloneServer(server, {
    context,
    listen: {
      port: 4000
    }
  })
  console.log(`server running at port ${url}`)
}
bootstrap().then(() => {}).catch((err) => { console.log(err) })
