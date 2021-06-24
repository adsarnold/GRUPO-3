const modelCursophp7 = require("../model/modelCursophp7");
const viewCursophp7 = require("../model/modelCursophp7");

 async function get (req,res){
   const cursophp7 = await viewCursophp7.getCursophp7();
   res.render("cursophp7",{cursophp7:cursophp7});
}

async function post(req,res){
  const curse = req.body;
  await modelCursophp7.insertCursophp7(curse);
  res.redirect("/cursophp7");
}

module.exports = {
    get:get,
    post:post
}