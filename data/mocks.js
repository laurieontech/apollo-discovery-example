import casual from 'casual';

const mocks = {
  String: () => 'It works!',
  Query: () => ({
    author: (root, args) => {
      return {firstName: args.firstName, lastName: args.lastName};
    },
  }),
  Author: () => ({firstName: () => casual.first_name, lastName: () => casual.last_name, publisher: () => casual.company_name}),
  Post: () => ({title: casual.title, text: casual.sentences(3), views: casual._month_number }),
};

export default mocks;
