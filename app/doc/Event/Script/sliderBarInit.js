/**
 * 动态左侧栏
 * 调用：sliderBar.init();
 */
define(['jquery','loadCss'],function ($,loadCss){

		loadCss.load('../../../Event/css/slider-bar-init.css');

		function init(){
			var userInfo = JSON.parse(ctCache.readWebData("user"));
			var userAvatar = userInfo.avatar;
			var service_url=ctCache.readWebData("uploadServiceUrl");

			//测试写死service_url
			service_url = "http://101.227.245.188:8185/axis2/upFile/";

			var imgUrl = service_url + userAvatar;

			var genderImgUrl = ""; 
			switch(userInfo.gender){
				case "1":
					genderImgUrl = "../../../App/12000004/App/images/boy.png";
					break;
				case "2":
					genderImgUrl = "../../../App/12000004/App/images/girl.png";
					break;
				default:
					genderImgUrl = "../../../App/12000004/App/images/information.png";
			}

	        var tpl = '<div class="sb-slidebar sb-left">'
					  + '<nav><ul class="sb-menu">'
					  +'<li class="profile"><span class="avatar"><img src="'+imgUrl+'"></span><span class="sex"><img src="'+genderImgUrl+'"></span> <span class="name">'+userInfo.nick_name+'</span>, <span class="age">'+getAge(userInfo.birthday)+'</span></li>'
					  +'<li class="near"><a href=\'javascript:openApp("12000001","","","");\'><span><img src="../../../Images/common/near-icon.png" width="24" height="24"></span>附近会员</a></li>'
					  +'<li class="chat"><a href=\'javascript:openApp("12000002","",{isuser:0},"");\'><span><img src="../../../Images/common/chat-icon.png" width="24" height="24"></span>搭讪</a></li>'
					  +'<li class="msg"><a href=\'javascript:openApp("12000009","","","");\'><span><img src="../../../Images/common/msg-icon.png" width="24" height="24"></span>信息</a></li>'
					  +'<li class="contact"><a href=\'javascript:openApp("12000008","","","");\'><span><img src="../../../Images/common/contact-icon.png" width="24" height="24"></span>联系人</a></li>'
					  +'</ul></nav></div>';

			$(tpl).insertAfter($('#sb-site'));
			$(".sb-menu").on("click","li.profile",function(event){
				  if(event.target==this){
				      ctTransfer.openApp("12000004","clientInit","","");
				  }
			});
			getContactCount();
		}

function openApp(appId, initFun, initParam, title)
{
	ctTransfer.openApp(appId,initFun,initParam,title);
}

function getContactCount()
{	
	//读取id，暂写死
	var userInfo = JSON.parse(ctCache.readWebData("user"));
	var uid = userInfo.user_id;
	ctConnection.requestSpgtVer2({appid : "12000008", tagName : "NotReadCount", cmdCode : "notReadCount", urlDatas : [],
    		paramDatas : [ uid, uid]
    }, function(data){
        if (!data.outputMap||!data.outputMap.data){
	    	data.resultDesc&&alert(data.resultDesc);
	    	return;
	    }
	    var arr = data.outputMap.data;
	    // alert(JSON.stringify(arr));
	    // alert("count: " + arr[0]["count"]);
	    if (arr[0]["count"] != "0") {
			$('.contact a').append('<span class="tips">'+ arr[0]["count"] +'</span>');
		};

    }, function(status,error){
            
    });
}

       return{
       	 init : init,
       	 openApp : openApp
       }
});