const listingCtrl = require('./controllers/listing-controller');
const userCtrl = require('./controllers/user-controller');
const router = require('express').Router();

router.post('/signup', userCtrl.signUp);
router.post('/login', userCtrl.comparePassword);
router.get('/login', (req, res) => {
  res.status(200).send(req.session);
});
router.put('/account/:userId', userCtrl.updatePassword);

router.post('/listing', listingCtrl.listings.post);
router.get('/listing', listingCtrl.listings.get);
router.get('/listing/nearest', /*REPLACE_ME_WITH_FUNCTION_FROM_LISTING_CONTROLLER*/);
router.put('/listing/interest', listingCtrl.listings.setInterest);
router.delete('/listing/:listingId', listingCtrl.listings.delete);
router.put('/listing/:listingId', listingCtrl.listings.update);

router.post('/listing/give', listingCtrl.listings.give);
router.post('/resolve', /*REPLACE_ME_WITH_FUNCTION_FROM_LISTING_CONTROLLER*/);

// router.post('/upvote', )

module.exports = router;