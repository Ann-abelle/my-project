//工具------------封装函数				
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
/****************************header***********************************************/
 				//header-----------获取头部右边的超链接
//我的账户
$(".list_li1").mouseenter(function(){
	$(".list1").css("display","block");
})
$(".list1").mouseleave(function(){
	$(".list1").css("display","");
})

//我的消息
$(".list_li2").mouseenter(function(){
	$(".list2").css("display","block");
})
$(".list2").mouseleave(function(){
	$(".list2").css("display","");
})

//客户服务
$(".list_li3").mouseenter(function(){
	$(".list3").css("display","block");
})
$(".list3").mouseleave(function(){
	$(".list3").css("display","");
})

//关注我们
$(".list_li4").mouseenter(function(){
	$(".list4").css("display","block");
})
$(".list4").mouseleave(function(){
	$(".list4").css("display","");
})
//表单验证
$("#search").focus(function(){
	$(this).val("");
})
$("#search").blur(function(){
	$(this).val("请输入搜索关键词");
})

//我的购物车
$(".shopping").mouseenter(function(){
	$(".sh_txt").css("color","#1c84f5");
	$(".shopping").css("border","1px solid #1c84f5");
})
$(".shopping").mouseleave(function(){
	$(".sh_txt").css("color","");
	$(".shopping").css("border","");
})
//-----------------------jsonP
//获取元素
let oUl = document.getElementById("search_ul");
let oTxt = document.getElementById("search");
let $oB = $(".link_ul span b");
let $oBig_ul = $(".link_ul");

	//选项卡的影藏与显示
	$oBig_ul.css("display","none");
	$oBig_ul.mouseleave(function(){
		$(this).css("display","none");
	})
	//关闭事件
	$oB.click(function(){
		$oBig_ul.css("display","none");
	})
	//按下键盘后的搜索选项
	oTxt.onkeyup = function(){
	$oBig_ul.css("display","block");
	oUl.innerHTML = '';
		//创建script
	let sc = document.createElement('script');	
	//(百度)https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=aaaa&json=1&p=3&sid=26524_1420_21078_26350_20927&req=2&csor=4&pwd=aaa&cb=jQuery110206244714069318966_1539654829603&_=1539654829607
	sc.src = "https://sp0.baidu.com/5a1Fazu8AA54nxGko9WTAnF6hhy/su?wd=" + this.value + "&cb=fn";
	//加入head标签
	document.querySelector('head').appendChild(sc);
	}			
	//必须是全局函数
		function fn(data){
			//console.log(data.s);
			for(let i = 0;i < data.s.length;i ++){
				let li = document.createElement('li');
				li.innerHTML = data.s[i];
				$("#search_ul li").css({
					width:"320px",
					padding:"5px 5px",
					cursor:"pointer"
				});
				$("#search_ul li").mouseenter(function(){
					$(this).css("background","#eaeaea");
					$("#search").val(this.innerHTML);
				})
				$("#search_ul li").mouseleave(function(){
					$(this).css("background","");
				})
				oUl.appendChild(li);
			}
			
		}
//导航菜单
$(".li_a").mouseenter(function(){
	$(this).css("background","#0f3b82");
})
$(".li_a").mouseleave(function(){
	$(this).css("background","");
})

//一级菜单
$(".product_class").mouseenter(function(){
	$(".ul_1").css("display","block");
})
$(".ul_1").mouseleave(function(){
	$(this).css("display","");
})

//一级菜单导航
$(".ul_1 li a").mouseenter(function(){
	$(this).css({
		background: "#fff",//背景 白色
		color : "#0688f6"		
		});
	$(".sp_left").css("color","#0688f6");//sapn蓝色	
})
$(".ul_1 li a").mouseleave(function(){
	$(this).css({
		background: "",
		color : ""		
	});	
})
//------------菜单选项
$(".nav_list").mouseenter(function(){
	$(this).css("display","block");
	$(".ul_1").css("display","block");
})
$(".nav_list").mouseleave(function(){
	$(this).css("display","");
})
$(".ul_1").mouseenter(function(){
	$(".nav_list").css("display","block");
})
$(".ul_1").mouseleave(function(){
	$(".nav_list").css("display","");
})
//手机通讯
$(".ul_1_li1").mouseenter(function(){
	$(".communication").css("display","block");
	$(".nav_list li:not(:nth-of-type(1))").css("display","");
})
$(".communication").mouseenter(function(){
	$(".ul_1_li1").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".communication").mouseleave(function(){
	$(".ul_1_li1").css({
		background: "",//背景 白色
		color : ""	
	})
})
//苹果专区
$(".ul_1_li2").mouseenter(function(){
	$(".iphone").css("display","block");
	$(".nav_list li:not(:nth-of-type(2))").css("display","");
})
$(".iphone").mouseenter(function(){
	$(".ul_1_li2").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".iphone").mouseleave(function(){
	$(".ul_1_li2").css({
		background: "",//背景 白色
		color : ""	
	})
})

//手机配件
$(".ul_1_li3").mouseenter(function(){
	$(".parts").css("display","block");
	$(".nav_list li:not(:nth-of-type(3))").css("display","");
})
$(".parts").mouseenter(function(){
	$(".ul_1_li3").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".parts").mouseleave(function(){
	$(".ul_1_li3").css({
		background: "",//背景 白色
		color : ""	
	})
})
//试听/数码配件
$(".ul_1_li4").mouseenter(function(){
	$(".digit").css("display","block");
	$(".nav_list li:not(:nth-of-type(4))").css("display","");
})
$(".digit").mouseenter(function(){
	$(".ul_1_li4").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".digit").mouseleave(function(){
	$(".ul_1_li4").css({
		background: "",//背景 白色
		color : ""	
	})
})
//电脑办公
$(".ul_1_li5").mouseenter(function(){
	$(".business").css("display","block");
	$(".nav_list li:not(:nth-of-type(5))").css("display","");
})
$(".business").mouseenter(function(){
	$(".ul_1_li5").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".business").mouseleave(function(){
	$(".ul_1_li5").css({
		background: "",//背景 白色
		color : ""	
	})
})
//智能生活
$(".ul_1_li6").mouseenter(function(){
	$(".life").css("display","block");
	$(".nav_list li:not(:nth-of-type(6))").css("display","");
})
$(".life").mouseenter(function(){
	$(".ul_1_li6").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".life").mouseleave(function(){
	$(".ul_1_li6").css({
		background: "",//背景 白色
		color : ""	
	})
})
//摄影/摄像
$(".ul_1_li7").mouseenter(function(){
	$(".camera").css("display","block");
	$(".nav_list li:not(:nth-of-type(7))").css("display","");
})
$(".camera").mouseenter(function(){
	$(".ul_1_li7").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".camera").mouseleave(function(){
	$(".ul_1_li7").css({
		background: "",//背景 白色
		color : ""	
	})
})
//游戏/周边
$(".ul_1_li8").mouseenter(function(){
	$(".game").css("display","block");
	$(".nav_list li:not(:nth-of-type(8))").css("display","");
})
$(".game").mouseenter(function(){
	$(".ul_1_li8").css({
		background: "#fff",//背景 白色
		color : "#0688f6"	
	})
})
$(".game").mouseleave(function(){
	$(".ul_1_li8").css({
		background: "",//背景 白色
		color : ""	
	})
})
