const db = require('../config/db');

const NewsletterModel = {
  async addSubscriber(email) {
    return db('subscribers').insert({ email }).returning('*');
  },

  async isEmailSubscribed(email) {
    return db('subscribers').where({ email }).first();
  },

  async getAllSubscribers() {
    return db.withSchema('public').from('subscribers').select('email');
  },
  
  async deleteSubscriber(email) {
    return db('subscribers').where({ email }).del();
  }
};

module.exports = NewsletterModel;
