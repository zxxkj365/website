$(function() {
	$('.aboutNav2').click(function(){
		$('.aboutNav2').removeClass('activeAboutBtn')
		$(this).addClass('activeAboutBtn')
	})
});

 function prev_pic() {
	var wrap = document.getElementById("list");
	var newLeft;
	if(wrap.style.left == "-122px"){
		newLeft = 0;
	}else if(wrap.style.left == "0px"){
		newLeft = -1178; 
	}else{
	    newLeft = parseInt(wrap.style.left)+352;
	}
	wrap.style.left = newLeft + "px";
	    console.log(wrap.style.left)
}
function next_pic() {
    var wrap = document.getElementById("list");
    var newLeft;
	if(wrap.style.left == "-1056px"){
	    newLeft = -1178;
	    
	}else if(wrap.style.left == "-1178px"){
		newLeft = 0; 
	}else{
	    newLeft = parseInt(wrap.style.left)-352;
	}
    wrap.style.left = newLeft + "px";
// console.log(wrap.style.left)
}
function btnAboutAgent(a){
	var name =  a.eq(1).val();
    var phone = a.eq(0).val();
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
	        		 alert("成功")
	        	}else if(data.code==1){
	        		 alert("失败，稍后再试")
	        	}
	           
	        }).fail(function (data) {
	            alert("提交失败，稍后再试")
	        });
	    }
	
	}

 
 
