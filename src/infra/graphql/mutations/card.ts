import { makeCreateCard } from '../../../data/factories'
import { makeResolver } from '../factories'

interface createCardInput {
  input: {
    question: string
    shortAnswer: string
    longAnswer: string
    reference: string
  }
}

export const createCard = makeResolver(async (args: createCardInput) => {
  const createCard = makeCreateCard()
  const card = await createCard.perform(args.input)
  return card
})
