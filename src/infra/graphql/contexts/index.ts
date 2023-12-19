import { middleware } from '../../../main/middleware'

export interface Context {
  token?: string
}

const context = async ({ req }): Promise<Context> => {
  const allowedOperations = ['readCard', 'IntrospectionQuery', 'LoginUser']

  if (!allowedOperations.includes(req.body.operationName as string)) {
    const authToken: string = req.headers.authorization ?? ''
    return {
      token: await middleware(authToken)
    }
  }

  return {}
}

export default context
