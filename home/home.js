		

			/************header-------center*****************88*/

/***************************banner*******************************************/
/**************轮波图部分******************/

	function getId(id){
		return document.getElementById(id);
	}
	//获取className的封装函数
	function byClassName(obj,className){
		if(obj.getElementsByClassName){ //支持byClassName，能获取到
			return obj.getElementsByClassName(className);
		}else{
			var arr = [];
			var eles = obj.getElementsByTagName('*'); //获取所有标签
			//遍历所有标签,寻找具有指定className的元素
			for(var i = 0,len = eles.length;i < len;i ++){
				if(eles[i].className == className){
					arr.push(eles[i]); //存入数组
				}
			}
			return arr;
		}
	}
	//获取大盒子
	var oBox = getId("slider");
	//获取所有的大图
	var ullis = oBox.children[0].children;
	//获取大图的数量
	var num = ullis.length;
	//设置坐标
	var indexA = 0;
	//定时器
	var timer = null;
	//获取小圆点
	var ollis = byClassName(oBox,"dot");
	//获取左边按钮
	var lBtn = getId("lBtn");
	//获取右边按钮
	var rBtn = getId("rBtn");
	//调用函数
	autoPlay();
	slide();
	addEven();

	//显示按钮
	oBox.onmouseenter = function(){
		lBtn.style.display = 'block';
		rBtn.style.display = 'block';
	}
	oBox.onmouseleave = function(){
		lBtn.style.display = '';
		rBtn.style.display = '';
	}
	
	function slide(){
		for(var i = 0;i < num;i ++){
			ullis[i].style.display = 'none';
			ollis[i].style.backgroundColor = 'gray';
		}
		ullis[indexA].style.display = 'block';
		ollis[indexA].style.backgroundColor = '#fff';
	}
	function addEven(){
		//左按钮
		lBtn.onclick = function(){
			indexA --;
			if(indexA == -1){
				indexA = num - 1;
			}
			slide();
		}
		//右按钮
		rBtn.onclick = function(){
			indexA ++;
			if(indexA === num){
				indexA = 0;
			}
			slide();
		}
		//圆点
		for(var i = 0;i < num;i ++){
			//记录当前下标 
			ollis[i].index = i;
			ollis[i].onclick = function(){
				indexA = this.index;
				slide();
			}
		}
	}
	function autoPlay(){		
		timer = setInterval(function(){
			indexA ++;
			if(indexA == num){
				indexA = 0;
			}
			slide();
		},2000)
		oBox.onmouseenter = function(){
			clearInterval(timer);
		}
		oBox.onmouseleave = function(){
			autoPlay();
		}
	}
	
	
/*var s = new Slider("slider");
console.info(s);
unction Slider(id){
	//获取id的封装函数
	
	//获取大盒子
	this.bigBox = $("slider");
	//获取所有的大图
	this.ullis = this.bigBox.children[0].children;
	//获取大图的数量
	this.num = this.ullis.length;
	//设置坐标
	this.indexA = 0;
	this.timer = null;	
	//获取小圆点
	this.ollis = $byClassName(document,"dot");
	//获取左边按钮
	this.lBtn = $("lBtn");
	//获取右边按钮
	this.rBtn = $("rBtn");
	
	this.slide();
	this.addEven();
	this.autoPlay();
	
	/*function slide(){
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = 'none';			
			}
			this.ullis[this.indexA].style.display = 'block';
	}*/
/*}	
Slider.prototype = {	
	slide : function(){
		alert();
		for(var i = 0;i < this.num;i ++){
			this.ullis[i].style.display = 'none';
			this.ollis[i].style.display = 'gray';
		}
		this.ullis[this.indexA].style.display = 'block';
		this.ollis[this.indexA].style.display = 'white';
	},
	addEven : function(){
		var that = this;
		//左
		this.lBtn.onclick = function(){
			if(that.indexA == -1){
				that.indexA = that.num - 1;
			}
			that.slide();
		}
		//右
		this.rBtn.onclick = function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		}
		//圆点事件
		for(var i = 0;i < this.num;i ++){
			//记录当前下标 
			this.ollis[i].index = i;
			this.ollis[i].onclick = function(){
				that.indexA = this.index;
				that.slide();
			}
		}
	},
	autoPlay : function(){
		var that = this;
		this.timer = setInterval(function(){
			that.indexA ++;
			if(that.indexA === that.num){
				that.indexA = 0;
			}
			that.slide();
		},2000)
		this.bigBox.onmouseenter = function(){
			clearInterval(that.timer);
		}
		this.bigBox.onmouseleave = function(){
			that.autoPlay();
		}
	}
}*/
/*********************************main******************************************/	
$(".mar").mouseenter(function(){
	$(this).css("color","#f21535");
})
$(".mar").mouseleave(function(){
	$(this).css("color","");
})
/*********************************footer******************************************/	
//关注我们 二维码和微博
$(".weixin").mouseenter(function(){
	$(".weiXinCode").css("display","block");
})
$(".weixin").mouseleave(function(){
	$(".weiXinCode").css("display","");
})
$(".weibo").mouseenter(function(){
	$(".weiBoCode").css("display","block");
})
$(".weibo").mouseleave(function(){
	$(".weiBoCode").css("display","");
})
/*************************************附着元素***************************************/
/****************右边栏导航***********************/
//用户名的表单验证
let $oUser = $(".userArea");
let $form = $(".login_up");
	$oUser.mouseenter(function(){
		$form.css("display","block");
	})
	$form.mouseleave(function(){
		$form.css("display","none");
	})
	
