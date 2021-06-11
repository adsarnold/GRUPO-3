const modelCurse = require("../model/modelCurso");
 async function get (req,res){
   const curse = await modelCurse.getCurso();
   res.render("curso",{courses:curse});
}
async function getEdit(req,res){
   const curseId = req.params.id;
   const curse = await modelCurse.getCurseById(curseId);
   res.render("curse/edit",{curse:curse});
}
async function post(req,res){
    const curse = req.body;
    await modelCurse.insertCurso(curse);
    res.redirect("/curso");
}
module.exports = {
   get:get,
   getEdit:getEdit,
   post:post
}