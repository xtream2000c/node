var mydata = require('./my-data')

console.log(
    mydata.nombre,
    mydata.correo,
    mydata.telefono
)

var Reloj = require('./07-08-reloj')
var tula = new Reloj();
tula.on('tictac', function(){
    tula.theTime()
})