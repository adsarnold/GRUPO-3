var express = require('express');
var router = express.Router();
const controllerList = require('../controller/controllerList');

router.get("/",controllerList.get);
router.get("/edit/:id",controllerList.getEdit);
router.post("/",controllerList.post);

module.exports = router;