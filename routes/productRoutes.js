const productData = require('../data/products.json')
const express = require('express');

const router = express.Router();

//Returns all data

router.get("/", (req, res) => {
    const newProductData = []
    productData.map((product) => {
        const { id, title, price, category, image } = product
        newProductData.push({ id, title, price, category, image })
    })
    res.json(productData)
})

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