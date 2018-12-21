import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    program: (root, args) => {
      return {firstName: args.firstName, lastName: args.lastName};
    },
  }),
  Program: () => ({firstName: () => casual.first_name, lastName: () => casual.last_name, publisher: () => casual.company_name}),
  Case: () => ({title: casual.title, text: casual.sentences(3), views: casual._month_number }),
};

export default mocks;
