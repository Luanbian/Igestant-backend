import { Arg, Mutation, Resolver } from 'type-graphql'
import { CreateCardResolverInput } from '../core/dtos/create.card.inputs'

@Resolver()
export class CreateCardResolver {
  @Mutation(() => Boolean)
  public async handle (@Arg('CreateCardResolverProps') data: CreateCardResolverInput): Promise<boolean> {
    return true
  }
}
