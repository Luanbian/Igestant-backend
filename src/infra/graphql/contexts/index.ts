import { middleware } from '../../../main/middleware'

export interface Context {
  token?: string
}

const context = async ({ req }): Promise<Context> => {
  return {
    token: await middleware(req.headers.authorization as string)
  }
}

export default context
