const modelCurse = require("../model/modelCurso");

 async function get (req,res){
   const curse = await modelCurso.getCurso();
   res.render("curso",{curse:curse});
}

async function getEdit(req,res){
   const curseId = req.params.id;
   const curse = await modelCurse.getCurseById(curseId);
   res.render("curse/edit",{curse:curse});
}

async function post(req,res){
    const curse = req.body;
    await modelCurse.insertCurse(curse);
    res.redirect("/curse");

}

module.exports = {
   get:get,
   getEdit:getEdit,
   post:post
}