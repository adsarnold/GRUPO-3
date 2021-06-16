var express = require('express');
var router = express.Router();
const controllerCurso = require('../controller/controllerCurso');

router.get("/",controllerCurso.get);
router.get("/edit/:id",controllerCurso.getEdit);
router.post("/",controllerCurso.post);
router.put("/", controllerCurso.put);
router.delete("/", controllerCurso.remove);

module.exports = router;