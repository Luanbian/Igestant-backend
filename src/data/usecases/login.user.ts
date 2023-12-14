import { type User } from '../../domain/entities/user'
import { type FindByRepository } from '../../infra/repositories/protocols/find.by.protocol'
import { type Encrypter } from '../criptography/protocols/encripter.protocol'

interface LoginProps {
  email: string
  password: string
}

export class Login {
  constructor (
    private readonly findUserByEmail: FindByRepository<{ email: string }, User>,
    private readonly encrypter: Encrypter
  ) {}

  public async perform (input: LoginProps): Promise<string> {
    const user = await this.findUser(input.email)
    await this.checkPassword(input.password, user.password)
    return 'ok'
  }

  private async findUser (email: string): Promise<User> {
    const user = await this.findUserByEmail.exec({ email })
    if (user === null) throw new Error('Email não encontrado')
    return user
  }

  private async checkPassword (password: string, hashPassword: string): Promise<void> {
    const check = await this.encrypter.matchPassword(password, hashPassword)
    if (!check) throw new Error('Senha incorreta')
  }
}
