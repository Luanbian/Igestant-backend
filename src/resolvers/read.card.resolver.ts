import { Query, Resolver } from 'type-graphql'

@Resolver()
export class ReadCardResolver {
  @Query(() => String)
  public async handle (): Promise<string> {
    return 'hello world'
  }
}
