import { makeCreateCard, makeUpdateCard } from '../../../data/factories'
import { makeResolver } from '../factories'

interface createCardInput {
  input: {
    question: string
    shortAnswer: string
    longAnswer: string
    reference: string
  }
}

interface updateCardInput {
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

export const updateCard = makeResolver(async (args: updateCardInput) => {
  const updateCard = makeUpdateCard()
  const card = await updateCard.perform(args.input)
  return card
})
