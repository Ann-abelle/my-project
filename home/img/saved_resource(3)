/*! perfect-scrollbar - v0.5.8
* http://noraesae.github.com/perfect-scrollbar/
* Copyright (c) 2014 Hyunje Alex Jun; Licensed MIT */
(function(e){"use strict";"function"==typeof define&&define.amd?define(["jquery"],e):"object"==typeof exports?e(require("jquery")):e(jQuery)})(function(e){"use strict";function t(e){return"string"==typeof e?parseInt(e,10):~~e}var o={wheelSpeed:1,wheelPropagation:!1,swipePropagation:!0,minScrollbarLength:null,maxScrollbarLength:null,useBothWheelAxes:!1,useKeyboard:!0,suppressScrollX:!1,suppressScrollY:!1,scrollXMarginOffset:0,scrollYMarginOffset:0,includePadding:!1},n=0,r=function(){var e=n++;return function(t){var o=".perfect-scrollbar-"+e;return t===void 0?o:t+o}},l="WebkitAppearance"in document.documentElement.style;e.fn.perfectScrollbar=function(n,i){return this.each(function(){function a(e,o){var n=e+o,r=D-R;j=0>n?0:n>r?r:n;var l=t(j*(Y-D)/(D-R));M.scrollTop(l)}function s(e,o){var n=e+o,r=E-k;W=0>n?0:n>r?r:n;var l=t(W*(C-E)/(E-k));M.scrollLeft(l)}function c(e){return P.minScrollbarLength&&(e=Math.max(e,P.minScrollbarLength)),P.maxScrollbarLength&&(e=Math.min(e,P.maxScrollbarLength)),e}function u(){var e={width:I};e.left=B?M.scrollLeft()+E-C:M.scrollLeft(),N?e.bottom=_-M.scrollTop():e.top=Q+M.scrollTop(),H.css(e);var t={top:M.scrollTop(),height:A};Z?t.right=B?C-M.scrollLeft()-V-J.outerWidth():V-M.scrollLeft():t.left=B?M.scrollLeft()+2*E-C-$-J.outerWidth():$+M.scrollLeft(),G.css(t),U.css({left:W,width:k-z}),J.css({top:j,height:R-et})}function d(){M.removeClass("ps-active-x"),M.removeClass("ps-active-y"),E=P.includePadding?M.innerWidth():M.width(),D=P.includePadding?M.innerHeight():M.height(),C=M.prop("scrollWidth"),Y=M.prop("scrollHeight"),!P.suppressScrollX&&C>E+P.scrollXMarginOffset?(X=!0,I=E-F,k=c(t(I*E/C)),W=t(M.scrollLeft()*(I-k)/(C-E))):(X=!1,k=0,W=0,M.scrollLeft(0)),!P.suppressScrollY&&Y>D+P.scrollYMarginOffset?(O=!0,A=D-tt,R=c(t(A*D/Y)),j=t(M.scrollTop()*(A-R)/(Y-D))):(O=!1,R=0,j=0,M.scrollTop(0)),W>=I-k&&(W=I-k),j>=A-R&&(j=A-R),u(),X&&M.addClass("ps-active-x"),O&&M.addClass("ps-active-y")}function p(){var t,o,n=function(e){s(t,e.pageX-o),d(),e.stopPropagation(),e.preventDefault()},r=function(){H.removeClass("in-scrolling"),e(q).unbind(K("mousemove"),n)};U.bind(K("mousedown"),function(l){o=l.pageX,t=U.position().left,H.addClass("in-scrolling"),e(q).bind(K("mousemove"),n),e(q).one(K("mouseup"),r),l.stopPropagation(),l.preventDefault()}),t=o=null}function f(){var t,o,n=function(e){a(t,e.pageY-o),d(),e.stopPropagation(),e.preventDefault()},r=function(){G.removeClass("in-scrolling"),e(q).unbind(K("mousemove"),n)};J.bind(K("mousedown"),function(l){o=l.pageY,t=J.position().top,G.addClass("in-scrolling"),e(q).bind(K("mousemove"),n),e(q).one(K("mouseup"),r),l.stopPropagation(),l.preventDefault()}),t=o=null}function v(e,t){var o=M.scrollTop();if(0===e){if(!O)return!1;if(0===o&&t>0||o>=Y-D&&0>t)return!P.wheelPropagation}var n=M.scrollLeft();if(0===t){if(!X)return!1;if(0===n&&0>e||n>=C-E&&e>0)return!P.wheelPropagation}return!0}function g(e,t){var o=M.scrollTop(),n=M.scrollLeft(),r=Math.abs(e),l=Math.abs(t);if(l>r){if(0>t&&o===Y-D||t>0&&0===o)return!P.swipePropagation}else if(r>l&&(0>e&&n===C-E||e>0&&0===n))return!P.swipePropagation;return!0}function b(){function e(e){var t=e.originalEvent.deltaX,o=-1*e.originalEvent.deltaY;return(t===void 0||o===void 0)&&(t=-1*e.originalEvent.wheelDeltaX/6,o=e.originalEvent.wheelDeltaY/6),e.originalEvent.deltaMode&&1===e.originalEvent.deltaMode&&(t*=10,o*=10),t!==t&&o!==o&&(t=0,o=e.originalEvent.wheelDelta),[t,o]}function t(t){if(l||!(M.find("select:focus").length>0)){var n=e(t),r=n[0],i=n[1];o=!1,P.useBothWheelAxes?O&&!X?(i?M.scrollTop(M.scrollTop()-i*P.wheelSpeed):M.scrollTop(M.scrollTop()+r*P.wheelSpeed),o=!0):X&&!O&&(r?M.scrollLeft(M.scrollLeft()+r*P.wheelSpeed):M.scrollLeft(M.scrollLeft()-i*P.wheelSpeed),o=!0):(M.scrollTop(M.scrollTop()-i*P.wheelSpeed),M.scrollLeft(M.scrollLeft()+r*P.wheelSpeed)),d(),o=o||v(r,i),o&&(t.stopPropagation(),t.preventDefault())}}var o=!1;window.onwheel!==void 0?M.bind(K("wheel"),t):window.onmousewheel!==void 0&&M.bind(K("mousewheel"),t)}function h(){var t=!1;M.bind(K("mouseenter"),function(){t=!0}),M.bind(K("mouseleave"),function(){t=!1});var o=!1;e(q).bind(K("keydown"),function(n){if((!n.isDefaultPrevented||!n.isDefaultPrevented())&&t){for(var r=document.activeElement?document.activeElement:q.activeElement;r.shadowRoot;)r=r.shadowRoot.activeElement;if(!e(r).is(":input,[contenteditable]")){var l=0,i=0;switch(n.which){case 37:l=-30;break;case 38:i=30;break;case 39:l=30;break;case 40:i=-30;break;case 33:i=90;break;case 32:case 34:i=-90;break;case 35:i=n.ctrlKey?-Y:-D;break;case 36:i=n.ctrlKey?M.scrollTop():D;break;default:return}M.scrollTop(M.scrollTop()-i),M.scrollLeft(M.scrollLeft()+l),o=v(l,i),o&&n.preventDefault()}}})}function w(){function e(e){e.stopPropagation()}J.bind(K("click"),e),G.bind(K("click"),function(e){var o=t(R/2),n=e.pageY-G.offset().top-o,r=D-R,l=n/r;0>l?l=0:l>1&&(l=1),M.scrollTop((Y-D)*l)}),U.bind(K("click"),e),H.bind(K("click"),function(e){var o=t(k/2),n=e.pageX-H.offset().left-o,r=E-k,l=n/r;0>l?l=0:l>1&&(l=1),M.scrollLeft((C-E)*l)})}function m(){function t(){var e=window.getSelection?window.getSelection():document.getSlection?document.getSlection():{rangeCount:0};return 0===e.rangeCount?null:e.getRangeAt(0).commonAncestorContainer}function o(){r||(r=setInterval(function(){return x()?(M.scrollTop(M.scrollTop()+l.top),M.scrollLeft(M.scrollLeft()+l.left),d(),void 0):(clearInterval(r),void 0)},50))}function n(){r&&(clearInterval(r),r=null),H.removeClass("in-scrolling"),G.removeClass("in-scrolling")}var r=null,l={top:0,left:0},i=!1;e(q).bind(K("selectionchange"),function(){e.contains(M[0],t())?i=!0:(i=!1,n())}),e(window).bind(K("mouseup"),function(){i&&(i=!1,n())}),e(window).bind(K("mousemove"),function(e){if(i){var t={x:e.pageX,y:e.pageY},r=M.offset(),a={left:r.left,right:r.left+M.outerWidth(),top:r.top,bottom:r.top+M.outerHeight()};t.x<a.left+3?(l.left=-5,H.addClass("in-scrolling")):t.x>a.right-3?(l.left=5,H.addClass("in-scrolling")):l.left=0,t.y<a.top+3?(l.top=5>a.top+3-t.y?-5:-20,G.addClass("in-scrolling")):t.y>a.bottom-3?(l.top=5>t.y-a.bottom+3?5:20,G.addClass("in-scrolling")):l.top=0,0===l.top&&0===l.left?n():o()}})}function T(t,o){function n(e,t){M.scrollTop(M.scrollTop()-t),M.scrollLeft(M.scrollLeft()-e),d()}function r(){h=!0}function l(){h=!1}function i(e){return e.originalEvent.targetTouches?e.originalEvent.targetTouches[0]:e.originalEvent}function a(e){var t=e.originalEvent;return t.targetTouches&&1===t.targetTouches.length?!0:t.pointerType&&"mouse"!==t.pointerType&&t.pointerType!==t.MSPOINTER_TYPE_MOUSE?!0:!1}function s(e){if(a(e)){w=!0;var t=i(e);p.pageX=t.pageX,p.pageY=t.pageY,f=(new Date).getTime(),null!==b&&clearInterval(b),e.stopPropagation()}}function c(e){if(!h&&w&&a(e)){var t=i(e),o={pageX:t.pageX,pageY:t.pageY},r=o.pageX-p.pageX,l=o.pageY-p.pageY;n(r,l),p=o;var s=(new Date).getTime(),c=s-f;c>0&&(v.x=r/c,v.y=l/c,f=s),g(r,l)&&(e.stopPropagation(),e.preventDefault())}}function u(){!h&&w&&(w=!1,clearInterval(b),b=setInterval(function(){return x()?.01>Math.abs(v.x)&&.01>Math.abs(v.y)?(clearInterval(b),void 0):(n(30*v.x,30*v.y),v.x*=.8,v.y*=.8,void 0):(clearInterval(b),void 0)},10))}var p={},f=0,v={},b=null,h=!1,w=!1;t&&(e(window).bind(K("touchstart"),r),e(window).bind(K("touchend"),l),M.bind(K("touchstart"),s),M.bind(K("touchmove"),c),M.bind(K("touchend"),u)),o&&(window.PointerEvent?(e(window).bind(K("pointerdown"),r),e(window).bind(K("pointerup"),l),M.bind(K("pointerdown"),s),M.bind(K("pointermove"),c),M.bind(K("pointerup"),u)):window.MSPointerEvent&&(e(window).bind(K("MSPointerDown"),r),e(window).bind(K("MSPointerUp"),l),M.bind(K("MSPointerDown"),s),M.bind(K("MSPointerMove"),c),M.bind(K("MSPointerUp"),u)))}function y(){M.bind(K("scroll"),function(){d()})}function L(){M.unbind(K()),e(window).unbind(K()),e(q).unbind(K()),M.data("perfect-scrollbar",null),M.data("perfect-scrollbar-update",null),M.data("perfect-scrollbar-destroy",null),U.remove(),J.remove(),H.remove(),G.remove(),M=H=G=U=J=X=O=E=D=C=Y=k=W=_=N=Q=R=j=V=Z=$=B=K=null}function S(){d(),y(),p(),f(),w(),m(),b(),(ot||nt)&&T(ot,nt),P.useKeyboard&&h(),M.data("perfect-scrollbar",M),M.data("perfect-scrollbar-update",d),M.data("perfect-scrollbar-destroy",L)}var P=e.extend(!0,{},o),M=e(this),x=function(){return!!M};if("object"==typeof n?e.extend(!0,P,n):i=n,"update"===i)return M.data("perfect-scrollbar-update")&&M.data("perfect-scrollbar-update")(),M;if("destroy"===i)return M.data("perfect-scrollbar-destroy")&&M.data("perfect-scrollbar-destroy")(),M;if(M.data("perfect-scrollbar"))return M.data("perfect-scrollbar");M.addClass("ps-container");var E,D,C,Y,X,k,W,I,O,R,j,A,B="rtl"===M.css("direction"),K=r(),q=this.ownerDocument||document,H=e("<div class='ps-scrollbar-x-rail'>").appendTo(M),U=e("<div class='ps-scrollbar-x'>").appendTo(H),_=t(H.css("bottom")),N=_===_,Q=N?null:t(H.css("top")),z=t(H.css("borderLeftWidth"))+t(H.css("borderRightWidth")),F=t(H.css("marginLeft"))+t(H.css("marginRight")),G=e("<div class='ps-scrollbar-y-rail'>").appendTo(M),J=e("<div class='ps-scrollbar-y'>").appendTo(G),V=t(G.css("right")),Z=V===V,$=Z?null:t(G.css("left")),et=t(G.css("borderTopWidth"))+t(G.css("borderBottomWidth")),tt=t(G.css("marginTop"))+t(G.css("marginBottom")),ot="ontouchstart"in window||window.DocumentTouch&&document instanceof window.DocumentTouch,nt=null!==window.navigator.msMaxTouchPoints;return S(),M})}});
﻿/***
* @auth: qh
* @method: muiToolBar
* @time: 2014-4-21
* @requirt: jQuery.js
**/

