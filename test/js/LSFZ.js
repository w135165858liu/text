	function animate(obj,attr,target,isLinear){
		//设置默认是匀速动画
		if(isLinear == undefined){
			isLinear = true;
		}
		//防止多次操作开启多个定时器
		clearInterval(obj.timer);
		//速度/步长
		var iSpeed = 0;
		obj.timer = setInterval(function(){
			//isStopCurrent代表是否终止当前动画,由于在循环定时器中,所以每次执行都会变为false,代表不终止当前动画
			var isStopCurrent = false;
			//获取当前的最新的值
			var current = parseFloat(getComputedStyle(obj,false)[attr]);
			
			//opacity属性的处理
			if(attr == 'opacity'){
				//1.乘以100是为了计算
				//2.四舍五入是为了处理小数
				current = Math.round(current*100);
			}
			//匀速动画的处理
			if(isLinear){
				//确定匀速动画的速度
				if(current > target){
					iSpeed = -10;
				}else{
					iSpeed = 10;
				}
				//匀速动画终止条件
				if(Math.abs(target - current) < Math.abs(iSpeed)){
					//匀速动画终止后的处理:如果最后一次动画不够一个速度的话,直接到达目标值
					if(attr == 'opacity'){
						obj.style.opacity = target / 100;
					}else{
						obj.style[attr] = target + 'px';
					}
					//代表终止当前的动画					
					isStopCurrent = true;
				}
			//减速动画的处理
			}else{
				//确定减速动画的速度
				iSpeed = (target - current)/10;
				iSpeed = iSpeed > 0 ? Math.ceil(iSpeed) : Math.floor(iSpeed);
				//减速动画的终止条件
				if(!iSpeed){
					//代表终止当前的动画
					isStopCurrent = true;
				}
			}
			//如果终止当前的动画,清除定时器
			if(isStopCurrent){
				clearInterval(obj.timer);
			//如果不终止当前动画,运动
			}else{
				if(attr == 'opacity'){
					obj.style.opacity = (current + iSpeed)/100 ;
				}else{
					obj.style[attr] = current + iSpeed + 'px';
				}				
			}		
		},30)
	}