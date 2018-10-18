//获取元素
//手机号码
$tel = $("#tel");
$tel.focus(function(){
	$(".s1").html("请输入正确的手机号并验证");
})								
$tel.blur(function(){
	var reg = /^1\d{10}$/;
	if( !$(this).val() ){
		$(".s1").html("");
	}else if( !reg.test($(this).val()) ){
		$(".s1").html("手机号格式错误，请重新输入");
		$(this).css("border","1px solid red");
	}else{
		$(".s1").html("输入正确");
		$(".s1").css("color","green");
		$(this).css("border","1px solid #c9c8c8");
	}
})

//验证码
$(".ver_img").html( parseInt(Math.random() * (9999 - 1000 + 1) + 1000) );
$ver = $("#verification"); 
$(".change").click(function(){
	$(".ver_img").html( parseInt(Math.random() * (9999 - 1000 + 1) + 1000 ) );
	//alert(typeof $(".ver_img").html());
})
$ver.blur(function(){
	if( !$(this).val() ){
		$(".s2").html("");
	}
	else if( $(this).val() == $(".ver_img").val() ){
		$(".s2").html("验证码正确");
		$(".s2").css("color","green");
	} 
	else {
		$(".s2").html("验证码不正确");
		
	}
})

//手机验证码
$tel_ver = $("#tel_ver");
$tel_ver.focus(function(){
	$(".s3").html("请输入接收到的手机验证");
})
$tel_ver.blur(function(){
	var regVer = /^\w{4,}$/;
	if( !$(this).val() ){
		$(".s3").html("");
	}else if( !regVer.test($(this).val()) ){
		$(".s3").html("验证码错误，请重新输入");
		$(this).css("border","1px solid red");
	}
	else{
		$(".s3").html("验证码正确");
		$(".s3").css("color","green");
	}
})

//登录密码
$pwd = $("#pwd");
$pwd.focus(function(){
	$(".s4").html("6-16位字符，推荐使用数字、字母和符号的组合代码");
})	
$pwd.blur(function(){
	var regPwd = /^\w{6,16}$/;
	if( !$(this).val() ){
		$(".s4").html("");
	}else if( !regPwd.test($(this).val()) ){
		$(".s4").html("密码长度应为6-16个字符");
		$(this).css("border","1px solid red");
	}else{
		$(".s4").html("已输入");
		$(this).css("border","1px solid #c9c8c8");
		$(".s4").css("color","green");
	}
})

//确认密码
$qpwd = $("#qpwd");
$qpwd.focus(function(){
	$(".s5").html("");
})
$qpwd.blur(function(){
	if( !$(this).val() ){
		$(".s5").html("");
	}
	else if( $(this).val() !== $("#pwd").val() ){
		$(".s5").html("两次输入密码不一致，请重新输入");
		$(this).css("border","1px solid red");
	}else{
		$(".s5").html("输入正确");
		$(".s5").css("color","green");
	}
})

//立即注册   1.提交注册信息保存在cookie  2.跳转页面
$submit = $("#submit");
$submit.click(function(){	
	createCookie('tel',$("#tel").val(),3);
	createCookie('pwd',$("#qpwd").val(),3);
	alert("注册成功");
	
	
})
















