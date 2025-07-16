const ReviewModel = require('../models/ReviewModel');

const addReview = async (req, res) => {
  const { username, rating, comment } = req.body;

  if (!username) return res.status(400).json({ error: 'Username is required' });
  if (!rating || rating < 1 || rating > 5)
    return res.status(400).json({ error: 'Rating must be between 1 and 5' });

  try {
    const [newReview] = await ReviewModel.addReview({ username, rating, comment });
    res.status(201).json({ message: 'Review added', review: newReview });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const getReviews = async (req, res) => {
  try {
    const reviews = await ReviewModel.getAllReviews();
    res.json(reviews);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

const deleteReview = async (req, res) => {
  const { id } = req.params;
  try {
    const deleted = await ReviewModel.deleteReview(id);
    if (deleted === 0) {
      return res.status(404).json({ message: 'Review not found' });
    }
    res.json({ message: 'Review deleted' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'Server error' });
  }
};

module.exports = {
  addReview,
  getReviews,
  deleteReview,
};
