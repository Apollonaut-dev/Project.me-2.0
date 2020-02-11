const router = require('express').Router();
const Pages = require('../controllers/pages');

router.get('/', Pages.index);
router.get('/index', Pages.index);
router.get('/about', Pages.index);

router.get('/resume', Pages.resume);

router.get('/projects', Pages.projects);

router.get('/thinkery', Pages.thinkery);

router.get('/contact', Pages.contact);

module.exports = router;