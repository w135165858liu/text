
//匀速减速动画综合封装

function animate(obj,attr,target,isLinear){
	var timer = 0;
	var iSpeed = 0;
	if(isLinear == undefined){
		isLinser = true;
	}
	clearInterval(obj.timer);
	obj.timer = setInterval(function(){
		var isStopcurrent = false;
		var current = parseFloat(getComputedStyle(obj,false)[attr]);
		if(attr == 'opacity'){
			current = Math.round(current * 100);
		}
		if(isLinear){
			if(current>target){
				iSpeed = -10;
			}else{
				iSpeed = 10;
			}
			if(Math.abs(target-current)<Math.abs(iSpeed)){
				if(attr == 'opacity'){
					obj.style.opacity = target/100;
				}else{
					obj.style[attr]=target + 'px';
				}
				isStopcurrent = true;
			}
		}else{
			iSpeed = (target - current)/10;
			iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
			if(!iSpeed){
				isStopcurrent = true;
				if(attr == 'opacity'){
					obj.style.opacity = target/100;
				}else{
					obj.style[attr]=target + 'px';
				}
			}
		}
		if(isStopcurrent){
				clearInterval(obj.timer);
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100;
				}else{
					obj.style[attr]=current + iSpeed + 'px';
				}
			}
	},30);
}