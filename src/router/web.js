// phụ trách tất cả các rourter trên website
import express from "express";
import homeController from "../controller/homeController";
let router = express.Router()
const initWebRoute = (app) => {
    // hôm sau
    router.get('/ejs1', homeController.getHomepage)
    // hôm trước =)))
    app.get('/', (req, res) => {
        res.send("Hello home")
    })
    // trước nữa kaka
    app.get('/about', (req, res) => {
        res.send("Hello about")
    })
    return app.use('/', router)
}
export default initWebRoute