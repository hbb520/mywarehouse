$(document).ready(function(){
	
	
	//左二级菜单事件 + -
	$('.unfold dt').click(function(){

	$(this).siblings().slideToggle("slow");
	$(this).toggleClass("position")
		return false;
	})
	
		var toper = $('.zs-tabbarzs-tabbar-nav').offset().top;
		var lefter = $('.zs-tabbarzs-tabbar-nav').offset().left;
		var toper1 = $('.side-right').offset().top;
		var right1 = $('.side-right').offset().right;
	$(document).scroll(function(){		
					if($(document).scrollTop()>=toper){
						$('.zs-tabbarzs-tabbar-nav').css({
							"position":"fixed",				
							"left":lefter
							})
				}else{
					$('.zs-tabbarzs-tabbar-nav').css({
							"position":"absolute",
						    "left":"0px"
							})
					}
				if($(document).scrollTop()>=toper1){
					$('.side-right').css({
						"position":"fixed",
						"right":"30px"
					})
				}else{
					$('.side-right').css({
							"position":"absolute",
							"right":"0px"
							})
					}
				})	
	//zs-tabbarzs-tabbar-nav点击事件
	
	$('#zp-tabbar li').click(function(){
		$(this).addClass("cur");
		$(this).siblings().removeClass("cur")
		$(document).scrollTop(toper)
	})
	$('.phone-purchase').mouseenter(function(){
		$('.code').show(100)
	})
	$('.phone-purchase').mouseout(function(){
		$('.code').hide(100)
	})
	
	//商品加减
	
	$('.zs-decrease').click(function(){
		var valText = $(this).siblings('input').val();
		valText--;
		if(valText<=1){
			valText=1
		}
		$(this).siblings('input').val(valText);
	})
	$('.zs-increase').click(function(){
		var valText = $(this).siblings('input').val();
		valText++;
		if(valText>=10){
			valText=10
		}
		$(this).siblings('input').val(valText);
	})
	//浮动栏X
	$('.zs-close').click(function(){
		$('#zs-shop-cart-box').hide()
	})
	//加入购物车
	
	$('.zs-store-buy').click(function(){
		$('#zs-shop-cart-box').show()
		var jieshao = $('.zs-commodity-title').html()
		var price = parseInt($('#zp-promo-price').html())
		$.ajax({
			type:"post",
			url:"/api/register",
			data:{
				user:jieshao,
				password:price
			},
			 dataType: "json",
			 success: function (data) {
               
            },
            error: function (msg) {//ajax请求失败后触发的方法
//              alert(msg);//弹出错误信息
            }
		});

		
	})
	
	
	
	
	
	
	
	
	
	
	
	
})
