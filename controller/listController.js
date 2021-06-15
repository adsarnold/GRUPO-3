const modelList = require("../model/modelList");
 async function get (req,res){
   const list = await modelList.getList();
   res.render("list",{list:list});
}
async function getEdit(req,res){
   const listId = req.params.id;
   const list = await modelList.getListById(listId);
   res.render("list/edit",{list:list});
}
async function post(req,res){
    const list = req.body;
    await modelList.insertList(list);
    res.redirect("/list");
}
module.exports = {
   get:get,
   getEdit:getEdit,
   post:post
}