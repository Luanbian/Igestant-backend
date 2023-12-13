import { ReadCardResolver } from '../../resolvers/read.card.resolver'

export const makeReadCardResolver = (): ReadCardResolver => {
  return new ReadCardResolver()
}
