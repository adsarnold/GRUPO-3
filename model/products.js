const productsData = require ("../products.json");

function getProducts() {
    return productsData
}

module.exports = {
    getProducts: getProducts
}