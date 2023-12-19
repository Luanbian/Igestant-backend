import { makeAuthenticate } from '../../data/factories'

export const middleware = async (authToken: string): Promise<string> => {
  const authenticate = makeAuthenticate()
  try {
    const checkToken = await authenticate.verifyToken(authToken)
    return checkToken as string
  } catch (error) {
    throw new Error('invalid Token')
  }
}
