const modelLogin = require("../model/modelLogin");
 async function get (req,res){
   const login = await modelCurse.getLogin();
   res.render("login",{login:login});
}
async function post(req,res){
   const loginId = req.params.id;
   const login = await modelLogin.getLoginById(loginId);
   res.redirect("/cursos");
}

module.exports = {
   get:get,
   post:post
}