const modelDetails = require("../model/modelDetails");
 async function get (req,res){
   const details = await modelDetails.getDetails();
   res.render("details",{details:details});
}
async function getEdit(req,res){
   const detailsId = req.params.id;
   const details = await modelDetails.getDetailsById(detailsId);
   res.render("details/edit",{details:details});
}
async function post(req,res){
    const details = req.body;
    await modelDetails.insertDetails(details);
    res.redirect("/details");
}
module.exports = {
   get:get,
   getEdit:getEdit,
   post:post
}