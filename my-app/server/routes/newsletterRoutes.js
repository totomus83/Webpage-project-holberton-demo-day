const express = require('express');
const router = express.Router();
const NewsletterController = require('../controllers/newsletterController');

const { subscribe, getSubscribers } = NewsletterController;

router.post('/subscribe', subscribe);
router.get('/subscribers', NewsletterController.getSubscribers);
router.delete('/unsubscribe', NewsletterController.unsubscribe);

module.exports = router;
