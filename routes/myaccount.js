var express = require('express');
var router = express.Router();
const controllerMyaccount = require('../controller/controllerMyaccount');

router.get("/",controllerMyaccount.get);
router.get("/edit/:id",controllerMyaccount.getEdit);
router.post("/",controllerMyaccount.post);

module.exports = router;