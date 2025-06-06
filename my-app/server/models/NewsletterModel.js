const db = require('../config/db');

const NewsletterModel = {
  async addSubscriber(email) {
    return db('subscribers').insert({ email });
  },
  async isEmailSubscribed(email) {
    return db('subscribers').where({ email }).first();
  }
};

module.exports = NewsletterModel;
