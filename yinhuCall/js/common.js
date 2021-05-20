window.addEventListener("resize",fn,false);
function fn(){
   var r = document.body.offsetWidth / 1920; 
	$(document.body).css("zoom",r); 
	if($(document.body).css("zoom")==r){
		$(document.body).css("overflow-x","hidden")
	}
}
$(function() {
	//	自适应
	var r = document.body.offsetWidth / 1920; 
	$(document.body).css("zoom",r); 
	if($(document.body).css("zoom")==r){
		$(document.body).css("overflow-x","hidden")
	}
	
	
	$(document).click(function(){
		$('#productIntro .products').hide();
	})
	
	//头部header
	if($('#header').html()==""){
		if(sessionStorage.getItem('product')){
			var product = sessionStorage.getItem('product');
		}
		var str1 =
			'<a href="index.html" onclick="javascript: sessionStorage.removeItem(\'product\');"><img id="logo" src="img/indexImg/yingCallLogoW.png"></a>'
		    +'<ul class="navUl">'
		        +'<li>'
		            +'<a href="index.html" class="index">首页</a>'
		        +'</li>'
		        +'<li id="productIntro">'
		            +'<a href="##" class="n-c product '+(product?'activeA':'')+'" style="width: 140px;">'+(product?product:'产品介绍')+'</a>'
		            +'<span class="pull-down"></span>'
		            +'<ul class="products">'
			            +'<li class="'+(product=='云客服'?'on':'')+'"><a class="n-c" href="cloudService.html">云客服</a></li>'
		            	+'<li class="'+(product=='在线客服'?'on':'')+'"><a class="n-c" href="onlineService.html">在线客服</a></li>'
		            	+'<li class="'+(product=='AI机器人'?'on':'')+'"><a class="n-c" href="product.html">AI机器人</a></li>'
		            	+'<li class="'+(product=='智能制造'?'on':'')+'"><a class="n-c" href="mes.html">智能制造</a></li>'
		            +'</ul>'
		        +'</li>'
//		        +'<li>'
//		            +'<a href="about.html#join" class="join" onclick=\'$(".aboutMain2").hide();$(".aboutMain2join").show();$(".aboutNav2").removeClass("activeAboutBtn");$(".aboutNav2").eq(1).addClass("activeAboutBtn");\'>招商加盟</a>'
//		        +'</li>'
		        +'<li>'
		           +'<a href="javascript:void(0)" class="n-c maskShow" onclick="maskShow();">申请试用</a>'
		        +'</li>' 
		        +'<li>'
		            +'<a href="index.html#case" class="navCase">案例</a>'
		        +'</li>'
		        +'<li>'
		            +'<a href="information.html" class="information">资讯</a>'
		        +'</li>'
		        +'<li>'
		            +'<a href="about.html" class="about">关于我们</a>'
		        +'</li>'
		        +'<div style="clear: both;"></div>'
		    +'</ul>'
		$('#header').html(str1);
		
		activeA()
		//头部点击事件
	   	$('.navUl a').click(function(){
			$('.navUl a').removeClass('activeA');
			$(this).addClass('activeA');
		});
		$('.navUl a:not(".n-c")').click(function(){
			sessionStorage.removeItem('product');
		})
		//产品介绍点击
		$('#productIntro').on('click', '.product', function(e){
			e.stopPropagation();
			$('#productIntro .products').show();
		});
		$('#productIntro').on('click', '.products a', function(){
			sessionStorage.setItem('product', $(this).text());
		});
	}
	//收尾footer
	if($('#footer').html()==""){
		var str = 
		'<div class="div1">'
			+'<table>'
				+'<thead>'
					+'<tr>'
						+'<th>公司详情：</th>'
					+'</tr>'
				+'</thead>'
				+'<tbody>'
					+'<tr>'
						+'<td><i class="iconfont icon-youxiang"></i>邮      箱：support@supermp.com</td>'
						
					+'</tr>'
					+'<tr>'
						
					+'</tr>'
					+'<tr>'
						+'<td colspan="3" style="position: relative;"><i class="iconfont icon-dizhi"></i>地      址：<span style="position: absolute;">北京市朝阳区<br/>国门大厦A座4层(全国营销运营中心)<br/>国门大厦C座3层(AI研发中心)</span></td>'
					+'</tr>'
				+'</tbody>'
			+'</table>'
		+'</div>'
		+'<div style="float:left;margin-left: 5rem"><div class="div2">'
			+'<p style="font-size: 24px;padding: 69px 0 23px;">咨询微信</p>'
			+'<img src="img/indexImg/ourEWM.png" style="width: 200px;">'
		+'</div>'
		+'<div class="div2" style="margin-left:40px;">'
			+'<p style="font-size: 24px;padding: 69px 0 23px;">盈呼公众号</p>'
			+'<img src="img/indexImg/yhGZH.jpg" style="width: 200px;">'
		+'</div>'
		+'</div>'
		+'<div style="clear: both;"></div>'
		+'<div style="text-align: center;font-size:10px;line-height:110px;"><strong style="margin-right:100px;">&copy;北京知行信科技有限公司</strong><strong style="margin-right:100px;">京ICP编号：B2-20171816</strong><strong><a href="http://www.beian.miit.gov.cn" target="_blank" class="icp">京ICP备17042959号</a></strong></div>'
		$('#footer').html(str);
	}
	//免费体验窗口
	if($('#mask').html()==""){
		var mask = 
		'<div class="onTrial">'
				+'<div class="onTrialLeft"></div>'
				+'<div class="onTrialRight">'
					+'<div class="onTrialHeader">'
						+'<input type="button" value="免费体验" class="onTrialBtn activeBtn" onclick="$(\'.trial\').show();$(\'.agent\').hide();"/>'
						+'<input type="button" value="项目合作" class="agentBtn" onclick="$(\'.agent\').show();$(\'.trial\').hide();"/>'
						+'<input type="button" value="×" class="closeTrial" onclick="maskHide()">'
					+'</div>'
					+'<div class="trial">'
						+'<div style="margin-top: 80px;">'
							+'<input id="trialPerson" type="text" value="" placeholder="请输入联系人名称" maxlength="20"/>'
							+'<span>联系人：</span><div style="clear: both;"></div>'
							+'<p class="person_i">请填一下您的名字</p>'						
						+'</div>'
						+'<div>'							
							+'<input id="trialTel" type="text" value="" placeholder="请输入您的联系号码" maxlength="11"/>'
							+'<span>联系电话：</span><div style="clear: both;">'
							+'<p class="phone_i">请填一下您的手机号</p>'							
							+'</div>'
						+'</div>'
						+'<div class="trialBtnDiv">'
							+'<input class="noTrial" type="button" value="取消" onclick="maskHide()"/>'
							+'<input class="yesTrial" type="button" value="免费体验" onclick="yesTrial()"/>'
						+'</div>'
					+'</div>'
					+'<div class="agent" style="display: none;">'
						+'<div style="margin-top: 51px;">'				
							+'<input id="agentPenson" type="text" value="" placeholder="请输入联系人名称" maxlength="20"/>'
							+'<span>联系人：</span><div style="clear: both;">'
							+'<p class="person_i">请填一下您的名字</p>'	
							+'</div>'
						+'</div>'
						+'<div>'
							+'<input id="agentTel" type="text" value="" placeholder="请输入您的联系号码" maxlength="11"/>'
							+'<span>联系电话：</span><div style="clear: both;">'
							+'<p class="phone_i">请填一下您的手机号</p>'	
							+'</div>'
						+'</div>'
						+'<div style="margin-bottom:37px;">'			
							+'<input id="agentCom" type="text" value="" placeholder="请输入公司名称" maxlength="20"/>'
							+'<span>公司名称：</span><div style="clear: both;"></div>'
						+'</div>'
						+'<div>'
							+'<input id="agentAddress" type="text" value="" placeholder="请输入您的公司地址" maxlength="60"/>'
							+'<span>地址：</span><div style="clear: both;"></div>'
						+'</div>'
						+'<div class="agentBtnDiv" style="margin-top: 37px;">'
							+'<input class="noAgent" type="button" value="取消" onclick="maskHide()"/>'
							+'<input class="yesAgent" type="button" value="确认合作" onclick="yesAgent()"/>'
						+'</div>'	
					+'</div>'
				+'</div>'
				+'<div style="clear: both;"></div>'
			+'</div>'
		$('#mask').html(mask);
		
		$('.onTrialBtn,.agentBtn').click(function(){
			$('.onTrialBtn,.agentBtn').removeClass('activeBtn')
			$(this).addClass('activeBtn')
		})
			
	}
	//美洽客服接入
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
    
//	if($('.bai').html()=="index"){
//		// 初始化成功后调用美洽 showPanel
//	    _MEIQIA('allSet', function(){
//	      _MEIQIA('showPanel');
//	    });
//	}
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

function scrollOne(s){
	var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
	var eTop=$(s).offset().top;//橙色容器距离整个页面顶部的距离
	var wTop=$(window).height();//绿色框可视区域的高度
	window.onresize=function(){
	var wTop=$(window).height();//缩放窗口这个高度会改变，需要再取得
	}				
	//放在scroll事件里面
	if(scrollTop+wTop > eTop){//动画播放事件
		$(s).addClass('divScroll')
	}else{
		$(s).removeClass('divScroll')
	}
}

function yesTrial(){
	var name =  $('#trialPerson').val();
    var phone = $('#trialTel').val();
    var yesTrial = {
        name: name,
        phone: phone
    };
     if($('#trialPerson').val() == ""){
        $('.trial .person_i').css("opacity","1");
    } else{
    	$('.trial .person_i').css("opacity","0");
    }
     if(oPhonetest(phone)){
        $('.trial .phone_i').css("opacity","0");
    } else{
    	$('.trial .phone_i').css("opacity","1");
    }
    if (oPhonetest(phone,'trial') && $('#trialPerson').val() != "" && $('#trialTel').val() != "") {
        $.ajax({
            type: "POST",
            url: '/tmk-home/tryout/insert',
            data: yesTrial
        }).done(function (data) {
        	var data = JSON.parse(data)
            if(data.code==404){
        		 alert("参数错误，少传参数了")
        	}else if(data.code==403){
        		 alert("这个号码已经申请过了")
        	}else if(data.code==402){
        		 alert("手机号码格式不正确")
        	}else if(data.code==0){
        		 alert("体验成功")
        	}else if(data.code==1){
        		 alert("失败，稍后再试")
        	}
        }).fail(function (data) {
            alert("体验失败")
        });
    } else {
       
    }

}
function yesAgent(){
	var name =  $('#agentPenson').val();
    var phone = $('#agentTel').val();
    var company = $('#agentCom').val();
    var address = $('#agentAddress').val();
    var yesAgent = {
        name: name,
        phone: phone,
        company: company,
        address:address
    };
     if($('#agentPenson').val() == ""){
        $('.agent .person_i').css("opacity","1");
    } else{
    	$('.agent .person_i').css("opacity","0");
    }
    if(oPhonetest(phone)){
        $('.agent .phone_i').css("opacity","0");
    } else{
    	$('.agent .phone_i').css("opacity","1");
    }
    
    if (oPhonetest(phone) && $('#agentPenson').val() != "" && $('#agentTel').val() != "" ) {
        $.ajax({
            type: "POST",
            url: '/tmk-home/agent/insert',
            data: yesAgent
        }).done(function (data) {
        	var data = JSON.parse(data)
            if(data.code==404){
        		 alert("参数错误，少传参数了")
        	}else if(data.code==403){
        		 alert("这个号码已经申请过了")
        	}else if(data.code==402){
        		 alert("手机号码格式不正确")
        	}else if(data.code==0){
        		 alert("成功")
        	}else if(data.code==1){
        		 alert("失败，稍后再试")
        	}
        }).fail(function (data) {
            alert("合作申请提交失败，请电话联系")
        });
    } else {
       
    }

}
function maskShow(){
	$('#mask').show();
	$('.navUl li a').removeClass('activeA')
	$('.maskShow').addClass('activeA')
}
function maskHide(){
	$('#mask').hide();
	$('.navUl li a').removeClass('activeA')
	activeA();
	if(sessionStorage.getItem('product')){
		$('#productIntro .product').addClass('activeA');
	}
}
//手机号正则
function oPhonetest(phone){
    var re = /^1[3|4|5|6|7|8|9][0-9]{9}$/;
    if (re.test(phone)) {
//      $('.phone_i').css("opacity","0");
        return true;
    } else { 
//      $('.phone_i').css("opacity","1");
        return false;
    }
}
//
function activeA(){
	if($('.bai').html()=="information"){
		$('.information').addClass('activeA')
	}else if($('.bai').html()=="index"){
		$('.index').addClass('activeA')
	}else if($('.bai').html()=="product"){
		$('.product').addClass('activeA')
	}else if(window.location.hash=="#join"){
		$('.join').addClass('activeA');
		$('.aboutMain2').hide();
		$('.aboutMain2join').show();
		$('.aboutNav2').removeClass('activeAboutBtn')
		$('.aboutNav2').eq(1).addClass('activeAboutBtn')
	}else if($('.bai').html()=="about"){
		$('.about').addClass('activeA')
	}else if($('.bai').html()=="maskShow"){
		$('.maskShow').addClass('activeA')
	}
}