const db = require('../config/db');

const ReviewModel = {
  async addReview({ username, rating, comment }) {
    return db('reviews').insert({
      username,
      rating,
      comment
    }).returning('*');
  },

  async getAllReviews() {
    return db.withSchema('public')
             .from('reviews')
             .select('id', 'username', 'rating', 'comment', 'created_at');
  },

  async getReviewsByUsername(username) {
    return db('reviews').where({ username });
  },

  async deleteReview(id) {
    return db('reviews').where({ id }).del();
  }
};

module.exports = ReviewModel;
