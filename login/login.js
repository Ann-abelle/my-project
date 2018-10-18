//账号
$tel = $("#tel");
$tel.focus(function(){
	$(this).val("");
})

//密码
$pwd = $("#pwd");                  
$pwd.focus(function(){
	$(this).val("");
})
//登录
$btn = $("#btn");
$btn.click(function(){
	var regTel = /^1\w{1,}$/;
	var regPwd = /^\w{1,}$/;
	 if( regTel.test( $tel.val()) ){    
	 	if( regPwd.test($pwd.val()) ){	 		
	 		var tel = $getCookie('tel');
			var pwd = $getCookie('pwd');			
			if( tel !== $tel.val() ){
				alert("用户名不正确");		
			}else{
				if( pwd !== $pwd.val() ){
					alert("密码不正确");
				}else{
					alert("登录成功");
					location.href = "../home/home.html";
				}
			}
	 		
	 	}else{
	 		$(".ver").html("密码不能为空");
	 	}		
	}
	 else{
		$tel.val("");
		$(".ver").html("请输入您的昵称/邮箱/手机号");	
	}
	
	
})















