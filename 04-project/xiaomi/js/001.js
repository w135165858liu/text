cartList();//购物车
pullDown();//下拉菜单

/*
					<li class="pull-down-itam">
						<div class="pull-down-image">
							<a href="javascript:;">
								<img src="images/mix3-320.png">
							</a>
						</div>
						<div class="pull-down-title">
							<a href="javascript:;">小米MIX3</a>
						</div>
						<p class="pull-down-price">3333元起 </p>
						<div class="pull-down-flag">新品</div>
					</li>

*/

var pullDownMenuData = [
	[
		{
			img:'images/mix3-320.png',
			title:'小米MIX3',
			flag:'pull-down-flag'
		},
		{
			img:'images/mix3-320.png',
			title:'小米MIX3',
			flag:'pull-down-flag'
		},
		{
			img:'images/mix3-320.png',
			title:'小米MIX3',
			flag:'pull-down-flag'
		},
		{
			img:'images/mix3-320.png',
			title:'小米MIX3',
			flag:'pull-down-flag'
		},
		{
			img:'images/mix3-320.png',
			title:'小米MIX3',
			flag:'pull-down-flag'
		},
		{
			img:'images/mix3-320.png',
			title:'小米MIX3',
			flag:'pull-down-flag'
		}
	]



];

function cartList(){
	var oCartList = document.querySelectorAll('.cart-list')[0];
	var oCart = document.querySelectorAll('.top-top2')[0];
	var oBuffer = document.querySelectorAll('.buffer')[0];
	var oEmptyCart = document.querySelectorAll('.empty-cart')[0];
	oCart.onmouseenter = function(){
		oBuffer.style.display = 'block';
		oEmptyCart.style.display = 'none';
		animate(oCartList,{height:100},true,function(){
			oBuffer.style.display = 'none';
			oEmptyCart.style.display = 'block';
		});
	}
	oCart.onmouseleave = function(){
		animate(oCartList,{height:0},true)
	}
} 
function pullDown(){
	var pullDownItam = document.querySelectorAll('.pull-list li');
	var pullDownMenu = document.querySelectorAll('.pull-down-menu')[0];
	var pullDownList = pullDownMenu.querySelector('.pull-down-list')[0];

	var hideTimer = 0;
	for(var i = 0 ;i<pullDownItam.length - 2;i++){	
		pullDownItam[i].index = i;
		pullDownItam[i].onmouseenter = function(){
			clearTimeout(hideTimer);
			pullDownMenu.style.borderTop = '1px solid #ccc';
			animate(pullDownMenu,{height:229},true,function(){
				pullDownMenu.style.overflow = 'visible';
			});
			loadData(this.index);
		}
		pullDownItam[i].onmouseleave = function(){
			hideTimer = setTimeout(function(){
				pullDownMenu.style.overflow = 'hidden';
				animate(pullDownMenu,{height:0},true,function(){
				pullDownMenu.style.borderTop = 'none'
			});
		},500);
		}
	}
	pullDownMenu.onmouseenter = function(){
		clearTimeout(hideTimer);
	}
	pullDownMenu.onmouseleave = function(){
		hideTimer = setTimeout(function(){
			pullDownMenu.style.overflow = 'hidden';
			animate(pullDownMenu,{height:0},true,function(){
				pullDownMenu.style.borderTop = 'none'
			});
		},500);
	}
	function loadData(index){
		var data = pullDownMenuData[index];
		/*
					<li class="pull-down-itam">
						<div class="pull-down-image">
							<a href="javascript:;">
								<img src="images/mix3-320.png">
							</a>
						</div>
						<div class="pull-down-title">
							<a href="javascript:;">小米MIX3</a>
						</div>
						<p class="pull-down-price">3333元起 </p>
						<div class="pull-down-flag">新品</div>
					</li>
		*/
		var html = '';
		for(var i = 0;i<data.length;i++){
			html +=' <li class="pull-down-itam">'
			html +='	<div class="pull-down-image">'
			html +='		<a href="javascript:;">'
			html +='			<img src="'+data[index].img+'">'
			html +='		</a>'
			html +='	</div>'
			html +='	<div class="pull-down-title">'
			html +='		<a href="javascript:;">'+data[index].title+'</a>'
			html +='	</div>'
			html +='	<p class="pull-down-price">3333元起 </p>'
			html +='	<div class="'+data[index].flag+'">新品</div>'
			html +='</li>'
		}

		pullDownList.innerHTML = 'html';
	}
}