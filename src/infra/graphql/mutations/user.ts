import { makeLogin } from '../../../data/factories'
import { makeResolver } from '../factories'

interface loginInput {
  input: {
    email: string
    password: string
  }
}

export const loginUser = makeResolver(async (args: loginInput) => {
  const login = makeLogin()
  const result = await login.perform(args.input)
  return result
})
