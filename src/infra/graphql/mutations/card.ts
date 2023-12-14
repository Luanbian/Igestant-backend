import { makeCreateCard, makeDeleteCard, makeUpdateCard } from '../../../data/factories'
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
    id: string
    question: string
    shortAnswer: string
    longAnswer: string
    reference: string
  }
}

interface deleteCardInput {
  input: {
    id: string
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

export const deleteCard = makeResolver(async (args: deleteCardInput) => {
  const deleteCard = makeDeleteCard()
  const card = await deleteCard.perform(args.input.id)
  return card
})
