import { type JwtPayload } from 'jsonwebtoken'
import { type User } from '../../../domain/entities/user'

export interface Authenticate {
  generateToken: (user: User) => Promise<string>
  verifyToken: (token: string) => Promise<string | JwtPayload>
}
