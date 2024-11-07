const express = require('express')
const { exec } = require('child_process')
const figlet = require('figlet')

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

//Obtenemos el texto con figlet
app.get("/figlet", (req, res) =>{
    const texto = req.query.texto
    const fuentes = req.query.fuente

    figlet.text(
        `${texto}`,
        {
          font: fuentes,
          horizontalLayout: "default",
          verticalLayout: "default",
          width: 80,
          whitespaceBreak: true,
        },
        function (err, data) {
          if (err) {
            console.log("Something went wrong...");
            console.dir(err);
            return;
          }
          //console.log(data);
          res.send(`<pre>${data}</pre>`)
        }
    );

})

//Obtenemos el JSON de las fuentes
app.get("/fuentes", (req, res) => {
    figlet.fonts(function (err, fonts) {
        if (err) {
          console.log("something went wrong...");
          console.dir(err);
          return;
        }
        console.dir(fonts);
        res.json(fonts)
    });
})

app.listen(port, () => {
    console.log(`Servidor iniciado en http://localhost:${port}`)
})