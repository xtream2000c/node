var http = require('http').createServer(webServer),
    path = require('path'), //Requerimos el módulo path
    urls = [  //Declaramos un array con 3 objetos
        { //Este primer objeto no contiene nada en la ruta
            ruta : '',
            output : '<h2>Home</h2>'
        },
        { //El segundo contendrá la ruta hacia acerca
            ruta : 'acerca',
            output : '<h2>Acerca</h2>'
        },
        {//El tercero contendrá la ruta hacia contacto
            ruta : 'contacto',
            output : '<h2>Contacto</h2>'
        }
    ]
    function webServer(req, res)
    {
        var message = '<h1>Hola Node.js</h1>',
        pathURL = path.basename(req.url) 
        console.log('Ruta completa: '+req.url)
        console.log('Ruta corta: '+pathURL)
        //Recorremos todas las rutas del array
        urls.forEach(function (pos){
            if(pos.ruta == pathURL)
            {
                res.writeHead(200, {'Content-Type':'text/html'})
                res.end(message + pos.output)
            }
        })
        //En caso de que la URL no exista (SI NO OBTENEMOS RESPUESTA)
        if(!res.finished)
        {
            res.writeHead(404, {'Content-Type':'text/html'})
            res.end('<h1>Error 404: Not Found</h1><br><h2>Eres un melon, la ruta no existe!!</h2>')
        }
    }
http.listen(3000)
console.log('Servidor corriendo en http://localhost:3000/')

