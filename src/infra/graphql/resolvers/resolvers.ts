import { makeReadCardResolver } from '../../../main/factories/query.factories'

const resolvers = {
  Query: {
    helloworld: async () => {
      return await makeReadCardResolver().handle()
    }
  }
}

export default resolvers