//购物车的显示和影藏
let $cart_form = $(".cart_con_box");
let $cart = $(".miniCart");
	$cart.click(function(){
		$cart_form.css("display","block");
	})
	$(".nav_car_close").click(function(){
		$cart_form.css("display","none");
	}) 

//返回顶部
let $scroll = $(".scrollTop");
let $lnav = $(".ok-nav");
	$(window).scroll(function(){
		let $rh = 50;
		let $lh = 400;
		let $scroll_top = $(document).scrollTop();
		//右边栏的返回顶部出现
		if( $scroll_top > $rh ){
			$scroll.css("display","block");
		}else{
			$scroll.css("display","none");
		}
		//左边栏出现
		if( $scroll_top > $lh ){
			$lnav.css("display","block");
		}else{
			$lnav.css("display","none");
		}
	})
	$scroll.click(function(){		
		$("body,html").animate({ scrollTop:0 },500);
	})
	
//右边栏的背景色变化	
let ofix_li = byClassName(document,"fix_li")
for(var i = 0;i < ofix_li.length;i ++){
	ofix_li[i].onmouseenter = function(){
		this.style.backgroundColor = "red";
	}
	ofix_li[i].onmouseleave = function(){
		this.style.backgroundColor = "";
	}
}
	
/******************登录验证*******************/	
//账号
$tel = $("#userName");

//密码
$pwd = $("#passWord");                  

//登录
$btn = $(".sub_btn");
$btn.click(function(){
	var regTel = /^1\w{1,}$/;
	var regPwd = /^\w{1,}$/;
	 if( regTel.test( $tel.val()) ){  	 	
	 	if( regPwd.test($pwd.val()) ){	 		
	 		var tel = $getCookie('tel');
	 		alert(tel);
			var pwd = $getCookie('pwd');			
			if( tel !== $tel.val() ){
				alert("用户名不正确");		
			}else{
				if( pwd !== $pwd.val() ){
					alert("密码不正确");
				}else{
					alert("登录成功");
					//$(window).location("../home/home.html");
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
/************************左边栏导航*************************/
//华强北商城微信公众号
$(".code-box").mouseenter(function(){
	$(".code").css("display","block");
	$(".code i").css("display","block");
})
$(".code-box").mouseleave(function(){
	$(".code").css("display","none");
})
//返回顶部
$(".ok-bak").click(function(){		
		$("body,html").animate({ scrollTop:0 },500);
	})

//简单楼梯
$list = $(".nav_h");
$div = $(".Box");
var flag = true;
$list.click(function(){
	flag = false;
	$(this).css({
		background:"#e10808",
		color:"#fff"
	})	
	var index = $(this).index();
	var t = $div.eq(index).offset().top;	
	$("body,html").animate({ scrollTop : t },300,function(){
		flag = true;
	});	
});
$list.mouseleave(function(){
	$(this).css({
		background:"",
		color:""
	})
})
$(window).scroll(function(){
	//获取某个楼层的高度
	if( flag ){
		var sTop = $(document).scrollTop();
		$floor = $div.filter(function(){		
			return Math.abs( $(this).offset().top - sTop) < $(this).height()/2;
		})		
		var $index = $floor.index() - 2;
		console.log($index);
		
		if( $index != -3 ){
			$list.eq($index).css({
				background:"#e10808",
				color:"#fff"
			})
			$list.eq($index).siblings().css({
				background:"",
				color:""
			})
		}
		if( sTop < 200 ){
			$list.css("");
		}	
	}	
})







