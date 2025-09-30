const express = require("express");
const router = express.Router();
const {getHomepage, pageHello, pageHoiDanIt} = require('../controllers/homeControllers');

// router.method('./router', handler)


router.get('/', getHomepage); 
router.get('/hoidanit', pageHoiDanIt);
router.get('/hello', pageHello);

module.exports = router;
 