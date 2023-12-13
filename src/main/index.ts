import 'reflect-metadata'
import { ApolloServer } from '@apollo/server'
import { startStandaloneServer } from '@apollo/server/standalone'
import gql from 'graphql-tag'
import { makeReadCardResolver } from './factories/query.factories'

export async function bootstrap (): Promise<void> {
  const typeDefs = gql`
    type Query {
      helloworld: String!
    }
  `
  const server = new ApolloServer({
    typeDefs,
    resolvers: {
      Query: {
        helloworld: async () => {
          return await makeReadCardResolver().handle()
        }
      }
    }
  })

  const { url } = await startStandaloneServer(server, {
    listen: {
      port: 4000
    }
  })
  console.log(`server running at port ${url}`)
}
bootstrap().then(() => {}).catch((err) => { console.log(err) })
