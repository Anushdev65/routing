const productData = require('../data/products.json')
const express = require('express');
const router = express.Router();


//Returns all data

router.get("/", (req, res) => {
    const { category, minprice } = req.query;

    const newProductData = []
    productData.map((product) => {
        const { id, title, price, category, image } = product
        newProductData.push({ id, title, price, category, image })
    });
    let filteredProducts = []
    //first check category filter
    if (category) {
        filteredProducts = newProductData.filter((product) => product.category === category)
    }
    //second check min price filter
    if (minprice) {
        //cjecking if any previous filted has already run
        if (filteredProducts.length !== 0) {
            filteredProducts = filteredProducts.filter((product) => product.price >= minprice)
        } else {
            filteredProducts = newProductData.filter((product) => product.price >= minprice)
        }
    }
    if (category || minprice) {
        res.render("index", { title: "Ecommerce", newProductData: filteredProducts })
    } else {
        res.render('index', { title: "Ecommerce", newProductData: newProductData });
    }
});




//Return specific product
//:productID is called Route parameter
router.get("/:productID", (req, res) => {
    const { productID } = req.params;
    if (Number(productID) >= 1 && Number(productID) <= productData.length) {
        res.json(productData[productID - 1])
    } else {
        res.send("Invalid URL")
    }
});

module.exports = router