import { Author, View, FortuneCookie } from './connectors';

const resolvers = {
  Query: {
    author(_, args) {
      return Author.findOne({ where: args });
    },
    allAuthors() {
      return Author.findAll();
    },
    getFortuneCookie() {
      return FortuneCookie.getOne();
    }
  },
  Author: {
    posts(author) {
      return author.getPosts();
    },
    comments(author) {
      return author.getComments();
    }
  },
  Post: {
    author(post) {
      return post.getAuthor();
    },
    views(post) {
      return View.findOne({ postId: post.id }).then(view => view.views);
    }
  },
  Comment: {
    author(comment) {
      return comment.getAuthor();
    }
  }
};

export default resolvers;