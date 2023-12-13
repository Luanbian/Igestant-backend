export interface UserProps {
  id: string
  name: string
  email: string
  password: string
}

export class User {
  public readonly id: string
  public readonly name: string
  public readonly email: string
  public readonly password: string

  private constructor (props: UserProps) {
    this.id = props.id
    this.name = props.name
    this.email = props.email
    this.password = props.password
  }

  public static create (input: UserProps): User {
    return new User(input)
  }
}
