var express = require('express');
var router = express.Router();
const controllerCurso = require('../controller/controllerCurso');

router.get("/",controllerCurso.get);
router.get("/edit/:id",controllerCurso.getEdit);
router.post("/",controllerCurso.post);

module.exports = router;