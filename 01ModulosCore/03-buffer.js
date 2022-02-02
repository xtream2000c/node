var buf = new Buffer.alloc(100),
    buf2 = new Buffer.alloc(26),
   // str = '\u00bd + \u00bc = \u00be'

    for (var i = 0; i < buf2.length; i++) {
        
        buf2[i]=65+i;
        
    }

    console.log(buf2.toString('ascii'))

    /*
buf.write('abcd', 0, 4, 'ascii')

console.log(
    buf,
    buf.toString('ascii'),
    str,
    str.length + 'caracteres',
    Buffer.byteLength(str, 'utf8') + 'bytes',
    buf2.length
)*/