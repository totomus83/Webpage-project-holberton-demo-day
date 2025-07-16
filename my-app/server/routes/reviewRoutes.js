const express = require('express');
const router = express.Router();
const ReviewController = require('../controllers/reviewController');

router.post('/', ReviewController.addReview);
router.get('/', ReviewController.getReviews);
router.delete('/:id', ReviewController.deleteReview);

module.exports = router;
