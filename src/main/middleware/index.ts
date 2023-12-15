import { makeAuthenticate } from '../../data/factories'

export const middleware = async (authToken: string | undefined): Promise<string> => {
  if (authToken === undefined) throw new Error('token not provided')
  const authenticate = makeAuthenticate()
  try {
    const checkToken = await authenticate.verifyToken(authToken)
    return checkToken as string
  } catch (error) {
    throw new Error('invalid Token')
  }
}
