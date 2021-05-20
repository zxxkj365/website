//动态改变页面宽度
document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
window.addEventListener("resize",fn,false);
function fn(){
    document.documentElement.style.fontSize=document.documentElement.clientWidth/7.5+"px";
}

$(function() {
	if($('#header').html()==""){
		var str1 = 
			'<a href="index.html"><img id="logo" src="indexImg/yingCallLogoB.png"></a>'
		    +'<ul class="navUl">'
		        +'<li>'
		            +'<a href="index.html" class="index">&nbsp;首页&nbsp;</a>'
		        +'</li>'
		        +'<li>'
		            +'<a href="product.html" class="product">产品介绍</a>'
		        +'</li>'
		        +'<li>'
		            +'<a href="information.html" class="information">&nbsp;资讯&nbsp;</a>'
		        +'</li>'
		        +'<li>'
		            +'<a href="about.html" class="about">关于我们</a>'
		        +'</li>'
		        +'<div style="clear: both;"></div>'
		    +'</ul>'
		$('#header').html(str1);
		if($('.bai').html()=="information"){
			$('.information').addClass('activeA')
		}else if($('.bai').html()=="index"){
			$('.index').addClass('activeA')
		}else if($('.bai').html()=="product"){
			$('.product').addClass('activeA')
		}else if($('.bai').html()=="about"){
			$('.about').addClass('activeA')
		}else if($('.bai').html()=="join"){
			$('.join').addClass('activeA')
		}
		
	}
	if($('#footer').html()==""){
		var str = 
		 '<div class="div2">'
			+'<p style="font-size: 0.24rem;padding: 0.64rem 0 0.23rem;">咨询微信</p>'
			+'<img src="indexImg/ourEWM.png" style="width: 2rem;">'
		+'</div>'
		+'<div class="div1">'
			+'<p>总部AI总监</p>'
			+'<p>'
				+'<span><i class="iconfont icon-dianhua"></i>张先生：</span>18600428988'
			+'</p>'	
			+'<p>'
				+'<span><i class="iconfont icon-dizhi"></i>地&nbsp;&nbsp;址：</span>北京市朝阳区国门大厦A座4层4N'
			+'</p>'
			+'<p>'
				+'<span><i class="iconfont icon-youxiang"></i>邮&nbsp;&nbsp;箱：</span>liuzl@supermp.com'
			+'</p>'	
			+'<p>'
				+'<span><i class="iconfont icon-weixin"></i>微&nbsp;&nbsp;信：</span>13121605757'
			+'</p>'
		+'</div>'
		+'<div style="clear: both;"></div>'
		+'<p style="font-size:0.43rem;text-align:center;line-height:1rem;"><i class="iconfont icon-dianhua" style="font-size:0.43rem;margin:0 0.17rem;"></i>400-0066-818</p>'
		+'<div style="text-align: center;font-size:0.10rem;"><strong>&copy;北京知行信科技有限公司</strong><br /><strong>语音识别技术由科大讯飞提供</strong><br /><strong>京ICP编号：B2-20171816</strong><br /><a href="http://www.beian.miit.gov.cn" target="_blank" class="icp" style="color: #cfcfd4;">京ICP备17042959号</a></div>'
		$('#footer').html(str);
	}
	if($('#mask').html()==""){
		var mask = 
		'<div class="onAgent">'
				+'<div class="onAgentHeader">'
					+'项目合作'
					+'<img src="indexImg/icon_x.png" class="closeAgent" onclick="maskHide()"/>'
				+'</div>'
				+'<div class="agent">'
					+'<div style="margin-top: 0.44rem;">'
						+'<span>联系人：</span>'
						+'<input class="textAgent" type="text" value="" placeholder="请输入联系人名称" maxlength="20"/>'
						+'<div style="clear: both;"></div>'
						+'<p class="person_i">请填一下您的名字</p>'
					+'</div>'
					+'<div>'	
						+'<span>联系电话：</span>'
						+'<input class="textAgent" type="text" value="" placeholder="请输入您的联系号码" maxlength="11"/>'
						+'<div style="clear: both;"></div>'
						+'<p class="phone_i">请填一下您的手机号</p>'
					+'</div>'
				+'</div>'
				+'<div class="agentBtnDiv">'
					+'<input class="noAgent" type="button" value="取消" onclick="maskHide()"/>'
					+'<input class="yesAgent" type="button" value="确认合作" onclick=\'btnJoinAgent($(".textAgent"))\'/><div style="clear: both;"></div>'
				+'</div>'
			+'</div>'
		$('#mask').html(mask);
	}
	if($('#bottomBtn').html()==""){
		var bottomBtn = 
		'<div class="joinBtnBox" onclick="maskShow()"><img src="joinImg/icon_join.png" class="icon_join"/>项目合作</div>'
		+'<a href="tel:13121605757"><img src="indexImg/tiyan.png" class="tiyan"/></a>'
		$('#bottomBtn').html(bottomBtn);
	}
//	(function(m, ei, q, i, a, j, s) {
//      m[i] = m[i] || function() {
//          (m[i].a = m[i].a || []).push(arguments)
//      };
//      j = ei.createElement(q),
//          s = ei.getElementsByTagName(q)[0];
//      j.async = true;
//      j.charset = 'UTF-8';
//      j.src = 'https://static.meiqia.com/dist/meiqia.js?_=t';
//      s.parentNode.insertBefore(j, s);
//  })(window, document, 'script', '_MEIQIA');
//  _MEIQIA('entId', 105774);

//--------------
//
//  	if($('.bai').html()=="index"){
//  		// 初始化成功后调用美洽 showPanel
//		    _MEIQIA('allSet', function(){
//		      _MEIQIA('showPanel');
//		    });
//  	}
//百度统计，梅林
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?205ee5c037816350432e16f8bc9c170d";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();
//=====

});

