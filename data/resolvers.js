import { Program } from './connectors';

const resolvers = {
  Query: {
    program(_, args) {
      return Program.findOne({ where: args });
    },
    allPrograms() {
      return Program.findAll({limit: 1});
    }
  },
  Program: {
    cases(program) {
      return program.getCases();
    }
  },
  Case: {
    program(ca) {
      return ca.getProgram();
    }
  }
};

export default resolvers;