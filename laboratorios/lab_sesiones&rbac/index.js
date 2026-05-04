const express = require('express');
const path    = require('path');
const app     = express();
const cookieParser = require('cookie-parser');
const session = require("express-session");
const cors = require('cors');

//Permite cualquier origen (útil en desarrollo, no en producción)
app.use(cors({
    origin: [
        "https://miapp.com", 
        "https://www.miapp.com",
        "http://localhost:3000",
        "http://google.fonts.com",
        "http://cdn.jsdelivr.net",
        "https://cdn.jsdelivr.net"
    ], // Reemplaza con tus dominios permitidos
    credentials: true}
));

app.set('view engine', 'ejs');
app.set('views', 'views');

app.use(cookieParser());
app.use(session({
    secret: 'mi string secreto que debe ser un string aleatorio muy largo, no como éste',
    resave: false,
    saveUninitialized: true,
    cookie: {
        httpOnly: true,
        sameSite: "lax",
        secure: false, // true cuando despliegues a https
    }
}));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.cookie("mi_cookie", "123", {
        httpOnly: true,
        sameSite: "lax",
        secure: false, // Pon true cuando despliegues a HTTPS
    });

    res.sendFile(path.join(__dirname, 'preguntas.html'));
});

app.get("/test_cookie", (req, res) => {
    const valor = req.cookies.mi_cookie;
    res.type('text/plain');
    res.send(valor || "No hay cookie llamada mi_cookie");
});

app.get("/test_session", (req, res) => {
    req.session.mi_variable = "valor";
    res.type('text/plain');
    res.send(req.session.mi_variable);
});

app.get("/test_session_variable", (req, res) => {
    const valor = req.session.mi_variable;
    res.type('text/plain');
    res.send(valor || "No hay variable de sesión llamada mi_variable");
});

app.get("/logout", (req, res) => {
    //CU Logout pero con BD

    req.session.destroy(()=>{
        res.redirect("/");
    });
});

app.get("/buscar" , (req, res) => {
    const q = req.query.q || "";
    res.send("<h1> Resultados de búsqueda para: " + q + "</h>")
});

app.listen(3000, () => {
    console.log('Servidor en http://localhost:3000');
});