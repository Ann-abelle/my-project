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
/***********ajax:product_left*************************/

/***************获取大图的ajax****************/
$.ajax({
	type : 'GET',
	url : "details.json?t="+ new Date().getTime(),
	async : true,
	success : function(json){		
		/*showimg(json);*/
		showImg(json);
		showRecommend(json);
		
	}
})
//获取小图片
/*function showimg(json){
	var imgStr = '';
	for( var i = 0;i < json.img.src.length + 1;i ++ ){
		var ipro = json.img.src[i];			
		if( i < json.img.src.length ){
			imgStr += `<li class="on thurb_li" data-src="http://img7.hqbcdn.com/product/de/55/de553ee252fa4d57cc1c22793957f4cb.60.jpg"><img width="60" height="60" src="${ipro}" alt=""></li>`;
		}
	}
	$(".thurb-sl ul").html( imgStr );
	
}*/
//获取大图片
function showImg(json){
	var pro = json.Img.src[0];
	var jsonStr = `<img src="${pro}" alt=""/><div class="mark"></div><!--遮罩-->
						<div class="float_layer"></div>`;
	$(".big_show").html( jsonStr );
	
	
	
}
/********img_small划过**********/

$(".thurb_li").mouseenter(function(){	
	/*alert($(this).index());	*/
	var index = $(this).index();
		$.ajax({
		type : 'GET',
		url : "details.json?t="+ new Date().getTime(),
		async : true,
		success : function(json){
			showImg(json);
		}
	})
	function showImg(json){		
		var pro = json.Img.src[index];
		var jsonStr = `<img src="${pro}" alt=""/>`;
		$(".big_show").html( jsonStr );
		var bigStr = `<img src="${pro}" alt="" />`;
		$(".big_show_pic").html( bigStr );
	}
})

/****************放大镜*************************/
//获取小图的盒子

//给遮罩添加移入事件

$(".mark").mouseenter(function(){
	$(".float_layer").css("display","block");
	$(".big_show_pic").css("display","block");
})
$(".mark").mouseleave(function(){
	$(".float_layer").css("display","");
	$(".big_show_pic").css("display","");
	
})
//获取小图的盒子
const oSmall_pic = $(".big_show");
//获取滑块
const oLayer = $(".float_layer");
//获取大图
const oBigImg = $(".big_show_pic img");

//获取大图盒子
const oBig = $(".big_show_pic");
/*console.log(oLayer.outerWidth())*/
$(".mark").mousemove(function(evt){		
	var e = evt || event;
	var left = e.pageX - oSmall_pic.offset().left - (oLayer.outerWidth())/2;	
	var top = e.pageY - oSmall_pic.offset().top - (oLayer.outerHeight())/2;
	if( left <= 0 ){
		left = 0;
	}else if( left >  oSmall_pic.outerWidth() - oLayer.outerWidth()){
		left = oSmall_pic.outerWidth() - oLayer.outerWidth();
	}
	if( top <= 0 ){
		top = 0;
	}else if( top > oSmall_pic.outerHeight() - oLayer.outerHeight() ){
		top = oSmall_pic.outerHeight() - oLayer.outerHeight();
	}
	oLayer.css({
		left:left,
		top:top
	});	
	
	var pX = left / oSmall_pic.outerWidth() - oLayer.outerWidth();
	var pY = top / oSmall_pic.outerHeight() - oLayer.outerHeight();
	
	var ImgX = parseFloat(-pX * (oBigImg.outerWidth() - oBig.outerWidth()))/70;	
	var ImgY = parseFloat(-pY * (oBigImg.outerHeight() - oBig.outerHeight()))/70;
	oBigImg.css({
		left:ImgX,
		top:ImgY																																																																															
	});
	console.log({
		left:ImgX,
		top:ImgY
	});
})

/***********ajax:product_center*************************/
$.ajax({
	type:"get",
	url:"pro_r_top.json?t=" + new Date().getTime(),
	asnyc:true,
	success:function(json){
		rightPrice(json);
		rightLink(json);
		rightVersion(json);
		minYuan(json);
		showLook(json);
	}
})
function rightPrice(json){
	var priStrName = `<h2><span class="g-icon g-gn"></span>${json.name}</h2><p class="v-a1">${json.largeName}</p><p class="v-a2"></p>`;
	$(".v-title").html( priStrName );
	var priStr = `<dd>
	<p class="v-price">¥<b class="sku-price">${json.mallPrice}</b><del>市场价:¥${json.marketPrice}</del></p>
	</dd>
	<div class="tips-box cfix">
		<div class="pri-rd"></div>
		<div class="eva-num">累计评价
			<p><a href="#comment">${json.numPrice}</a>
			</p>
		</div>
	</div>`;
	$(".cfix").html( priStr );	
}
//关联商品
function rightLink(json){
	var linkStr = '';
	for( var i = 0;i <  json.association.length + 1;i ++){
		var linkPro = json.association[i];
		if( i < json.association.length ){
			linkStr +=`<a class="v-item" href="http://www.okhqb.com/item/1000126403.html">${linkPro}</a>                                                                                                                                                	`;			
		}
	}
	$(".link_product").html( linkStr );
}
//版本
function rightVersion(json){
	var verStr = '';
	for( var i = 0;i < json.version.length + 1;i ++ ){
		var verPro = json.version[i];
		if( i < json.version.length ){
			verStr += `<a class="v-item on" href="                                        http://www.okhqb.com/item/1000126405.html&#10;                                        ">${verPro}</a>`;
		}
	}
	$(".version").html( verStr );
}
//最低分期
function minYuan(json){
	var yuanStr = `<span class="stag"></span>分期付款最低约<i class="stag-num">${json.minYuan}</i>元/月`;
	$(".minYuan").html( yuanStr );
}

