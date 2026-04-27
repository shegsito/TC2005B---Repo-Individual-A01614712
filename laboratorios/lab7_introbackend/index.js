/*

let log = console.log;

// log("Hola mundo");

//fs es el modulo que contiene la funciones para manipular
// el sistema de archivos 

const fs = require("fs");

// crea un archivo con la clase writeFileSync

fs.writeFileSync("archivo.txt", "Hola Mundo");

// async sort

const arreglo = [1000, 3000, 500, 20];

for(let item of arreglo) {
    setTimeout( () => {
        log(item);
    }, item);
}

log("Hola");

setTimeout(() => {
    log("Mundo");
}, 1000);

log("Adios");

*/
// crear servidor
let log = console.log;

const http = require('http');
const server=http.createServer((req, res) => {
    log(req.url);
    res.setHeader("content-type", "text/html");
    res.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Simple Color Flipper</title>        
            <link rel= "stylesheet" href = "styles.css" />
        </head>

        <body>
            <nav>http://127.0.0.1:5501/
                <div class = "nav-center">
                    <h4> color changer </h4>
                    <p> hola profe, este se supone que cambia el color del bg cuando le picas pero no funciona porque no tiene el styles, app.js, algo que se arregla en otro lab
                    <ul class = "nav-links>
                        <li>
                            <a href = "index.html"> simple</a>
                        </li>
                        <li>
                            <a href = "hex.html"> hex</a>
                        </li>
                    </ul>
                </div>
            </nav>   
            
            <main>
                <div class = "container">
                    <h2>background color : <span class = "color">
                        #f1f5f8
                    </span></h2>
                    <button class = "btn btn-hero" id="btn"> click me </button>
                </div>
            </main>

            <!-- Aqu+i va el javascript-->

            <script src = "app.js"></script>

        </body>
        </html>
    `);
    res.end();
});

server.listen(4141, () => {
    log("Mi servidor está vivo corriendo en el puerto 4141");
});