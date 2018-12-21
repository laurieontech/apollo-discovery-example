import { makeExecutableSchema, addMockFunctionsToSchema } from 'graphql-tools';
// import mocks from './mocks';
import resolvers from './resolvers';

const typeDefs = `
type Query {
  testString: String
  program: Program
  allPrograms: [Program] 
},
type Program {
  id: Int
  title: String
  abstract: String
  slot: Int
  cases: [Case]
},
type Case {
  title: String
  country: String
  year: Int
  clock: Float
  program: Program
}
`;

const schema = makeExecutableSchema({ typeDefs, resolvers });

// addMockFunctionsToSchema({ schema, mocks });

export default schema;
