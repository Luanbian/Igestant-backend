import 'reflect-metadata'
import { ApolloServer } from 'apollo-server'
import { buildSchema } from 'type-graphql'
import path from 'path'
import { ReadCardResolver } from '../resolvers/read.card.resolver'
import { CreateCardResolver } from '../resolvers/create.card.resolver'

export async function bootstrap (): Promise<void> {
  const schema = await buildSchema({
    resolvers: [
      ReadCardResolver,
      CreateCardResolver
    ],
    emitSchemaFile: path.resolve(__dirname, 'schema.gql')
  })

  const server = new ApolloServer({ schema })

  const { url } = await server.listen()
  console.log(`server running at port ${url}`)
}
bootstrap().then(() => {}).catch((err) => { console.log(err) })
