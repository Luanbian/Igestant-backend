export interface updateCardProps {
  id: string
  question?: string
  shortAnswer?: string
  longAnswer?: string
  reference?: string
}

export class UpdateCard {
  public async perform (input: updateCardProps): Promise<string> {
    return JSON.stringify(input)
  }
}
