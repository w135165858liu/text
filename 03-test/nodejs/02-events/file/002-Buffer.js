const buf2 = Buffer.from('你好好')
console.log(buf2)//<Buffer e4 bd a0 e5 a5 bd e5 a5 bd>
const buf3 = Buffer.alloc(10);
console.log(buf3)//<Buffer 00 00 00 00 00 00 00 00 00 00>
buf3[0] = 10;
console.log(buf3)//<Buffer 0a 00 00 00 00 00 00 00 00 00>
buf3[1] = 0x10;
console.log(buf3)
buf3[9] = 9;
console.log(buf3.toString());
const buf4 = Buffer.alloc(9);
buf4[0] = 0xe4;
buf4[1] = 0xbd;
buf4[2] = 0xa0;
console.log(buf4.toString())