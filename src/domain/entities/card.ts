export interface CardProps {
  id: string
  question: string
  shortAnswer: string
  longAnswer: string
  reference: string
}

export class Card {
  public readonly id: string
  public readonly question: string
  public readonly shortAnswer: string
  public readonly longAnswer: string
  public readonly reference: string

  private constructor (props: CardProps) {
    this.id = props.id
    this.question = props.question
    this.shortAnswer = props.shortAnswer
    this.longAnswer = props.longAnswer
    this.reference = props.reference
  }

  public static create (input: CardProps): Card {
    return new Card(input)
  }
}
