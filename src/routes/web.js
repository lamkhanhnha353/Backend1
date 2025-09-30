const express = require("express");
const router = express.Router();
const {getHomepage, getPageHello, getPageHoiDanIt, postCreateUser} = require('../controllers/homeControllers');

// router.method('./router', handler)
router.get('/', getHomepage); 
router.get('/hoidanit', getPageHoiDanIt);
router.get('/hello', getPageHello);
router.post('/create-user', postCreateUser)

module.exports = router;
 