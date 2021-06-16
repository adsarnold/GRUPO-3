const modelCurse = require("../model/modelUsers");

 async function get (req,res){
   const users = await modelUsers.getUsers();
   res.render("users",{users:users});
}

async function post(req,res){
    const user = req.body;
    await modelUsers.insertUsers(user);
    res.redirect("/users");

}

module.exports = {
   get:get,
   post:post
}