cartList();//购物车



function cartList(){
	var oCartList = document.querySelectorAll('.cart-list')[0];
	var oCart = document.querySelectorAll('.top-top2')[0];
	oCart.onmouseenter = function(){
		animate(oCartList,{height:100},true)
	}
	oCart.onmouseleave = function(){
		animate(oCartList,{height:0},true)
	}
}