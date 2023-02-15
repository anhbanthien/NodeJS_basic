import express from 'express'
import configViewEngine from './configs/viewEngine'

const app = express()
const post = 8080
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'about')
//     )

// })
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
    console.log(post);
})
