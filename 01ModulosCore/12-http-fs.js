var http = require('http').createServer(webServer),
    fs = require('fs')
function webServer(req, res)
{
    function readFile(err, data) //Si miramos en la documentación, recibe un error y los datos
    {
        if(err) throw err //Si se produce un error, lo mostramos por consola
        res.end(data)
    }
    res.writeHead(200, {'Content-Type':'text/html'})
    //Equivocarse en la ruta para explicar el if(err) throw err;
    //Podemos probar a escribir mal el nombre de index.html y ver la consola
    fs.readFile('recursos/index.html', readFile)
}
http.listen(3000)
console.log('Servidor corriendo en http://localhost:3000/')