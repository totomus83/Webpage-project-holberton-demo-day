// sets up API endpoints for newsletter actions

const express = require('express');
const router = express.Router();
const NewsletterController = require('../controllers/newsletterController');


router.post('/subscribe', NewsletterController.subscribe);
router.get('/subscribers', NewsletterController.getSubscribers);
router.delete('/unsubscribe', NewsletterController.unsubscribe);

module.exports = router;
