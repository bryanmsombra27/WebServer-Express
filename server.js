const express = require("express");
const app = express();
const hbs = require("hbs");
const puerto = process.env.PORT || 3000;

//importando helpers
require('./hbs/helpers');

//middleware : un callback que se va a ejecutar sin importar que url pida el usuario
app.use(express.static(`${__dirname}/public`));

//Express HBS Engine
hbs.registerPartials(`${__dirname}/views/parciales`);
app.set("view engine", "hbs");



app.get("/", (req, res) => {
    // res.send('Hello World');

    //en automatico detecta que formato de salida tendra nuestro contenido y ya no es necesario parsear el contenido
    res.render("home", {
        nombre: "Koso",
        anio: new Date().getFullYear(),
    }); //renderiza el archivo home.hbs
});
app.get("/about", (req, res) => {
    // res.send('Hello World');

    //en automatico detecta que formato de salida tendra nuestro contenido y ya no es necesario parsear el contenido
    res.render("about", {
        anio: new Date().getFullYear(),
    }); //renderiza el archivo home.hbs
});

app.listen(puerto, () => {
    console.log(`escuchando peticiones por el puerto: ${puerto}`);
});