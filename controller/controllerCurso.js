const modelCurse = require("../model/modelCurso");
 async function get (req,res){
   const curse = await modelCurse.getCurso();
   res.render("curso",{courses:curse});
}
<<<<<<< HEAD
async function getCurso(req, res) {
   const curse = await modelCurse.getCurso();
   res.render("curso", {curse: curse})
 }
=======

async function getCurso(req,res){
   const curseId = req.body;
   const curse = await modelCurse.getCurso(curse);
   res.redirect("/cursos");
}

>>>>>>> 5c8a321ba90fd95d60ce3ec9bea4bcca0d6e0bd3
async function getEdit(req,res){
   const curseId = req.params.id;
   const curse = await modelCurse.getCursoById(curseId);
   console.log(curse)
   res.render("course/edit",{courses:curse});
}


async function post(req,res){
    const curse = req.body;
    await modelCurse.insertCurso(curse);
    res.redirect("/cursos");
}

async function put(req,res){
   const curse = req.body;
   await modelCurse.insertCurso(curse);
   res.redirect("/cursos");
}

async function remove(req,res){
   const id = req.body.id;
   await modelCurse.removeCurso(id);
   res.redirect("/cursos");
}
module.exports = {
   getCurso: getCurso,
   remove:remove,
   put:put,
   get:get,
   getEdit:getEdit,
   post:post,
   getCurso:getCurso 
}