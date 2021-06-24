var express = require('express');
var router = express.Router();
const controllerCursophp7 = require('../controller/controllerCursophp7');

router.get("/",controllerCursophp7.get);
router.post("/",controllerCursophp7.post);

module.exports = router;