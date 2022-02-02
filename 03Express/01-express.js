
const express = require('express') //Requiere express
const app = express() //Variable para disponer de todas las variables de Express
const port = 3000 //Puerto de escucha

app.use(express.static(__dirname+'/public'));

app.use('/', (req, res) => {
  res.status(404).sendFile(__dirname+"/public/404.html") 
})

//Por peticion de cliente GET
app.get('/', (req, res) => { //Usamos funcion flecha para evitar funciones innecesarias OBLIGATORIO req y res, '/' es el directorio en que va a buscar (Localhost)
  res.send('Sto ha cambiao? ahora si') 
})

app.get('/contacto', (req, res) => { // usamos /contacto para crear una nueva ruta
    res.send('Estas en contacto') 
  })



//Importante mostrar el puerto para cuando este en produccion saber cual es el puerto de escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})