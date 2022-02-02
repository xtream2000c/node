var EventEmitter = require('events').EventEmitter
    hereda = require('util').inherits

var Clock = function(){
    var self = this
    setInterval(function(){
        self.emit('tictac')
    },1000)

}

hereda(Clock, EventEmitter)
Clock.prototype.theTime = function(){
    var date = new Date();
    var h = date.getHours(); // 0 - 23
    var m = date.getMinutes(); // 0 - 59
    var s = date.getSeconds(); // 0 - 59
    var msg =  h+':'+m+':'+s
    console.log(msg)
}

var tula = new Clock();
tula.on('tictac', function(){
    tula.theTime()
})