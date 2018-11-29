var aList1 = document.querySelectorAll('.top4-top-list2 li');
	var aBtn1 = document.querySelectorAll('.top4-top-list2 span');
	for(var i=0;i<aList1.length;i++){
		aList1[i].index=i;
		var j=0;
		aList1[i].onclick=function(){
			
			if (j++%2 == 0){
				aBtn1[this.index].style.background="rgb(255, 103, 0)";
			}else{
				aBtn1[this.index].style.background="#fff";
			}
			console.log(j)
		}
	}