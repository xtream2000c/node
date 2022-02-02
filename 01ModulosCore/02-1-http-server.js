const http = require('http');

function webServer(req, res) {
    //en este caso no es texto plano sino un codigo html
    res.writeHead(200, {'Content-Type':'text/html'});
    res.end('<h1>Hola Mundo</h1>');
}

http
    .createServer(webServer)
    .listen(3000, 'localhost')

console.log(`El servidor se está ejecutando en http://localhost:3000/`);
