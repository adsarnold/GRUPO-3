const modelUsers = require("../model/modelUsers");

 async function get (req,res){
     res.render("users");
}

async function post(req,res){
    const user = req.body;
    await modelUsers.insertUsers(user);
    res.redirect("/cursos");

}

module.exports = {
   get:get,
   post:post
}