const modelCurse = require("../model/modelUsers");

 async function get (req,res){
   const users = await modelUsers.getUsers();
   res.render("users",{users:users});
}

async function getEdit(req,res){
   const usersId = req.params.id;
   const user = await modelUsers.getUsersById(usersId);
   res.render("user/edit",{user:user});
}

async function post(req,res){
    const user = req.body;
    await modelUsers.insertUsers(user);
    res.redirect("/user");

}

module.exports = {
   get:get,
   getEdit:getEdit,
   post:post
}