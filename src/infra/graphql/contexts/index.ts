import { middleware } from '../../../main/middleware'

export interface Context {
  token?: string
}

const context = async ({ req }): Promise<Context> => {
  if (req.body.operationName !== 'IntrospectionQuery' && req.body.operationName !== 'LoginUser') {
    const authToken: string = req.headers.authorization ?? ''
    return {
      token: await middleware(authToken)
    }
  }
  return {}
}

export default context
