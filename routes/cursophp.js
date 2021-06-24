var express = require('express');
var router = express.Router();
const controllercursoPhp = require('../controller/controllercursoPhp');

router.get("/", controllercursoPhp.get);
router.get("/edit/:id", controllercursoPhp.getEdit);
router.post("/", controllercursoPhp.post);


module.exports = router;