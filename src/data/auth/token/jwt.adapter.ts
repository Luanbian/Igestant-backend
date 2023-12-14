import jwt, { type JwtPayload } from 'jsonwebtoken'
import { type Authenticate } from '../protocol/authenticate.protocol'
import { type User } from '../../../domain/entities/user'

export class JwtAdapter implements Authenticate {
  constructor (private readonly secret: string) {}

  public async generateToken (user: User): Promise<string> {
    const token = jwt.sign(user, this.secret)
    return token
  }

  public async verifyToken (token: string): Promise<string | JwtPayload> {
    const decoded = jwt.verify(token, this.secret)
    return decoded
  }
}
