const express = require('express')
const app = express()
const port = 3000

app.get("/", (res, req) => {
    res.send("Hola Mundo")
})

app.listen(port, () => {
    console.log("Servidor iniciado")
})