/****************ajax:product_right************/
//商品推荐
function showRecommend(json){
	recStr = '';
	for( var i = 0;i < json.recommend.length;i ++ ){
		var recPio = json.recommend[i];
		if( i <  json.recommend.length ){
			recStr += `<div class="hot-item">
			<a href="http://www.okhqb.com/item/1000126476.html" target="_blank"><img width="130" height="130" src=${recPio.src} alt=""></a>
                        <a href="http://www.okhqb.com/item/1000126476.html?ad=r1_1000126476" target="_blank" class="hot-t1">${recPio.name}</a>
                        <p>${recPio.price}</p>
                   </div>`;
		}
	}
	$(".hot_pic").html( recStr );
}
/****************************商品详情*********************************/
//轮播图
	var oBox = $(".honor_ul");
	//获取所有的大图
	var ullis = $(".honor_li");
	//获取大图的数量
	var num = ullis.length;	
	//设置坐标
	var indexA = 0;
	//定时器
	var timer = null;   
    autoPlay();
    slide();
	function slide(){
		for( var i = 0;i < num;i ++ ){		
			ullis.eq(i).css("display","none");
		}
		ullis.eq(indexA).css("display","block");
	}
	function autoPlay(){
		timer = setInterval(function(){
			indexA ++;
			if( indexA == num ){
				indexA == 0;
			}
			slide();
		},5000)
		oBox.mouseenter(function(){
			clearInterval(timer);
		})
	}

/********吸顶****************/

var h = $(".dt-nav").offset().top + 150;
/*h = 750*/
/*alert($(".dt-sec").offset().top);*/
var spec = h + 500;
var detail = spec + 200;
var com = detail + 12000;

$(window).scroll(function(){
	var sTop = $(document).scrollTop();
	if( sTop > $(".dt-sec").offset().top ){
		$(".dt-nav").css("position","absolute");
		$(".dt-nav").css("position","fixed");//导航条脱离文档流并且定位在顶部
		$(".dt-nav").css("top",0);
		if( sTop > h && sTop < spec){		
			$(".dt-nav a:eq(0)").addClass("oa");
			$(".dt-nav a:eq(0)").siblings().removeClass("oa");
			$(".dt-nav a:eq(0)").css("color","#E10808");		
		} if( sTop > spec &&  sTop < detail){
			$(".dt-nav a:eq(1)").addClass("oa");
			$(".dt-nav a:eq(1)").siblings().removeClass("oa");
			$(".dt-nav a:eq(1)").css("color","#E10808");			
		} if( sTop > detail &&  sTop < com){
			$(".dt-nav a:eq(2)").addClass("oa");
			$(".dt-nav a:eq(2)").siblings().removeClass("oa");
			$(".dt-nav a:eq(2)").css("color","#E10808");
		}if( sTop > com ){
			$(".dt-nav a:eq(3)").addClass("oa");
			$(".dt-nav a:eq(3)").siblings().removeClass("oa");
			$(".dt-nav a:eq(3)").css("color","#E10808");
		}
	}else{
		$(".dt-nav").css("position","");
	}
		
})

//曾经浏览过的
function showLook(json){
	var lookStr = '';	
	for( var i = 0;i < json.look.length;i ++ ){
		var lookPio = json.look[i];
		if( i < json.look.length ){
		lookStr += `<li>
					   <a href="http://www.okhqb.com/item/1000125617.html?ad=r2_1000125617" target="_blank" class="dt-p"><img src="${lookPio.src}" height="130" width="130"></a>
						<a href="http://www.okhqb.com/item/1000125617.html?ad=r2_1000125617" target="_blank" title="Huawei/华为 P20 AI智慧全面屏手机 全网通 双卡双待 6GB +128GB 宝石蓝" class="dt-a">${lookPio.name}</a>
						<p><b>${lookPio.price}&nbsp;</b><del>${lookPio.del}</del></p>
					</li>`;	 
		}
	}
	$(".dt-right ul").html( lookStr );
}

/******购物保障的url*********/
$(".dt-sec").load('details_guarantee.html');

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