function btnJoinAgent(a){
	var name =  a.eq(0).val();
    var phone = a.eq(1).val();
    var yesAgent = {
   	 	name: name,
    	phone: phone,
    	company: '招商加盟略',
    	address: '招商加盟略'
    };
	    console.log(yesAgent)
	    if(name == ""){
	        $('.person_i').css("opacity","1");
	    } else{
	    	$('.person_i').css("opacity","0");
	    }
	    if(oPhonetest(phone)){
	        $('.phone_i').css("opacity","0");
	    } else{
	    	$('.phone_i').css("opacity","1");
	    }
    
	    if (name != "" && oPhonetest(phone) && phone != "") {
	        $.ajax({
	            type: "POST",
	            url: '/tmk-home/agent/insert',
	            data: yesAgent
	        }).done(function (data) {
	        	var data = JSON.parse(data);
	        	if(data.code==404){
	        		 alert("参数错误，少传参数了")
	        	}else if(data.code==403){
	        		 alert("这个号码已经申请过了")
	        	}else if(data.code==402){
	        		 alert("手机号码格式不正确")
	        	}else if(data.code==0){
	        		maskHide();
	        		alert("成功")
	        	}else if(data.code==1){
	        		 alert("失败，稍后再试")
	        	}
	           
	        }).fail(function (data) {
	            alert("提交失败，稍后再试")
	        });
	    }
	
	}
function maskShow(){
	$('#MEIQIA-BTN-HOLDER').css("z-index","999")
	$('#mask').show();
}
function maskHide(){
	$('#mask').hide();
}

//手机号正则
function oPhonetest(phone) {
    var re = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    if (re.test(phone)) {
        $('.phone_i').css("opacity","0");
        return true;
    } else { 
        $('.phone_i').css("opacity","1");
        return false;
    }
}
//微信js
//var _hmt = _hmt || [];
//(function() {
//	var hm = document.createElement("script");
//	hm.src = "http://res.wx.qq.com/open/js/jweixin-1.2.0.js";
//	var s = document.getElementsByTagName("script")[0]; 
//	s.parentNode.insertBefore(hm, s);
//})();

function configAPI(shareTitle,shareSay,shareImg){
	$.ajax({
   		async:true,
   		url:'http://91tmk.com/tmk-home/wx/jssdk',
   		type: "GET",
        contentType : "application/x-www-form-urlencoded; charset=utf-8",
   		data:{
   			'url':window.location.href
   		}, 
   		success: function (data) {
   			console.log(data)
   			wx.config({
                debug: false, // 开启调试模式,调用的所有api的返回值会在客户端alert出来
                appId: data.appId, // 必填，公众号的唯一标识
                timestamp: data.timestamp, // 必填，生成签名的时间戳
                nonceStr: data.nonceStr, // 必填，生成签名的随机串
                signature: data.signature,// 必填，签名，见附录1
                jsApiList: ["onMenuShareAppMessage","onMenuShareTimeline"]
            });  
             wx.ready(function(res) {
                wx.onMenuShareAppMessage({
					title: shareTitle, // 分享标题
					desc: shareSay, // 分享描述
					link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
					imgUrl: shareImg, // 分享图标
					success: function () {
						
					}
				});
				wx.onMenuShareTimeline({
				    title: shareTitle, // 分享标题
				    link: window.location.href, // 分享链接，该链接域名或路径必须与当前页面对应的公众号JS安全域名一致
				    imgUrl: shareImg, // 分享图标
				    success: function () {
				    // 用户点击了分享后执行的回调函数
					},
					
	            })
			})	
            wx.error(function (res) {
                console.log(res);
            }); 
   		}
   	})	
}

   			
   			         			
                 			
   		
    