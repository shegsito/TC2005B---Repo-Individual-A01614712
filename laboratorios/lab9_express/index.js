const http    = require('http');
const express = require('express');
const path    = require('path');
const fs      = require('fs');
const app     = express();

const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: false }));

//Middleware
app.use((request, response, next) => {
    console.log('Middleware!');
    next(); //Le permite a la petición avanzar hacia el siguiente middleware
});

app.get('/', (request, response) => {
    response.setHeader('Content-Type', 'text/html');
    response.write(` 
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>Describe el archivo package.json.</h1>

            <p> {
                "name": "lab8_express",
                "version": "1.0.0",
                "description": "",
                "license": "ISC",
                "author": "",
                "type": "commonjs",
                "main": "index.js",
                "scripts": {
                    "test": "echo \"Error: no test specified\" && exit 1"
                },
                "dependencies": {
                    "body-parser": "^2.2.2",
                    "express": "^5.2.1"
                }
                } 
            </p>

            <p> Este archivo es creado al hacer un npm init, este es creado en la raíz del proyecto y contiene información escencial de la identidad del proyecto. Tiene una lista de las librerías usadas y diferentes metadatos que ayudarán la compilación del proyecto</p>

            <p>  Por ejemplo como usamos express y body-parser, estos son adjuntados en la parte de dependencias y contienen la versión usada, que son los que instalamos al empezar con npm i ...</p>

            
        </body>
        </html>
        
        
        
        
    `);

    response.end(); 
});

app.get('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok GET"});
    response.end();  
});

app.post('/test_json', (request, response, next) => {
    response.setHeader('Content-Type', 'application/json');
    response.json({code:200, msg:"Ok POST"});
    response.end();  
});

app.get('/test_html', (request, response, next) => {
    response.setHeader('Content-Type', 'text/html');    
    response.write(`
        <!DOCTYPE html>
        <html lang="en">
        <head>
            <meta charset="utf-8">
            <title>Código en HTML</title>
        </head>
        <body>
            <h1>hola mundo desde express</h1>
        </body>
        </html>
    `);
    response.end(); 
});

const rutasFormulario = require("./formulario.routes");
app.use('/formulario', rutasFormulario);

app.use((request, response, next) => {
    console.log('Otro middleware!');
    response.status(404);
    response.send('¡Page Not Found!'); //Manda la respuesta
});

const server = http.createServer( (request, response) => {    
    console.log(request.url);
});
app.listen(3000);