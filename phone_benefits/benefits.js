//获取大图
var oContain = document.getElementById('.contain');
//获取ul
var lbUl = document.getElementsByClassName('Lun_ul')[0];
var ulLis = lbUl.children;
//获取每个元素的宽度
var liWidths = ulLis[0].offsetWidth;

//ul需要再克隆一个元素
lbUl.appendChild(ulLis[0].cloneNode(true));//有了true表示连同内容一起克隆

//计时器事件，实现播放
function animate(obj,target){//运用此计时器需要传参
	clearInterval(obj.timer);//给每个对象分别绑定计时器，清除上一次的计时器，不绑对象只走一个，防止覆盖
	//计算速度
	var speed = (obj.offsetLeft < target)? 50 : -50;
	obj.timer = setInterval(()=>{
		obj.style.left = obj.offsetLeft + speed +'px';
		if(Math.abs(target - obj.offsetLeft) <= Math.abs(speed)){
			clearInterval(obj.timer);
			obj.style.left = target + 'px';
		}
	},50);
}
//进行自动轮播
var timer = null;
var key = 0;
var circle = 0;
var lb_oLlis = document.getElementsByClassName('dot');
//3.创建计时器，实现自动轮播
timer = setInterval(autoPlay,3500);
function autoPlay(){
	key ++;
	if( key > ulLis.length - 1 ){
		lbUl.style.left = 0;
		key = 1;
	}
	//大图轮播
	animate(lbUl,-key * liWidths);
	//小图轮播
	circle ++;
	if( circle > lb_oLlis.length - 1 ){
		circle = 0;
	}
	for( var i = 0,len =  lb_oLlis.length;i < len;i ++){
		lb_oLlis[i].style.backgroundColor = "gray";
	}
	lb_oLlis[circle].style.backgroundColor = "white";
	
	oContain.onmouseenter = function(){
		clearInterval(timer);
	}
}



