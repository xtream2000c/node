var Reloj = (function(){

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
        var h = addZero(date.getHours()); // 0 - 23
        var m = addZero(date.getMinutes()); // 0 - 59
        var s = addZero(date.getSeconds()); // 0 - 59

        function addZero(num){
            return (num<10)?('0'+num):num
        }

        var msg

        if(h<=12){
            msg = h+':'+m+':'+s+' AM'
        }else{
            msg = h-12+':'+m+':'+s+' PM'
        }
        console.log(msg)
    }

    return Clock

})()

module.exports = Reloj;