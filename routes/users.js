
var express = require('express');
var router = express.Router();
const controllerUsers = require('../controller/controllerUsers');

<<<<<<< HEAD
router.post("/users", controllerUsers.post);
// router.get("/users", controllerUsers.get);
module.exports = router;
=======
router.get("/", controllerUsers.get);
router.post("/", controllerUsers.post);

module.exports = router;
                      

>>>>>>> 5c8a321ba90fd95d60ce3ec9bea4bcca0d6e0bd3
