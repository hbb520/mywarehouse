
		$(document).ready(function(){
			
			//轮播图
					var adTimer1 = adTimer2 = adTimer3 = adTimer4 = adTimer5 = null;
					var currslid1 = currslid2 = currslid3 = currslid4 = currslid5 = 1;

					//图片移动函数
					function showImg(currslid, imgDiv, adWidth) {
						if(!currslid) {
							$("#" + imgDiv + "Ul").stop(true, false).animate({
								left: -adWidth * currslid
							}, 500);
						} else {
							$("#" + imgDiv + "Ul").stop(true, false).animate({
								left: -adWidth * currslid
							}, 500);
						}
						$("#" + imgDiv + "Span > span:eq(" + currslid + ")").addClass("current").siblings().removeClass("current");
						$("#" + imgDiv + "Next").attr({
							'page': currslid
						});
						$("#" + imgDiv + "Prev").attr({
							'page': currslid
						});
					}
				//定时函数
					function playIt(imgType) {
						var imgType = parseInt(imgType);
						var adWidth = 419;
						switch(imgType) {
							case 1:
								var adWidth = 740;
								var courrLen = $("#indexFocusSpan > span").length;
								if(courrLen > 1) {
									adTimer1 = setInterval(function() {
										showImg(currslid1, 'indexFocus', adWidth);
										currslid1++;
										if(currslid1 >= courrLen) {
											currslid1 = 0;
										}
									}, 3000);
								}
								break;
							case 2:
								var courrLen = $("#mobileFocusSpan > span").length;
								if(courrLen > 1) {
									adTimer2 = setInterval(function() {
										showImg(currslid2, 'mobileFocus', adWidth);
										currslid2++;
										if(currslid2 == courrLen) {
											currslid2 = 0;
										}
									}, 3000);
								}
								break;
							case 3:
								var courrLen = $("#computerFocusSpan > span").length;
								if(courrLen > 1) {
									adTimer3 = setInterval(function() {
										showImg(currslid3, 'computerFocus', adWidth);
										currslid3++;
										if(currslid3 == courrLen) {
											currslid3 = 0;
										}
									}, 3000);
								}
								break;
							case 4:
								var courrLen = $("#digitalFocusSpan > span").length;
								if(courrLen > 1) {
									adTimer4 = setInterval(function() {
										showImg(currslid4, 'digitalFocus', adWidth);
										currslid4++;
										if(currslid4 == courrLen) {
											currslid4 = 0;
										}
									}, 3000);
								}
								break;
							case 5:
								var courrLen = $("#diyFocusSpan > span").length;
								if(courrLen > 1) {
									adTimer5 = setInterval(function() {
										showImg(currslid5, 'diyFocus', adWidth);
										currslid5++;
										if(currslid5 == courrLen) {
											currslid5 = 0;
										}
									}, 3000);
								}
								break;
						}
					}
						//清除定时器
					function stopIt(imgType) {
						imgType = parseInt(imgType);
						switch(imgType) {
							case 1:
								clearInterval(adTimer1);
								break;
							case 2:
								clearInterval(adTimer2);
								break;
							case 3:
								clearInterval(adTimer3);
								break;
							case 4:
								clearInterval(adTimer4);
								break;
							case 5:
								clearInterval(adTimer5);
								break;
						}
					}
					playIt(1);
					playIt(2);
					playIt(3);
					playIt(4);
					playIt(5);


					//mouse span小球事件
					$(".focus-switch > span").mouseover(function() {
						var imgType = $(this).parent().attr('rel');
						imgType = parseInt(imgType);
						var imgDiv = '';
						var adWidth = 419;
						currslid = parseInt($(this).attr("rel"));
						switch(imgType) {
							case 1:
								currslid1 = currslid;
								imgDiv = 'indexFocus';
								adWidth = 740;
								break;
							case 2:
								currslid2 = currslid;
								imgDiv = 'mobileFocus';
								break;
							case 3:
								currslid3 = currslid;
								imgDiv = 'computerFocus';
								break;
							case 4:
								currslid4 = currslid;
								imgDiv = 'digitalFocus';
								break;
							case 5:
								currslid5 = currslid;
								imgDiv = 'diyFocus';
								break;
						}

						showImg(currslid, imgDiv, adWidth);
						stopIt(imgType);
						$(this).addClass('current').siblings().removeClass('current');
					}).mouseleave(function() {
						var imgType = $(this).parent().attr('rel');
						playIt(imgType);
					});

					var isIE = navigator.userAgent.indexOf("MSIE 6.0") === -1 ? 0 : 1;//IE判断
					if(!isIE) {//btn显示
						$(".focus-box").mouseenter(function() {
							$(".focus-prev-btn").show();
							$(".focus-next-btn").show();
						}).mouseleave(function() {
							$(".focus-prev-btn").hide();
							$(".focus-next-btn").hide();
						});
					}
					//左右点击
					$(".focus-prev-btn, .focus-next-btn").click(function() {
						var imgType = $(this).attr('rel');
						imgType = parseInt(imgType);
						var courrLen = parseInt($(this).attr('number'));
						var currslid = parseInt($(this).attr('page'));
						var clickType = $(this).attr('type');

						if('next' == clickType) {
							if((currslid + 1) >= courrLen) {
								currslid = 0;
							} else {
								currslid++;
							}
						} else {
							if(!currslid) {
								currslid = (courrLen - 1);
							} else {
								currslid--;
							}

						}

						var imgDiv = '';
						var adWidth = 419;
						switch(imgType) {
							case 1:
								currslid1 = currslid;
								imgDiv = 'indexFocus';
								adWidth = 740;
								break;
							case 2:
								currslid2 = currslid;
								imgDiv = 'mobileFocus';
								break;
							case 3:
								currslid3 = currslid;
								imgDiv = 'computerFocus';
								break;
							case 4:
								currslid4 = currslid;
								imgDiv = 'digitalFocus';
								break;
							case 5:
								currslid5 = currslid;
								imgDiv = 'diyFocus';
								break;
						}

						showImg(currslid, imgDiv, adWidth);

						stopIt(imgType);
						$("#" + imgDiv + "Span > span").removeClass('current');

						var rel = 0;
						$("#" + imgDiv + "Span > span").each(function() {
							rel = parseInt($(this).attr('rel'));
							if(rel == currslid) {
								$(this).addClass('current');
							}
						});

					});
			//二级菜单事件
					$('#subCateKey1').mouseenter(function() {
						$('.category-1').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey1 a').css("color", "#000000")
					})
					$('#subCateKey1').mouseleave(function() {
						$('.category-1').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey1 a').css("color", "#fff")
					})

					$('#subCateKey2').mouseenter(function() {
						$('.category-2').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey2 a').css("color", "#000000")
					})
					$('#subCateKey2').mouseleave(function() {
						$('.category-2').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey2 a').css("color", "#fff")
					})

					$('#subCateKey3').mouseenter(function() {
						$('.category-3').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey3 a').css("color", "#000000")
					})
					$('#subCateKey3').mouseleave(function() {
						$('.category-3').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey3 a').css("color", "#fff")
					})

					$('#subCateKey4').mouseenter(function() {
						$('.category-4').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey4 a').css("color", "#000000")
					})
					$('#subCateKey4').mouseleave(function() {
						$('.category-4').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey4 a').css("color", "#fff")
					})

					$('#subCateKey5').mouseenter(function() {
						$('.category-5').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey5 a').css("color", "#000000")
					})
					$('#subCateKey5').mouseleave(function() {
						$('.category-5').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey5 a').css("color", "#fff")
					})

					$('#subCateKey6').mouseenter(function() {
						$('.category-6').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey6 a').css("color", "#000000")
					})
					$('#subCateKey6').mouseleave(function() {
						$('.category-6').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey6 a').css("color", "#fff")
					})

					$('#subCateKey7').mouseenter(function() {
						$('.category-7').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey7 a').css("color", "#000000")
					})
					$('#subCateKey7').mouseleave(function() {
						$('.category-7').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey7 a').css("color", "#fff")
					})

					$('#subCateKey8').mouseenter(function() {
						$('.category-8').css("display", "block")
						$(this).css({
							"background": "white"
						})
						$('#subCateKey8 a').css("color", "#000000")
					})
					$('#subCateKey8').mouseleave(function() {
						$('.category-8').css("display", "none")
						$(this).css({
							"background": "#2d2d2d"
						})
						$('#subCateKey8 a').css("color", "#fff")
					})
			//导航条
			$('.zc-my-center').mouseover(function() {
				$('.zc-my-center').css({
					"background-color": "#fff"
				})
				$('.zc-my-center-bd').css("display", "block")
				$('.ico1').html('∧')
			})
			$('.zc-my-center').mouseout(function() {
				$('.zc-my-center').css({
					"background-color": "#F5F5F5"
				})
				$('.zc-my-center-bd').css("display", "none")
				$('.ico1').html('∨')
			})

			$('.zc-mobile').mouseover(function() {
				$('.zc-mobile').css({
					"background-color": "#fff"
				})
				$('.zc-mobile-bd').css("display", "block")
				$('.ico2').html('∧')
			})
			$('.zc-mobile').mouseout(function() {
				$('.zc-mobile').css({
					"background-color": "#F5F5F5"
				})
				$('.zc-mobile-bd').css("display", "none")
				$('.ico2').html('∨')
			})

			$('.lianxikefu').mouseover(function() {
				$('.lianxikefu').css({
					"background-color": "#fff"
				})
				$('.zc-service-tel').css("display", "block")
				$('.ico3').html('∧')
			})
			$('.lianxikefu').mouseout(function() {
				$('.lianxikefu').css({
					"background-color": "#F5F5F5"
				})
				$('.zc-service-tel').css("display", "none")
				$('.ico3').html('∨')
			})
			
			
			
			
			
			//侧边栏我的订单
			$('.side-order').mouseenter(function(){
				$('.side-order-red').animate({width:'100px'},600).html("我的订单")	
			})
			$('.side-order').mouseleave(function(){
				$('.side-order-red').animate({width:'0px'}).html("")	
			})
			//侧边栏 我的足迹
			$('.side-footprint').mouseenter(function(){
				$('.side-footprint-red').animate({width:'100px'},600).html("我的足迹")	
			})
			$('.side-footprint').mouseleave(function(){
				$('.side-footprint-red').animate({width:'0px'}).html("")	
			})
			//侧边栏 购物车
			$('.side-shopcrat').mouseenter(function(){
				$('.side-shopcrat-red').animate({width:'100px'},600).html("购物车")	
			})
			$('.side-shopcrat').mouseleave(function(){
				$('.side-shopcrat-red').animate({width:'0px'}).html("")	
			})
			//侧边栏返回顶部
			
			$('.side-backtop').click(function(){
				$('body').animate({
					"scrollTop":"0px"
				},300);
			})
			
	//放大镜
			$('#zoom1-big').css({
					  background: "url(imgs/G502_imgs/focus1_1.jpg) no-repeat 0 0",
//					  "background-position":"100px 200px"
				})
				
				
				
			$('.zs-big-pic').hover(function(event){
				$('.MagicZoomPup').show();
				$('#zoom1-big').show();
				
				
			},function(){
				$('.MagicZoomPup').hide();
				$('#zoom1-big').hide();
			}).mousemove(function(event){
				var left = event.pageX-$('.zs-big-pic').offset().left-$('.MagicZoomPup').width()/2;
				var top = event.pageY-$('.zs-big-pic').offset().top-$('.MagicZoomPup').height()/2;
				//pageY 浏览器的位置监听 不随滚动而改变
				var num=2;
				 if(left<=$('.zs-big-pic').offset().left-$('.MagicZoomPup').width()/2){
            	left=$('.zs-big-pic').offset().left-$('.MagicZoomPup').width()/2
        }
        if(left>=$('.zs-big-pic').offset().left+$('.zs-big-pic').width()-$(".MagicZoomPup").width()){
            left=$('.zs-big-pic').offset().left+$('.zs-big-pic').width()-$(".MagicZoomPup").width()
        }
        if(top<=$('.zs-big-pic').offset().top-210){
            top=$('.zs-big-pic').offset().top-210
        }
        if(top>=$('.zs-big-pic').offset().top){
            top=$('.zs-big-pic').offset().top

        }
		$('.MagicZoomPup').css({
					left:left,
					top:top
				})
				$('#zoom1-big').css({
				
					"background-position":(-num)*left+"px "+(-num)*top+"px"
				})
		
			})
			
	
				$(".zs-focus-list li").click(function() {
				
									$(this).siblings().removeClass('hover').find('i').removeClass('border');
									$(this).addClass('hover').find('i').addClass('border');
									setTimeout(function() {
										$("#zoomPreload").css('display', 'none');
									}, 500);
								});
			$('#1').click(function(){
					$('.zs-big-pic').html( '<a><img src="imgs/G502_imgs/focus1.jpg" /><div class="MagicZoomPup"></div></a>')		
					$('#zoom1-big').css({
						"background":"url(imgs/G502_imgs/focus1_1.jpg) no-repeat 0 0"
					})
			})
			$('#2').click(function(){
					$('.zs-big-pic').html( '<a><img src="imgs/G502_imgs/focus2.jpg" /><div class="MagicZoomPup"></div></a>')		
					$('#zoom1-big').css({
						"background":"url(imgs/G502_imgs/focus2_1.jpg) no-repeat 0 0"
					})
			})
			$('#3').click(function(){
					$('.zs-big-pic').html( '<a><img src="imgs/G502_imgs/focus3.jpg" /><div class="MagicZoomPup"></div></a>')		
					$('#zoom1-big').css({
						"background":"url(imgs/G502_imgs/focus3_1.jpg) no-repeat 0 0"
					})
			})
			$('#4').click(function(){
					$('.zs-big-pic').html( '<a><img src="imgs/G502_imgs/focus4.jpg" /><div class="MagicZoomPup"></div></a>')		
					$('#zoom1-big').css({
						"background":"url(imgs/G502_imgs/focus4_1.jpg) no-repeat 0 0"
					})
			})
			$('#5').click(function(){
					$('.zs-big-pic').html( '<a><img src="imgs/G502_imgs/focus5.jpg" /><div class="MagicZoomPup"></div></a>')		
					$('#zoom1-big').css({
						"background":"url(imgs/G502_imgs/focus5_1.jpg) no-repeat 0 0"
					})
			})
			










































		})