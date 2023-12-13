import { ApolloServer } from '@apollo/server'
import { resolvers } from '../graphql/resolvers/index'
import { loadFilesSync } from '@graphql-tools/load-files'

export const makeServer = (schemaPath: string): ApolloServer => {
  const typeDefs = loadFilesSync(schemaPath)
  return new ApolloServer({
    typeDefs,
    resolvers
  })
}
