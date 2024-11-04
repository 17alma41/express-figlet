const express = require('express')
const { exec } = require('child_process')
//const figlet = require('figlet')

const comando = 'echo "hola mundo" > hola.txt'
const app = express()
const port = 8000

app.get("/", (req, res) => {
    exec(comando, (error, stdout, stderr) =>{
        res.send(stdout)
    });
})

app.listen(port, () => {
    console.log("Servidor iniciado")
})