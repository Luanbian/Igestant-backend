import { ApolloServer } from 'apollo-server'

export async function bootstrap (): Promise<void> {
  const server = new ApolloServer({})

  const { url } = await server.listen()
  console.log('server running at port ', url)
}
