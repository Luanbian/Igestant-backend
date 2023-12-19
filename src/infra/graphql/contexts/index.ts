import { middleware } from '../../../main/middleware'

export interface Context {
  token?: string
}

const context = async ({ req }): Promise<Context> => {
  const { body, headers } = req
  const { operationName } = body

  if (isCardOperation(operationName as string)) {
    const authToken: string = headers.authorization ?? ''
    return {
      token: await middleware(authToken)
    }
  }

  return {}
}

const isCardOperation = (operationName: string): boolean => {
  const cardOperations = ['createCard', 'updateCard', 'deleteCard', 'Mutation']
  return cardOperations.includes(operationName)
}

export default context
