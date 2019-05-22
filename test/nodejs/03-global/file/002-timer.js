console.log(1);
let timer = setImmediate(()=>{
	console.log(2);
})
clearImmediate(timer);
console.log(3);