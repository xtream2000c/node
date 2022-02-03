
const express = require('express') //Requiere express
const app = express() //Variable para disponer de todas las variables de Express
const port = 3000 //Puerto de escucha

//Motor de plantillas
app.set('view engine', 'ejs');

//***********************Ruta para ficheros dinamicos*************************
app.set('views', __dirname+'/views');

//***********************Ruta para ficheros estaticos*************************
app.use(express.static(__dirname+'/public'));

//Por peticion de cliente GET
app.get('/', (req, res) => { //Usamos funcion flecha para evitar funciones innecesarias OBLIGATORIO req y res, '/' es el directorio en que va a buscar (Localhost)
  res.render('index',{titulo:'Este es un titulo dinamico'}) 
})

app.get('/contacto', (req, res) => { // usamos /contacto para crear una nueva ruta
    res.render('contacto', {tituloContacto:'Estas en contacto'}) 
})

app.use('/', (req, res) => {
  res.status(404).render("404", {
    titulo:"Error 404", 
    descripcion:"Pagina no encontrada"
  }) 
})

//Importante mostrar el puerto para cuando este en produccion saber cual es el puerto de escucha
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})