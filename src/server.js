import express from 'express'
import configViewEngine from './configs/viewEngine'
require('dotenv').config()

const app = express()
const post = process.env.PORT || 8080

configViewEngine(app)

app.get('/', (req, res) => {
    res.send("Hello home")
})
app.get('/about', (req, res) => {
    res.send("Hello about")
})
app.get('/ejs1', (req, res) => {
    res.render('index.ejs')
})
app.listen(post, () => {
    console.log(`port dang la ${post}`);
})
