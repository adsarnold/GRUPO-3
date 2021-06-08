const express = require("express");
const model = require("../model/products")


const router = express.Router();

router.get("/", function (req, res) {
    res.render("products", 
    {title: "Produtos | Listagem",
    products: model.getProducts()})
});

module.exports = router;