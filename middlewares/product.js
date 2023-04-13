const productData = require('../data/products.json')

const filterProducts = (req, res, next) => {
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
        res.json(filteredProducts);
    } else {
        res.json(newProductData);
        next();
    }

};

module.exports = { filterProducts };