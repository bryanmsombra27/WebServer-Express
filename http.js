//node por defecto ya tiene instalado este paquete
const http = require('http');
const puerto = 8080;
///creando servidor 
///recibe un callback 2 parametros: Las solicitudes y las respuestas a las solicitudes http 
//createServer escucha por todas las peticiones que se hagan a las url
http.createServer((req, res) => {

        res.writeHead(200, {
            'Content-Type': 'application/json'
        })
        let salida = {
            nombre: 'Bryan',
            edad: 23,
            url: req.url //la url que solicita el usuario
        }
        //convirtiendo objeto de JS a un formato JSON
        res.write(JSON.stringify(salida));

        // res.write('hola mundo');

        //indicamos que termina nuestra respuesta 
        res.end();
    })
    //cofiguramos el puerto de por donde estara escuchando las peticiones 
    .listen(puerto);

console.log(`Escuchando por el puerto ${puerto}`);