;(function($){
	/*!
	* 划过延时插件
	* @para { Object } 参入的参数对象
	* hoverDuring  鼠标经过的延时时间
	* outDuring    鼠标移出的延时时间
	* hoverEvent   鼠标经过执行的方法
	* outEvent     鼠标移出执行的方法
	*/
	$.fn.hoverDelay = function(options){
		var defaults = {
			hoverDuring: 200,
			outDuring: 200,
			hoverEvent: $.noop,
			outEvent: $.noop
		}, sets;
		
		sets = $.extend(defaults, options || {});
		
		return $(this).each(function(){
			var _this = this;
			
			$(this).hover(function(){
				clearTimeout(_this.outTimer);
				_this.hoverTimer = setTimeout(function(){
					sets.hoverEvent.call(_this);
				}, sets.hoverDuring);
			},function(){
				clearTimeout(_this.hoverTimer);
				_this.outTimer = setTimeout(function(){
					sets.outEvent.call(_this);
				}, sets.outDuring);
			});
		});
	}
})(jQuery)

;$(function(){
	var _loginUrl = 'http://login.okhqb.com/member/getLoginInfo.json',
		_cartUrl = 'http://buy.okhqb.com/cart/getCartsForToolbar.json',
		_auth = (window.Auth && Auth.getAuthInfo()) || null;

	var muiToolBar = {		
		init: function () {
			this.load_style(
				'http://s2.hqbcdn.com/',
				'assets/v4/css/muiToolBar-1.0.0.css'
			)
						
			this.renderDom(); // 渲染浮层工具条
			this.render_loginInPannel(function () {
				muiToolBar.event_sign_handle();
				muiToolBar.event_tempt_newuser();
			});
			
			this.eventTrigger(); // 事件控制
			this.render_cartCount();//初始化购物车
			this.time_clock();
		},
		load_style: function (domain_name, css_path) {
			try{
				var head = document.getElementsByTagName('head').item(0), style;
				
				style = document.createElement( 'link' ); 
				style.setAttribute( 'rel', 'stylesheet' ); 
				style.setAttribute( 'type', 'text/css' ); 
				style.setAttribute( 'href', domain_name + css_path );
				
				head.appendChild( style );
				
			}catch( e ){}
		},
		renderDom: function () {
			var _html = '<div id="mui_bar"><div class="mui_bar_con"><div class="newuser"><a class="newuserRemindIcon" href="http://stopic.okhqb.com/xinren2016.html?utml=xrcelan" target="_blank"></a><a class="temptToRegister" href="http://stopic.okhqb.com/xinren.html?utml=xrcelan" target="_blank">新人专享</a></div><div class="userArea"><div class="login_in_pannel hide"></div><div class="login_up_pannel"><a class="login_up_i"></a></div></div><div class="miniCart"><a class="cart" href="javascript:;"><i class="cart_icon"></i>购物车<em class="cart_num">0</em></a></div><div class="kfPannel"><a id="kfNewPannel" href="javascript:;"></a><div class="nav-contact-kfNew">联系客服</div></div><div class="scrollTop"><a href="javascript:;" title="返回顶部"></a></div></div><div class="cart_con_box"><h2>购物车<i class="nav_car_times" data-times="0"></i><i class="nav_car_close"></i></h2> <div class="cart_con"><div class="cart_tips">您的购物车是空的<br>如您已添加商品，请<a target="_blank" href="http://login.okhqb.com/member/login.html">登录</a>查看</div></div></div></div>';
			$('body').append(_html);
		},
		render_loginInPannel: function (callback) {
			var $parent = $('.userArea'),
				$loginInPannel = $('.login_in_pannel', $parent),
				$loginUpPannel = $('.login_up_pannel', $parent),
				_html = '';

			if (_auth && _auth.logined === 1 && _auth.member_type === 1) { //已登录
				_html = '<span class="login_in_i"><a href="http://my.okhqb.com/my/home.html?ad=dd_id"><img width="30" height="30" src="' + _auth.avatar + '" alt="用户头像" class="user_avatar" /></a></span><div class="login_in hide"><a href="http://www.okhqb.com/member/logout.html" class="login_out">[退出]</a><span class="u_head"><img width="80" height="80" src="' + _auth.avatar + '" alt="用户头像"><a class="u_mask" href="http://my.okhqb.com/my/home.html?ad=dd_id"></a></span><div class="u_info"><p class="u_name"><a href="http://my.okhqb.com/my/home.html?ad=dd_id" target="_blank">Hi, ' + _auth.nickname + '</a></p><p class="u_coin">小强币：<b>' + (_auth.total_points || 0) + '</b>个</p></div></div>';
				
				$loginInPannel.empty().append(_html).show();
				$loginUpPannel.hide();
			} else { // 未登录
				if (!$loginUpPannel.find('.login_up').length) {					
					_html = '<div class="login_up hide"><form action=""><div class="f_item"><label for="userName" class="f_label">用户名：</label><input type="text" id="userName" name="userName" class="f_input" maxlength="50" value=""></div><div class="f_item"><label for="passWord" class="f_label">密码：</label><input type="password" id="passWord" name="passWord" class="f_input" value=""></div><p class="f_tips"></p><a href="javascript:;" class="sub_btn">登录</a><p class="forgetpwd"><a target="_blank" href="http://login.okhqb.com/member/memberForget.html">忘记密码？</a></p></form></div>';
					
					$loginUpPannel.append(_html);
				}
				$loginUpPannel.show();
				$loginInPannel.hide();
			}
			
			if (callback && typeof callback === 'function') {
				callback.apply($parent);
			}
		},
		render_toolbar: function( nick_name ){
			var Toolbar = $('#toolbar_bg') || $('#toolbar'),
			    nick_name = nick_name || '强粉';			
			try{
				Toolbar.find('.notloggedin').hide();
				Toolbar.find('.thelogged').html(
					'您好，<a class="u_name" rel="nofollow" href="' + _href + '">'
					+ nick_name + '</a>&nbsp;&nbsp;欢迎回来&nbsp;&nbsp;<a href="http://www.okhqb.com/member/logout.html" class="logout">&nbsp;退出</a>'
					+ '<a href="http://my.okhqb.com/my/home.html?ad=dd_id" class="signEveryday"><span>签到赚小强币</span></a>'
				).show();
			}catch( e ){}
		},
		event_tempt_newuser: function() {
			var $newuser = $('#mui_bar').find('.newuser'),
				$temptToRegister = $('#mui_bar').find('.temptToRegister');


				/*$newuser.hoverDelay({
					hoverEvent: function (e) {
						$temptToRegister.show();
					},
					outEvent: function (e) {
						$temptToRegister.hide();
					},
					hoverDuring: 300
				});*/
		},
		event_sign_handle: function () {
			var $parent = $('.userArea'),
				$loginInPannel = $('.login_in_pannel', $parent),
				$loginUpPannel = $('.login_up_pannel', $parent),
				$loginInIco = $('.login_in_i', $parent),
				$loginUpIco = $('.login_up_i', $parent),
				$userName = $('#userName', $loginUpPannel),
				$passWord = $('#passWord', $loginUpPannel),
				$tips = $('.f_tips', $loginUpPannel),
				$subBtn = $('.sub_btn', $parent);

			// 已登录
			$loginInPannel.hoverDelay({
				hoverEvent: function (e) {
					$loginInPannel.find('.login_in').show();
				},
				outEvent: function (e) {
					$loginInPannel.find('.login_in').hide();
				},
				hoverDuring: 300
			});
			
			// 未登录
			$loginUpPannel.hoverDelay({
				hoverEvent: function () {
					$loginUpPannel.find('.login_up').show();
				},
				outEvent: function () {
					$loginUpPannel.find('.login_up').hide();
				},
				hoverDuring: 300
			});
			
			// 获焦点清空错误信息
			$userName.add($passWord).on('focus', function() {
				$tips.removeClass('f_tip_error').html('').hide();
			}).keypress(function (e) {
				if (e.which === 13) {
					$subBtn.trigger('click');
				}
			})
			
			// 登录
			$subBtn.on('click', function () {					
				var	userName_val = $.trim($userName.val()),
					passWord_val = $.trim($passWord.val());
				
				if (userName_val.length < 1) {
					$tips.addClass('f_tip_error').html('请输入您的用户名！').show();
					return false;
				} else if (passWord_val.length < 1) {
					$tips.addClass('f_tip_error').html('请输入您的密码！').show();
				} else {
					try {
						$.ajax({
							url: 'http://login.okhqb.com/member/boxLogin.json',
							data: {'userName': userName_val, 'passWord': passWord_val},
							type: 'POST',
							dataType: 'jsonp',
							jsonpCallback: 'signInCallback',
							beforeSend: function(){
								$tips.addClass('f_tip_error').html('正在为您努力登录...').show();
							},
							success: function( result ){							
								if( result.code == 200 ){
									_auth = $.parseJSON( result.data );

									muiToolBar.render_loginInPannel();
									muiToolBar.render_toolbar( _auth.nickname );
									
									$tips.removeClass('f_tip_error').html('').hide();
									
									window.location.href = window.location.href
								}else{
									$tips.addClass('f_tip_error').html(result.msg);
								}
							}
						})
					} catch (e) {
						$tips.addClass('f_tip_error').html('登录失败：系统异常').show();
					} 
				}
				return false;
			});
		},
		render_cartCount: function(){ //购物车初始化 
			$.ajax({
				  type:'GET',
				  url:'http://buy.okhqb.com/cart/getCartsForToolbar.json',
				  dataType: 'jsonp',
				  jsonp:'callback',
				  success: function (result) {		
					  if (result.code == 200) {
							  $('.cart_num').html(result.data.count);							  
							  if(result.data.items){								  
								   var data= result.data,
								   	   items = data.items,
									   t= 3600-(parseInt(data.currentTime*0.001)-parseInt(data.countDownTime*0.001)),
									   str='';
								   if(t>0){
								       str='<h2>购物车<i class="nav_car_times" data-times="'+t+'">库存有限，保留0分0秒</i><i class="nav_car_close"></i></h2><div class="cart_con"><div class="cart_list_box" id="cart_list_box"><ul class="cart_list">';
								   }else{
									   str='<h2>购物车<i class="nav_car_times" data-times="'+t+'">已超时，请尽快结算</i><i class="nav_car_close"></i></h2><div class="cart_con"><div class="cart_list_box" id="cart_list_box"><ul class="cart_list">';
								   }

								   for(var i=0;i<items.length;i++){
									   str+='<li class="'+items[i].skuId+'"><a title="'+items[i].goodsTitle+'" target="_blank" href="http://www.okhqb.com/item/'+items[i].skuId+'.html" class="goods_pic"><img height="60" alt="'+items[i].goodsTitle+'" src="'+items[i].imageMD5+'" widht="60"></a>';
                    				   str+='<div class="goods_info">';
                        			   str+='<a target="_blank" title="'+items[i].goodsTitle+'" href="http://www.okhqb.com/item/'+items[i].skuId+'.html" class="goods_tit">'+items[i].goodsTitle+'</a>';
                        			   str+='<div class="goods_num"><i class="price">&yen;'+(items[i].promotePrice || items[i].price)+'</i>×<i class="num">'+items[i].quantity+'</i></div></div></li>'; 
								   }
								   str+='</ul></div>';
								   str+='<div class="car_list_total"><span>';
                  				   str+='<b class="car_total_price">&yen;<i class="car_total_price_i">'+data.totalFee+'</i></b><br/>'
                 				   str+='<b class="car_total_num">共<i class="car_con_num">'+data.count+'</i>件商品</b></span>';
              					   str+='<a href="http://buy.okhqb.com/buy/cart.html" target="_blank">去购物车结算</a></div>';

								   $('.cart_con_box').html(str);
								   if(items.length>=6){									      										        
								        $('.cart_list_box').height(600);										
										$('.car_list_total').css({'position':'fixed','bottom':0,'width':250});									   		    
								   		$('#cart_list_box').perfectScrollbar({suppressScrollX:true});
								   }
								   window.NAV_RIGHT_TIMER && window.NAV_RIGHT_TIMER.init();
							}else{								  
								  if (_auth && _auth.logined === 1 && _auth.member_type === 1) { //已登录								        
								  		$('.cart_con_box').html('<img width="203" height="184" src="http://s2.hqbcdn.com/assets/v4/images/process/nav_null.jpg" />');
								  }else{									    
								  		$('.cart_con').html('<div class="cart_tips">您的购物车是空的<br>如您已添加商品，请<a target="_blank" href="http://login.okhqb.com/member/login.html">登录</a>查看</div>');
								  }
								 
							}		 
					  }								
				  }
			});				
		},
		time_clock: function(){ // 倒计时	 		   		
			var NAV_RIGHT_TIMER={};					
			NAV_RIGHT_TIMER.init=function(){
				 NAV_RIGHT_TIMER.clockObj = $('.nav_car_times');
				 NAV_RIGHT_TIMER.times = $('.nav_car_times') ? $('.nav_car_times').attr('data-times') : 0; 						 				  		     
				 if(NAV_RIGHT_TIMER.times>0){
					    clearInterval(NAV_RIGHT_TIMER.clock);					        			    				   
			     		NAV_RIGHT_TIMER.clock=setInterval(function(){
								if(NAV_RIGHT_TIMER.times<=0){
									clearInterval(NAV_RIGHT_TIMER.clock);									
									NAV_RIGHT_TIMER.clockObj.html('已超时，立即结算还有库存商品');
									return false;
								}
								NAV_RIGHT_TIMER.times--;
								var m = parseInt(NAV_RIGHT_TIMER.times/60),
									s = parseInt(NAV_RIGHT_TIMER.times%60);
								m = (m >=10) ? m : '0'+m;
								s = (s >=10) ? s : '0'+s;
								NAV_RIGHT_TIMER.clockObj.html('库存有限，保留'+m+'分'+s+'秒');						
						},1000);
				 }
			};
			window.NAV_RIGHT_TIMER = NAV_RIGHT_TIMER;
			NAV_RIGHT_TIMER.init();
			
		},
		event_cart_handle: function () { // 购物车
			var $miniCart = $('#mui_bar .miniCart'),				
				$cartCon = $('.cart_con_box'),
				$cartTips = $('.cart_tips', $cartCon),
				$cartList = $('.cart_list', $cartCon),
				$gotocart = $('.mini_total', $cartCon),
				$cartInfo = $('.cart_info', $cartCon),			
				that = this;

				

			// 购物车为空，一种为未登录为空提示，还一种登录为空提示
			var emptyCart = function () {
				var _htmlDom;
				
				if ( _auth && _auth.logined === 1 && _auth.member_type === 1 ) {
					_htmlDom = '亲爱的<a href="http://my.okhqb.com/my/order.html" target="_blank">' + ( _auth.nickname || _auth.mobile ) + '</a><br/>购物车空空如也，快行动吧！';
				} else {
					_htmlDom = '您的购物车是空的<br/>如您已添加商品，请<a href="http://login.okhqb.com/member/login.html" target="_blank">登录</a>查看';
				}
				
				$cartTips.removeClass('loading_tips').html( _htmlDom ).show();

				$cartList.hide();
				$cartInfo.html('');
				$gotocart.hide();
			};
			$cartList.hide();
			$gotocart.hide();		

			$miniCart.on('click',function(){ //点击购物车		
				$cartCon.show();
				that.render_cartCount(); // 购物车初始数量	
			});
		
		},		
		event_scrollTop_handle: function () {
			var $scrollTop = $('#mui_bar .scrollTop'),
                winHeight = $(window).height();

            if(winHeight<728){
                $('.scrollTop').css('bottom','30px');
            }
			scrollTop($scrollTop);
		},
		event_kf_handle: function () { //客服
            try{
                $('#kfNewPannel,.kfPannel, .service').click(function(){
                    /**window.open('http://im.okhqb.com/client','OKHQBIM','width=340,height='+window.screen.height+'，menubar=no,location=no,status=no,toolbar=no,left=0,top=0');*/
                    window.open('https://www.sobot.com/chat/pc/index.html?sysNum=f21c5dd2ebe04583a93a6b2b297e69da');
                });
            }catch(e) {
                $('#kfNewPannel,.kfPannel').click(function () {
                    art.dialog({
                        id:'__IM',
                        title:'系统提示',
                        content:'客服系统不存在，请联系客服电话<b style="color:red">400-999-1258</b>！'
                    });
                    return false;
                });
            }

		},
		evevt_carlist_handle:function(){//购物车盒子
			var $cart = $('.cart_con_box'),
				$carTime = $('.nav_car_time');		

			$(document).click(function(e){			
				if(!$(e.target).hasClass('cart')){
					$cart.hide();
				}				
			});				
						
			$('.nav_car_close').live('click',function(){				
				$cart.hide();
			});
		},
		eventTrigger: function () {
			this.event_cart_handle(); // 购物车
			this.event_kf_handle(); // 客服
			this.evevt_carlist_handle(); // 购物车盒子
			this.event_scrollTop_handle(); // 返回顶部
		}
		
	};
	
	muiToolBar.init();
	
	// 返回顶部
	function scrollTop($ele) {
		$(window).scroll(function () {
			var _h = $(this).scrollTop();
				
			if (_h >= 200) {
				$ele.show()
			} else {
				$ele.hide()
			}
		});
		
		$ele.on('click', function () {
			$('html, body').animate({
				scrollTop: 0
			}, 300);
			return false;
		})
	}
});

