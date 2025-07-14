// handles database operations for newsletter: add, read, and delete
const db = require('../config/db');

const NewsletterModel = {
  async addSubscriber({ email, username, password }) {
    return db('subscribers').insert({
      email,
      username,
      password
    }).returning('*');
    console.log('Insert result:', result);
    return result;
  },

  async isEmailSubscribed(email) {
    return db('subscribers').where({ email }).first();
  },

  async isUsernameTaken(username) {
    return db('subscribers').where({ username }).first();
  },

  async getAllSubscribers() {
    return db.withSchema('public')
            .from('subscribers')
            .select('email', 'username', 'password');
  },


  async deleteSubscriber(email) {
    return db('subscribers').where({ email }).del();
  }
};

module.exports = NewsletterModel;
