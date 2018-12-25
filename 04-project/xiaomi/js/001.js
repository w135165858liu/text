cartList();//购物车
pullDown();//下拉菜单


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

	var hideTimer = 0;
	for(var i = 0 ;i<pullDownItam.length - 2;i++){	
		pullDownItam[i].onmouseenter = function(){
			clearTimeout(hideTimer);
			pullDownMenu.style.borderTop = '1px solid #ccc';
			animate(pullDownMenu,{height:229},true,function(){
				pullDownMenu.style.overflow = 'visible';
			});
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
	console.log(pullDownItam,pullDownMenu,hideTimer)
}