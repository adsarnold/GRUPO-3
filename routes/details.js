var express = require('express');
var router = express.Router();
const detailsController = require('../controller/detailsController');

router.get("/",detailsController.get);
router.get("/edit/:id",detailsController.getEdit);
router.post("/",detailsController.post);

module.exports = router;