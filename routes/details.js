var express = require('express');
var router = express.Router();
const controllerDetails = require('../controller/controllerDetails');

router.get("/",controllerDetails.get);
router.get("/edit/:id",controllerDetails.getEdit);
router.post("/",controllerDetails.post);

module.exports = router;