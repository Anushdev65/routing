const productData = require('../data/products.json')
const express = require('express');
const router = express.Router();
const { filterProducts } = require('../middlewares/product');


//Returns all data

router.get("/", filterProducts, (req, res) => {
    res.json(req.productData);
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