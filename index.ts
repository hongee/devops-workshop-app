import express from "express"
import bodyParser from "body-parser"

const app = express()
app.set("port", process.env.PORT || 3000)
app.set("host", process.env.HOST || "0.0.0.0")
app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

let db = null;
let globalCounter = 0;

app.get("/", (req, res) => {
    globalCounter++;
    res.send(`<h1>This page has been seen ${globalCounter} times!</h1>`)
})

const server = app.listen(app.get("port"), app.get("host"), () => {
    console.log(`Server started on ${app.get("host")}:${app.get("port")}`)
})
