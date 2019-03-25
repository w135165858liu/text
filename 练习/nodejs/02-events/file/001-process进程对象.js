// console.log(process.env)
//console.log(process.pid)
// console.log(process.argv.push('aa','bb'))
// console.log(process.argv)
// console.log('aa');
// process.nextTick(() => {
//   console.log('bb');
// });
// console.log('cc');
console.log('aa')
setTimeout(()=>{
	console.log('bb')
},10000)
console.log('cc')