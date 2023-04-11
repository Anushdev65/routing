const express = require('express')

const PORT = 4000
const productRouter = require('./routes/productRoutes')
const homeRouter = require('./routes/homeRoutes')
const productJewelery = require('./data/jewelery.json')
const cors = require('cors')

const app = express()

app.use(cors())
//Product Routes
//SSR setup
//setting the default view engine to hbs
app.set('view engine', 'hbs')
app.use(express.static('./public'))



app.use(homeRouter);
app.use("/products", productRouter);

// app.get('/products', (req, res) => {
//     res.render('index', { title: 'Ecommerce' });
// })



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