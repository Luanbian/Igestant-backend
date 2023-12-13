import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import typeDefs from './graphql/typedefs'
import resolvers from './graphql/resolvers'

export async function bootstrap (): Promise<void> {
  const server = new ApolloServer({
    typeDefs,
    resolvers
  })

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4000
    }
  })
  console.log(`server running at port ${url}`)
}
bootstrap().then(() => {}).catch((err) => { console.log(err) })
