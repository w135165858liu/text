//const buf = Buffer.from('hello')//<Buffer 68 65 6c 6c 6f>;
//console.log(buf);
const buf = Buffer.from('你好');
console.log(buf);//<Buffer e4 bd a0 e5 a5 bd>
const buf3 = Buffer.alloc(9);
buf3[0] = 0xe4;
buf3[1] = 0xbd;
buf3[2] = 0xa0;
buf3[3] = 0xe5;
buf3[4] = 0xa5;
buf3[5] = 0xbd;

console.log(buf3.toString())//<Buffer 20 10 00 00 00 00 00 00 00 00>




