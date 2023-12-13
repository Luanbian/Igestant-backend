import { Field, ObjectType } from 'type-graphql'

@ObjectType()
export class CardModel {
  @Field()
    question: string

  @Field()
    shortAnswer: string

  @Field()
    longAnswer: string

  @Field()
    reference: string
}
