import { Arg, Mutation, Resolver } from 'type-graphql'
import { CreateCardResolverInput } from '../core/dtos/create.card.inputs'
import { CardModel } from '../core/models/card.model'

@Resolver()
export class CreateCardResolver {
  @Mutation(() => CardModel)
  public async handle (@Arg('data') data: CreateCardResolverInput): Promise<CardModel> {
    const cardModel = new CardModel()
    cardModel.question = data.question
    cardModel.shortAnswer = data.shortAnswer
    cardModel.longAnswer = data.longAnswer
    cardModel.reference = data.reference
    return cardModel
  }
}
