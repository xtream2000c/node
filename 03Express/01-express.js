
const express = require('express') //Requiere express
const app = express() //Variable para disponer de todas las variables de Express
const port = 3000 //Puerto de escucha

//Por peticion de cliente GET
app.get('/', (req, res) => { //Usamos funcion flecha para evitar funciones innecesarias OBLIGATORIO req y res, '/' es el directorio en que va a buscar (Localhost)
  res.send('Hello World!') 
})

//Importante mostrar el puerto para cuando este en produccion saber cual es el puerto de escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})