
var express = require('express');
var router = express.Router();
const controllerUsers = require('../controller/controllerUsers');

router.get("/", controllerUsers.get);
router.post("/", controllerUsers.post);

module.exports = router;
                      

