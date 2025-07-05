const express = require('express');
const router = express.Router();
const NewsletterController = require('../controllers/NewsletterController');

const { subscribe } = require('../controllers/newsletterController');

router.post('/subscribe', subscribe);
router.get('/subscribers', NewsletterController.getSubscribers);

module.exports = router;
