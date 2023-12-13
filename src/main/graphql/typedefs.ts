import gql from 'graphql-tag'

const typeDefs = gql`
  type Query {
    helloworld: String!
  }
`
export default typeDefs
