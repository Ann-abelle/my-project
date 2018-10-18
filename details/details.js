/***********ajax:product_left*************************/
/***************获取大图的ajax****************/
$.ajax({
	type : 'get',
	url : "details.json",
	async : true,
	success : function(json){
		showImg(json);
		/*showimg(json);*/
	}
})
//获取小图片
/*function showimg(json){
	var imgStr = '';
	for( var i = 0;i < json.img.src.length;i ++ ){
		var ipro = json.img.src[i];
		if( i < json.img.src.length ){
			imgStr += `<li><img src=${ipro}></li>`;
		}
	}
	$(".cfix").html( imgStr );
	
}*/
//获取大图片
function showImg(json){	
	var pro = json.Img.src[0];
	var jsonStr = `<img src="${pro}" alt=""/>`;
	$(".big_show").html( jsonStr );
}
/********img_small划过**********/
$(".thurb-sl ul li").mouseenter(function(){
	$(this).css("border","1px solid red");
	var index = $(this).index();
		$.ajax({
		type : 'get',
		url : "details.json",
		async : true,
		success : function(json){
			showImg(json);
		}
	})
	function showImg(json){		
		var pro = json.Img.src[index];
		var jsonStr = `<img src="${pro}" alt=""/>`;
		$(".big_show").html( jsonStr );
	}
})
$(".thurb-sl ul li").mouseleave(function(){
	$(this).css("border","");
})
/***********ajax:product_right*************************/
$.ajax({
	type:"get",
	url:"pro_r_top.json",
	asnyc:true,
	success:function(json){
		rightPrice(json);
		rightLink(json);
		rightVersion(json);
		minYuan(json);
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

