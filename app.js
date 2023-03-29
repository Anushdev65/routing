const express = require('express')
const app = express()
const PORT = 3000
const productRouter = require('./routes/productRoutes')
const homeRouter = require('./routes/homeRoutes')
const productJewelery = require('./data/jewelery.json')


//Product Routes

app.use(homeRouter);
app.use("/api/products", productRouter);
//handle all other routes
app.all("*", (req, res) => {
    res.status(404).send("<h1 style ='color: red'> Page Not Found</h1>")
})


// app.get('/api/product1', (req, res) => {
//     res.json(productJewelery)
// })

app.listen(PORT, () => {
    console.log(`server started at port ${PORT}`)
})