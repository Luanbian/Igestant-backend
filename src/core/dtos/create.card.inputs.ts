import { Field, InputType } from 'type-graphql'

@InputType()
export class CreateCardResolverInput {
  @Field()
    question: string

  @Field()
    shortAnswer: string

  @Field()
    longAnswer: string

  @Field()
    reference: string
}
