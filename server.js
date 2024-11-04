const express = require('express')
const { exec } = require('child_process')
//const figlet = require('figlet')

//const comando = 'echo "hola mundo" > hola.txt'

const app = express()
const port = 8000

app.use(express.static("public"))

app.get("/", (req, res) => {
    exec(comando, (error, stdout, stderr) =>{
        res.send(stdout)
    });
})

app.get("/ping", (req, res) => {
    const dominio = req.query.dominio
    const comandoPing = `ping -c 4 ${dominio}`

    exec(comandoPing, (error, stdout, stderr) =>{
        res.send(stdout)
    });
})



app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`)
})