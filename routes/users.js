
var express = require('express');
var router = express.Router();
const controllerUsers = require('../controller/controllerUsers');

router.post("/users", controllerUsers.post);
// router.get("/users", controllerUsers.get);
module.exports = router;