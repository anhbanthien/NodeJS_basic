import express from 'express'
import configViewEngine from './configs/viewEngine'
import initWebRoute from './router/web'

require('dotenv').config()

const app = express()
const post = process.env.PORT || 8080
// setup view engine 
configViewEngine(app)
// init webroute     
initWebRoute(app)




app.listen(post, () => {
    console.log(`port dang la ${post}`);
})
