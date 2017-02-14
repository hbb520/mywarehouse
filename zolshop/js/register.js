$(document).ready(function(){
				$('#J_register_phone_submit').click(function(){//注册点击
					var user = $('#J_register_phone_number').val();
					var pas = $('#J_register_pasword_phone').val();
		//判断是否阅读用户协议			
				   var regRead = 0;
				   $("input[name=J_regRead_phone]").each(function() {
						if($(this).is(":checked")) {
							regRead = 1;
						}
					});
					if(!regRead) {
						alert("请先阅读用户协议");
						return false;
					}
		//判断手机号是否输入正确			
					var flagA = false
						var regExp = /1[3-8]+\d{9}/;
						if(regExp.test($('#J_register_phone_number').val())){
							flagA =true
						}else{
							$('#J_register_phone_tips').html('请输入有效的11位有效手机号码').show()
						return false
						
						}
	//判断验证码是否正确	
			var flagB = false
			if($('#J_register_checkcode_phone').val() != $('.captcha-img').html()){
				$('#J_register_checkcode_tips_phone').html('请输入正确的验证码').show()
				return false;
			}else{
				$('#change-right-tips').show()
					flagB = true;
			}
	//判断密码是否正确		
						var flagc = false
						var level = 0;
					var value =$('#J_register_pasword_phone').val();

					if(value.length>=6){
						if(null !== value.match(/\d/)){
							level++;
						}
						if(null !== value.match(/[a-zA-Z]/)){
							level++;
						}
						if(null !== value.match(/[^a-zA-Z0-9]/)){
							level++;
						}
					}
					if(level == 0){	
						level =0
						flagc = true;
					}
					var levelArr = ['输入6位以上密码','密码强度:弱','密码强度:中','密码强度:强'];
					
					$('#J_register_pasword_phone_tips').html(levelArr[level])
	//判断密码是否相同
	   var flagd = false; 
	var confirmV = $('#J_register_regPasword_phone').val();
					var pwV = $('#J_register_pasword_phone').val();
					if(pwV !== confirmV){
						$('#J_register_regPasword_phone_tips').css('background-position','-155px -182px')
						$('#J_register_regPasword_phone_tips').show().html('两次密码输入不一致')
						
					}else{
						$('#J_register_regPasword_phone_tips').css('background-position','-155px -152px')
						$('#J_register_regPasword_phone_tips').show().html('正确')
						flagd = true
					}
					$("#J_register_phone_submit").hide();
					$("#J_register_phone_loading").show();
					
					
					
					$.ajax({
						type:'get',
						url:'http://datainfo.duapp.com/shopdata/userinfo.php',
						data:{
							status:"register",
							userID:"18755839789",
							password:"123456"
						},
						success:function(data){
								location.href = 'login.html'
							
						},
						error:function(){
							alert("地址错误")
						}
					})
					
					
					
				})
				
				//合法判定
		
				$('#J_register_phone_number').blur(function(){if(userA()) {
	userB();
}})
				function userA(){
					
						var regExp = /1[3-8]+\d{9}/;
						if(regExp.test($('#J_register_phone_number').val())){
							return true;
						}
						$('#J_register_phone_tips').html('请输入有效的11位有效手机号码').show()
						return false
				
				}
				function userB(){
					$.ajax({
						type:'get',
						url:'http://datainfo.duapp.com/shopdata/userinfo.php',
						data:{
							userID:$('#J_register_phone_number').val(),
							status:"register",
							password:$('#J_register_pasword_phone').val()
						},
						success:function(data){
							if(data == 0){
								$('#J_register_phone_tips').html('该手机已经注册过了').show();
							}
							
							
							
//							else{
//								$('#phone_right-tips').show()
//							}
						},
						error:function(){
							
						}
					})
				}
				
				
				//选中加上红色边框
				$(":input").focus(function(){
					$(this).css("border-color","#CC0000");	
				}).blur(function(){
					$(this).css("border-color","#CCC")
				})
				
			//切换验证码
				$('.captcha-img').html(Math.random().toString(36).substring(4,9))	
			$('#J_Captcha-Img_Change_phone').click(function(){
				var num=Math.random().toString(36).substring(4,9)
			$('.captcha-img').html(num)	
				
			})
		//验证码判定
		
		$('#J_register_checkcode_phone').blur(function(){
		
			if($(this).val() != $('.captcha-img').html()){
				$('#J_register_checkcode_tips_phone').html('请输入正确的验证码').show()
				return false;
			}else{
				$('#change-right-tips').show()
				return true;
			}
		})
				
//		短信验证码判定	
var num=Math.random().toString(36).substring(4,9)
	
			$('#J_register_phone_send').click(function(){
				$('#J_register_phone_code').val(num=Math.random().toString(10).substring(2,8))
				$('#J_register_phone_code_tips').show().html('请填写手机验证码');
				settime()
			})
			$('#J_register_phone_code').focus(function(){
				$('#J_register_phone_code_tips').html('正确').show()
				$('#J_register_phone_code_tips').css("background-position","-155px -152px")
			})
			var countdown = 60;
			function settime() {
				if(countdown == 0) {

				$('#J_register_send_wait').hide()

					$('#J_register_phone_send').show()
					countdown = 60;
					return;
				} else {

					$('#J_register_phone_send').hide()
					$('#J_register_send_wait').show()

					$('#J_register_send_wait em').html(countdown)
					countdown--;
				}
				setTimeout(function() {
					settime()
				}, 1000)
			}	
			
			//密码判定
			$('#J_register_pasword_phone').blur(function(){
			
				var level = 0;
					var value =$('#J_register_pasword_phone').val();

					if(value.length>=6){
						if(null !== value.match(/\d/)){
							level++;
						}
						if(null !== value.match(/[a-zA-Z]/)){
							level++;
						}
						if(null !== value.match(/[^a-zA-Z0-9]/)){
							level++;
						}
					}
					if(level == 0){	
						level =0
					}
					var levelArr = ['输入6位以上密码','密码强度:弱','密码强度:中','密码强度:强'];
					
					$('#J_register_pasword_phone_tips').html(levelArr[level])
		
			})
			
					
			
				
				//密码一致判定
				
				$('#J_register_regPasword_phone').blur(function(){
				passwordConfirm()
			})
				
				
				function passwordConfirm(){
					var confirmV = $('#J_register_regPasword_phone').val();
					var pwV = $('#J_register_pasword_phone').val();
					if(pwV !== confirmV){
						$('#J_register_regPasword_phone_tips').css('background-position','-155px -182px')
						$('#J_register_regPasword_phone_tips').show().html('两次密码输入不一致')
						result = false
					}else{
						$('#J_register_regPasword_phone_tips').css('background-position','-155px -152px')
						$('#J_register_regPasword_phone_tips').show().html('正确')
						return true;
					}
				}
			

				
				
				
			})

