	var a=1
	function showimg(a,adWidth){
		$('#indexFocusUl').stop(true,false).animate({left:-adWidth*a},500);
	}
	
	function play(imgType){
		switch(imgType){
			case 1:
			var adWidth = 740
			var len = 6
			adTimer1 = setInterval(function(){
				showimg(a,adWidth);
				a++
				if(a>=6){
					a=0
				}
			},3000)
		}
		
	}
	function stop(imgType){
		switch(imgType){
			case 1:
			clearInterval(adTimer1)
		}
	}
play(1)
$(".focus-box").mouseenter(function() {
						$(".focus-prev-btn").show();
						$(".focus-next-btn").show();
					}).mouseleave(function() {
						$(".focus-prev-btn").hide();
						$(".focus-next-btn").hide();
					});
					
$('.focus-prev-btn').click(function(){
	var imgType= 1;
	var len = 6;
	if((a+1)>=6){
		a=0
	}else{
		a++
	}
	
	showimg(a,adWidth)
	
})
















