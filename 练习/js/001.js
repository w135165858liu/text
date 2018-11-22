function toChange(){
	oBox1.style.width='100px';
	oBox1.style.height='100px';
	oBox1.style.background='red';
}

var oBox1 = document.getElementById('box');
oBox1.onclick = toChange;