var express = require('express');
const listController = require('../controller/listController');
var router = express.Router();
const controllerList = require('../controller/listController');

router.get("/",listController.get);
router.get("/edit/:id",listController.getEdit);
router.post("/",listController.post);

module.exports = router;