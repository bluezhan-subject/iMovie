var max_img=1;//是否大图显示

// var urls=JSON.parse(ctextend.getXmlOptionJson('serviceurl'));//data下xmpoption下的配置文件
// ctCache.saveWebData("uploadServiceUrl",urls[0]["name"]);
// ctCache.saveWebData("ajaxServiceUrl",urls[1]["name"]);

/**
 * Created with IntelliJ IDEA. User: wxl Date: 14-3-14 Time: 上午10:01方法 for:公共的一些
 */
Array.prototype.remove=function(dx)
　{
　　if(isNaN(dx)||dx>this.length){return false;}
　　for(var i=0,n=0;i<this.length;i++)
　　{
　　　　if(this[i]!=this[dx])
　　　　{
　　　　　　this[n++]=this[i]
　　　　}
　　}
　　this.length-=1
　}

function isNotNull(obj){
	if(JSON.stringify(obj)=="{}"||JSON.stringify(obj)==undefined||JSON.stringify(obj)=="[]")
		return false;
	return true;
}
function dateFromStringWithTimeObj(str) {
	if (str == null || str == undefined) {
		return '';
	}
	var match;
	if (!(match = str.match(/\d+/))) {
		return false;
	}
	var date = new Date();
	date.setTime(match[0] - 0);
	return date;
}

// 通用日期转换方法
// JSON 日期类型转换方法
// 返回 YYYY-MM-DD 字符串
function dateFromStringWithTime(str) {
	if (str == null || str == undefined) {
		return '';
	}
	var match;
	if (!(match = str.match(/\d+/))) {
		return false;
	}
	var date = new Date();
	date.setTime(match[0] - 0);
	return DateToStr(date);
}
// 日期转化为字符串格式： yyyy-mm-dd
function DateToStr(dt) {
	var str = "";
	if (dt.getFullYear) {
		var y, m, d;
		y = dt.getFullYear();
		m = dt.getMonth() + 1; // 1-12
		m = "" + m;
		d = "" + dt.getDate();
		if (m.length != 2) {
			m = "0" + m;
		}
		if (d.length != 2) {
			d = "0" + d;
		}
		str = "" + y + "-" + m + "-" + d;
	}
	return str;
}

// 日期转化字符串格式 yyyy-MM-dd HH:mm
function DateToString(dt) {
	var str = "";
	return dt.getFullYear() + "-" + formatTwo(dt.getMonth() + 1) + "-"
			+ formatTwo(dt.getDate()) + " " + formatTwo(dt.getHours()) + ":"
			+ formatTwo(dt.getMinutes());
}

function DateToTimeString(dt) {
	var str = "";
	return formatTwo(dt.getHours()) + ":" + formatTwo(dt.getMinutes()) + ":"
			+ formatTwo(dt.getSeconds());
}

function formatTwo(s) {
	if (s.toString().length == 1)
		return "0" + s;
	return s;
}
// 验证日期时间格式
function validateDate(strDate) {
	var reg = /^(\d{1,4})(-|\/)(\d{1,2})\2(\d{1,2}) (\d{1,2}):(\d{1,2})$/;
	var r = strDate.match(reg);
	if (r == null)
		return false;
	else
		return true;
}

// 格式化字符串数组
function getSubStrDate(str) {
	var format="";
	if(str!=""&&str!=null)format= str.substring(0, 10);// 2013-03-14 00:09:12 得到结果是 2013-03-14
	return format;
}

// 得到2013/09/10 89:23:12 eg:getFormatDateStr("2013-09-10 23:23:23")

function getFormatDateStr(str) {
	return str.replace(/-/g, '/');
}

// 得到今天的日期
function getCurrentDate() {
	return new Date().format("yyyy-MM-dd hh:mm:ss");

}

// 格式化日期
Date.prototype.format = function(format) {
	var o = {
		"M+" : this.getMonth() + 1, // month
		"d+" : this.getDate(), // day
		"h+" : this.getHours(), // hour
		"m+" : this.getMinutes(), // minute
		"s+" : this.getSeconds(), // second
		"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
		"S" : this.getMilliseconds()
	// millisecond
	}

	if (/(y+)/.test(format)) {
		format = format.replace(RegExp.$1, (this.getFullYear() + "")
				.substr(4 - RegExp.$1.length));
	}

	for ( var k in o) {
		if (new RegExp("(" + k + ")").test(format)) {
			format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? o[k]
					: ("00" + o[k]).substr(("" + o[k]).length));
		}
	}
	return format;
}

/**
 * 判断是否大于现在时间
 */
function IsGtCurrent(str) {
	var date = new Date(str);
	var current = new Date();
	if (date.getTime() > current.getTime())
		return true;
	return false;
}





/**
 * 多余的数据用省图号表示
 * 
 * @param size
 * @param str
 */
function getPoints(str, size) {
	if (str.length > size)
		return str.substring(0, size) + "...";
	return str;
}

/** 字符串转变成json对象 */
function decode(str) {
	
	try {
		return (typeof (str) != "string") ? str : (str.trim() == '') ? ''
				: eval('(' + str + ')');
	} catch (e) {
		return str;
	}
}




/**
 * 时间间隔多少天
 * @param startDate 开始时间
 * @param endDate 结束时间
 * @returns {Number}
 */

function GetDateDiff(startDate,endDate)  
{  
    var startTime = new Date(Date.parse(startDate.replace(/-/g,   "/"))).getTime();     
    var endTime = new Date(Date.parse(endDate.replace(/-/g,   "/"))).getTime();     
    //var dates = Math.abs((startTime - endTime))/(1000*60*60*24);  //天数   
    var dates=(endTime - startTime)/(1000*60*60*24);
    return  Math.ceil(dates);    
}


//得到商铺基本信息
function getShopInfo(shop_id,appId){
	//var field="shop_id,shop_name,shop_logo,shop_tag,shop_floor,shop_number,shop_phone,shop_descripition";
//	var table="shop";
	var where=" where shop_id="+shop_id;
	
	
	ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlshop",cmdCode:"shopBase",
        urlDatas:[],paramDatas:[where]},
         function(data){
        	
         if(isNotNull(data["outputMap"]["data"])){
          var arr=data["outputMap"]["data"][0];
         // alert(JSON.stringify(arr));
          $(".businessmen-info-attr").find("span").eq(0).html(arr["shop_tag"]);
          $(".businessmen-info-attr").find("span").eq(1).html(arr["shop_floor"]+"层-"+arr["shop_number"]);
          $(".businessmen-info-attr").find("span").eq(2).html(arr["shop_phone"]);
          $(".businessmen-info-attr").find("span").eq(2).click(function(){
        	  ctTools.makePhoneCall($(this).html());
          });
          
          
          if($(".arrows-right img").length){
        
        	var service_url=ctCache.readWebData("service_url");
        	var img=service_url+arr["shop_logo"];
        	  
          $(".businessmen-info-attr").find("dt").children("img").attr('src',img);//得到logo
         
		 $(".businessmen-info-attr").find("dt").children("img").click(function(){
		 	 var param={};
        	  param.shop_id=shop_id;
        	  ctTransfer.openApp("400000","clientInit",param,"商铺详情");
		 });
          $(".arrows-right img").click(function(){
        	  var param={};
        	  param.shop_id=shop_id;
        	  //alert("param.shop_id==>"+shop_id);
        	  ctTransfer.openApp("400000","clientInit",param,"商铺详情");
          });
          }
        } 
        },
        function(status,error){

        });
}


/**
 * 
 * @param obj [{'name':'1','age':'22'},{'name':'1','age':'22'}]
 * @param key key表哪个字段
 * @param name name是指具体的值
 * @returns
 */
function deleteJson(obj,key,name){
	 $.each(obj,function(n,value) {  
		   if(value[key]==name){
			 obj.remove(n); 
		   }
	 	 });
	 return obj;
}



function Guid(g){

    var arr = new Array(); //存放32位数值的数组

   

    if (typeof(g) == "string"){ //如果构造函数的参数为字符串

        InitByString(arr, g);

    }

    else{

        InitByOther(arr);

    }

    //返回一个值，该值指示 Guid 的两个实例是否表示同一个值。

    this.Equals = function(o){

        if (o && o.IsGuid){

             return this.ToString() == o.ToString();

        }

        else{

             return false;

        }

    }

    //Guid对象的标记

    this.IsGuid = function(){}

    //返回 Guid 类的此实例值的 String 表示形式。

    this.ToString = function(format){

        if(typeof(format) == "string"){

             if (format == "N" || format == "D" || format == "B" || format == "P"){

                  return ToStringWithFormat(arr, format);

             }

             else{

                  return ToStringWithFormat(arr, "D");

             }

        }

        else{

             return ToStringWithFormat(arr, "D");

        }

    }

    //由字符串加载

    function InitByString(arr, g){

        g = g.replace(/\{|\(|\)|\}|-/g, "");

        g = g.toLowerCase();

        if (g.length != 32 || g.search(/[^0-9,a-f]/i) != -1){

             InitByOther(arr);

        }

        else{

             for (var i = 0; i < g.length; i++){

                  arr.push(g[i]);

             }

        }

    }

    //由其他类型加载

    function InitByOther(arr){

        var i = 32;

        while(i--){

             arr.push("0");

        }

    }

    /*

    根据所提供的格式说明符，返回此 Guid 实例值的 String 表示形式。

    N  32 位： xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

    D  由连字符分隔的 32 位数字 xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx

    B  括在大括号中、由连字符分隔的 32 位数字：{xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx}

    P  括在圆括号中、由连字符分隔的 32 位数字：(xxxxxxxx-xxxx-xxxx-xxxx-xxxxxxxxxxxx)

    */

    function ToStringWithFormat(arr, format){

        switch(format){

             case "N":

                  return arr.toString().replace(/,/g, "");

             case "D":

                  var str = arr.slice(0, 8) + "-" + arr.slice(8, 12) + "-" + arr.slice(12, 16) + "-" + arr.slice(16, 20) + "-" + arr.slice(20,32);

                  str = str.replace(/,/g, "");

                  return str;

             case "B":

                  var str = ToStringWithFormat(arr, "D");

                  str = "{" + str + "}";

                  return str;

             case "P":

                  var str = ToStringWithFormat(arr, "D");

                  str = "(" + str + ")";

                  return str;

             default:

                  return new Guid();

        }

    }

}


Guid.Empty = new Guid();

//初始化 Guid 类的一个新实例。

Guid.NewGuid = function(){

     var g = "";

     var i = 32;

     while(i--){

         g += Math.floor(Math.random()*16.0).toString(16);

     }

     return new Guid(g);

}






//生成二维码
function utf16to8(str) { //转码 
var out, i, len, c; 
out = ""; 
len = str.length; 
for (i = 0; i < len; i++) { 
c = str.charCodeAt(i); 
if ((c >= 0x0001) && (c <= 0x007F)) { 
out += str.charAt(i); 
} else if (c > 0x07FF) { 
out += String.fromCharCode(0xE0 | ((c >> 12) & 0x0F)); 
out += String.fromCharCode(0x80 | ((c >> 6) & 0x3F)); 
out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F)); 
} else { 
out += String.fromCharCode(0xC0 | ((c >> 6) & 0x1F)); 
out += String.fromCharCode(0x80 | ((c >> 0) & 0x3F)); 
} 
} 
return out; 
} 
/*** 优惠券详情结束开始**/




function liclick(appId,appReverId,dom){
	$(dom).children("li").on('click',function(){
		var img=$(this).children(".coupon-btn").find("img");
		var index=$(this).index();
			var coupon_id=	$(this).find("input").eq(0).val();
			var param={};
			param.coupon_id=coupon_id;
			//alert(appReverId+"appReverId");
			ctTransfer.openApp(appReverId,"clientInit",param,"优惠券详情");//跳转到详情页面
			setFrontLog(appId,"2","","1","","1",coupon_id,"");
			//模块 type:eg://1表浏览  2下载优惠券3.收藏4.返回 5.跳转 6团购 7.评论 open_id "" source“1”  cur_squence ""
			//obj_type 详情页面需求记录类型 1.优惠券2商品3.活动4.团购 5我的订单
		});
	
}

/*** 我的优惠券列表页面结束**/



//前台日志操作,
/**
 * module模块id，模块名称 寻找字典表对应模块字段的对应值
 * type操作类型 eg:1.浏览2.下载优惠券3.收藏4.返回
 * mac 手机mac值 唯一标识
 * open_id 微信ID
 * source 1.app本身打开2.微信端进入
 * cur_squence  会话标识  取自tbPubSequence表的编号值 iCurSquence
 * obj_type 详情页面需求记录类型  1.优惠券2商品3.活动4.团购
 * obj_id 详情具体对应Id
 * user_id 用户ID
 * 
 */
function setFrontLog(module,type,open_id,source,cur_squence,obj_type,obj_id,user_id){
	//模块 type:eg://1表浏览  2下载优惠券3.收藏4.返回 5.跳转 6团购 7.评论 open_id "" source“1”  cur_squence ""
	//obj_type 详情页面需求记录类型 1.优惠券2商品3.活动4.团购 5我的订单
	var appId="500003";
	var user=ctCache.readWebData("user");
	user_id=user!=""?JSON.parse(user).user_id:" ";
	//user_id="";
	var mac=ctDevices.getDeviceId();//得到设置唯一ID
	   ctConnection.requestSpgtVer2({
		appid : appId,
		tagName : "xmlfrontLog",
		cmdCode : "frontLog",
		urlDatas : [],
		paramDatas : [module,type,mac,open_id,source,cur_squence,obj_type,obj_id,user_id]
	}, function(data){
	
		if(isNotNull(data["outputMap"]["data"])){
			var result=data["outputMap"]["data"][0]["result"];
		    if(result=="1"){
		    	
		    }
		}
	},function(status,error){
		
	});
	
	
}




function stringToDateTime(postdate) 
{ 
var second = 1000; 
var minutes = second*60; 
var hours = minutes*60; 
var days = hours*24; 
var months = days*30; 
var twomonths = days*365; 
var myDate = new Date(Date.parse(postdate)); 
if (isNaN(myDate)) 
{ 
	if(!(postdate==''||postdate==null))
  myDate =new Date(postdate.replace(/-/g, "/")); 
} 
var nowtime = new Date(); 
var longtime =nowtime.getTime()- myDate.getTime(); 
var showtime = 0; 
if( longtime > months*2 ) 
{ 
return postdate; 
} 
else if (longtime > months) 
{ 
return "1个月前"; 
} 
else if (longtime > days*7) 
{ 
return ("1周前"); 
} 
else if (longtime > days) 
{ 
return(Math.floor(longtime/days)+"天前"); 
} 
else if ( longtime > hours) 
{ 
return(Math.floor(longtime/hours)+"小时前"); 
} 
else if (longtime > minutes) 
{ 
return(Math.floor(longtime/minutes)+"分钟前"); 
} 
else if (longtime > second) 
{ 
return(Math.floor(longtime/second)+"秒前"); 
}else 
{ 
//return(longtime+" error "); 
	return "";
} 
} 


function pageBack(){
	ctTransfer.returnBack(ctBackType.CallFun,"");
}



/**
 * 广告位
 * @param appId
 * @param dom
 * @param where
 * @returns
 */
function getServiceAd(appId,where){
	
  ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlserviceAd",cmdCode:"serviceAd",urlDatas:"",
	        paramDatas:[where]}, function(data){
	        	
	        	if(isNotNull(data["outputMap"]["data"])){
					currentIndex=currentIndex+1;
			        onloading(currentIndex, maxIndex);
	        		var arr=data["outputMap"]["data"];
	        		var str='';
	        		 var service_url=ctCache.readWebData("service_url");
		        	for(var i=0;i<arr.length;i++){
		        		var img_src=arr[i]["ad_img_url"]!=null?service_url+arr[i]["ad_img_url"]:'';
		        	//	var img_src='images/1.png';
		        		str='<div class="swipe-item">'+
						    '<img src="'+img_src+'">'+
						    '<input type="hidden" value="'+arr[i]["ad_module"]+'"/>'+
						    '<input type="hidden" value="'+arr[i]["ad_module_id"]+'"/>'+
				            '</div>';
		        		$('.swipe-wrap').append(str);
		        		$('.swipeIndexs').append('<span class="swipeIndex"></span>');
		        	}
		        
		        	$('.swipeIndexs span:first').addClass('selected');
	        	}
	        	
	        	new Swipe(document.getElementById('slider'), {
	                speed: 800,
	                auto: 3000,
	                continuous: true,
	                callback: function(index, elem) {
	                  $('.swipeIndex').removeClass('selected');
	                  $('.swipeIndex').eq(index).addClass('selected');
	                }
	              });
	        	
	        	serviceAdclick();
	        	
	}, function(status,error){
	        	
	        });
}


function serviceAdclick(){
	$(".swipe-wrap div").click(function(){
		var module=$(this).children("input:eq(0)").val();//对应模块id:1.商铺2.商品3.优惠券4.新品(专辑)5.团购
		var module_id=$(this).children("input:eq(1)").val();
		var param={};
		
		switch(Number(module)){
		case 1://商铺
			param.shop_id=module_id;
			param.appId="400000";
			ctTransfer.openApp(param.appId, "clientInit", param, "");
			break;
		case 2://商品
			param.product=module_id;
			param.appId="500006";
			ctTransfer.openApp(param.appId, "clientInit", param, "");
			break;
		
		case 3://优惠券
			param.coupon_id=module_id;
			param.appId="700002";
			ctTransfer.openApp(param.appId, "clientInit", param, "");
			break;
			
		case 4://新品
			param.album_id=module_id;
			param.appId="600001";
			ctTransfer.openApp(param.appId, "clientInit", param, "");
			break;
			
		case 5://团购
			param.deal_id=module_id;
			param.appId="200002";
		//	ctTransfer.openApp(param.appId, "clientInit", param, "");
			//var deal_h5_url=$(this).children("input").val();
   		   // ctTransfer.openUrl(deal_h5_url,"团购详情"); 
			//alert("module_id"+module_id);
			ctConnection.requestSpgtVer2({appid:"200002",tagName:"xmlTuan",cmdCode:"tuangou",urlDatas:"",
		        paramDatas:["where A.deal_id='"+module_id+"'"]}, function(data){
		    if(isNotNull(data["outputMap"]["data"])){
		    	
		        var deal_h5_url=data["outputMap"]["data"][0]["deal_h5_url"];
		        ctTransfer.openUrl(deal_h5_url,"团购详情"); 
		    }
		 }, function(status,error){
		        	
		        });

			break;
		
			
		}
		
	});
}


function isPhoneNum(num){
	var r = /^[0-9]+$/;　　 
    if(!/^[0-9]{11}$/.test(num)){
	   alert("请填写正确的手机号码");	
	   return 0;
	}
	return 1;
}

/**
   *发送消息
  *--参数
  *_config 传入需要修改的JSON，不需要修改的不用传，
  *例如只修改标题：sendNotice({Mcaption:"测试"});其它使用默认值
  *只修改会话内容：sendNotice({OtherInfo:{C_Info:"发送测试内容"}});其它使用默认值
  *本项目用到的参数已经注释，未尽事宜详情请联系:>>>
  *code:
  *sendNotice({Mcaption:"你有新的消息",Minfo:"内容为测试",OtherInfo:{
        C_Info:"Hello World",C_Caption:"下流我",C_Name:"邪恶的输入法"}});
  */
  function sendNotice(_config){
    var MSendTime=(new Date()).format("yyyy-MM-dd hh:mm:ss.S");
    var appInfo=getApplicationInfo();
    var userJson=ctCache.readWebData("user")||"{}";
    var M_ID=userJson.M_ID;
    var config={
          PlatformId:appInfo.PlatformID,//平台ID
          ProId:appInfo.ProjectID,//项目ID
          MSendTime:MSendTime,//发送时间，默认当前时间
          NoticeShow:1,//通知栏显示  0不显示,1显示
          Mcaption:"",//消息标题，显示在通知
          Minfo:"",//消息内容，显示在通知
          AnnouncementShow:0,//公告区显示  0不显示,1显示
          BoxShow:0,//对话框显示  0不显示,1显示   
          SendSourceMethods:"MessageChat",//客户端处理标题
          OtherInfo:{//SendSourceMethods为"MessageChat"时客户端处理为会话，OtherInfo包括函以下节点
            M_ID:M_ID,//会话主体ID
            S_ID:M_ID,//会话目标ID
            C_ID:null,//会话引用源ID
            C_Type:"Chat",//会话类型:Chat:"聊天",GroupChat:"群聊",Member_1:"加为好友",Member_2:"删除好友",FriendsCircle_1:"发布新的好友圈",FriendsCircle_2:"评论您的好友圈",FriendsCircle_3:"浏览你的好友圈",FriendsCircle_4:"支持您的好友圈",Topic_1:"评论您的交流",Topic_2:"浏览你的交流",Topic_3:"支持您的交流",News_1:"评论您的资讯",News_2:"浏览你的资讯",News_3:"支持您的资讯",Transaction_1:"评论您的商机",Transaction_2:"浏览你的商机",Transaction_3:"支持您的商机",Circle_1:"邀请您加入圈子",Circle_2:"退出圈子",Space_1:"留言您的空间",Space_2:"浏览你的空间",Space_3:"评价您的空间",Activity_1:"邀请您加入活动",Activity_2:"退出活动",Activity_3:"发布活动分享",Activity_4:"评论您的活动分享",Activity_5:"浏览你的活动分享",Activity_6:"支持您的活动分享",Activity_7:"活动评价",Announcement:"公告"
            C_Updn:"U",//C_Type为:"Chat"时U发送者D接收者
            C_Name:"",//发送姓名
            C_Caption:"",//会话标题
            C_Info:"",//会话内容
            C_Num:1,//信息数量
            C_CreateTime:MSendTime,//创建时间
            C_PhoneType:appInfo.PhoneType, //手机类型
            C_PhoneModel:appInfo.PhoneModel,//手机型号
            C_Longitude:appInfo.Longitude,//经度
            C_Latitude:appInfo.Latitude,//纬度
            C_Address: appInfo.Address,//地址
            C_PlatformID:appInfo.PlatformID,
            C_ProjectID:appInfo.ProjectID,
            C_AppID:appInfo.AppID
              },
          SendObj:4,//发送类型，4为指定用户，0为群发，更多>>联系小红
          SendUser:M_ID,//类型为4时指定用记的ID，多个用逗号隔开
          MState:3,
          MAuditId:"1211031035200833",
          MAuditTime:"2012-11-15 15:39:31.883",
          MCreateId:"1211031035200833",
          Mtype:"1000",
          MSendTimeE:"2099-01-01 00:00:00.0",
          MId:getNowDateTimeId()+Math.floor(Math.random() * 10),
          MCreateTime:MSendTime,
          MEvent:"1000000",
          NoticeEvent:"0",
          AnnouncementEvent:"0",
          BoxShowSys:"0",
          BoxButton1:"1",
          BoxButton1C:"",
          BoxButton1E:"0",
          BoxButton2:"1",
          BoxButton2C:"",
          BoxButton2E:"0",
          AdShow:"0",
          AdEvent:"0",
          AdPic:"0",
          SendDeviceObj:"",
          SendAppVer:"",
          SendDevice:"",
          SendSourceId:"100003",
          SendWay:"0",
          SendAdminUser:"0",
          SendErrNum:"0",
          SendErrSet:"0,0",
          SMSShow:"0",
          EMailShow:"0",
          SendTimeout:"0",
          NoticeConfirm:"0",
          AnnouncementConfirm:"0",
          BoxConfirm:"0",
          AdConfirm:"0",
          AdShowTimeB:"2099-01-01 00:00:00.0",
          AdShowTimeE:"2099-01-01 00:00:00.0"}
    $.extend(config.OtherInfo,_config.OtherInfo);
    delete _config.OtherInfo;
    $.extend(config,_config);
    // 发送消息的格式。
    var messageStr =JSON.stringify([config]);
    //ctJS.logCat(messageStr)
    ctNotification.sendMessage(messageStr);
  }

  function getApplicationInfo(){
  /*
   * PhoneType 手机类型 PhoneModel 手机型号 Longitude 经度 Latitude 纬度 Address 地址
   * PlatformID 平台ID ProjectID 项目ID AppID 应用ID
   */
  var appInfo={
    "PhoneType":ctDevices.getDeviceType(),"PhoneModel":ctDevices.getDeviceModel(),"Longitude":0,
    "Latitude":0,"Address":"","PlatformID":"","ProjectID":"","AppID":""};
    var platformInfo = {"PlatformID":"1211031035200837","ProjectID":"100027","AppID":"100067"};
  $.extend(appInfo,platformInfo);
  switch(appInfo.PhoneType)
  {
    case "1":
    appInfo.PhoneType="A";
    break;
    case "2":
    appInfo.PhoneType="A";
    break;
    case "3":
    appInfo.PhoneType="I";
    break;
    case "4":
    appInfo.PhoneType="I";
    break;
    case "5":
    appInfo.PhoneType="W";
    break;
    case "6":
    appInfo.PhoneType="W";
    break;
    default:
    appInfo.PhoneType="d";
    break;
  }
  return appInfo;
}

// 返回当前时间生成的ID
function getNowDateTimeId(){
  return (new Date().format("yyyyMMddHHmmss") + padLeft(Math.round(Math.random() * 1000).toString(),3));
}

function padLeft(str, lenght) {
  if (str.length >= lenght)
  return str;
  else
  return padLeft("0" + str, lenght);
}

//首页
function goHome(){
	ctTransfer.openApp("100000","clientInit",{},"首页");
}
//搜索
function goSearch(){
	ctTransfer.openApp("300001","clientInit",{},"搜索");
}

//微社区
function goSns(){
	ctTransfer.openApp("1000004","clientInit",{},"微社区");
}
//我，秒杀
function goMy(){
	
	if(ctCache.readWebData("user")!=""){
		ctTransfer.openApp("1100003","clientInit","","个人信息中心");
	}else{
		ctTransfer.openApp("11000010","clientInit","","登录");
	}
	
}


function getIps(){
	ctConnection.requestSpgtVer2({appid:"100000",tagName:"xmlgetIps",cmdCode:"getIps",urlDatas:"",
        paramDatas:[]}, function(data){
        	
         if(isNotNull(data["outputMap"]["data"])){
        	 var arr=data["outputMap"]["data"][0];
        	 //service_url=arr["ip"];
        	// alert("service_url"+service_url);
        	 ctCache.saveWebData("service_url", arr["ip"]);
         }
}, function(status,error){});
}




//查看表情替换
function replace_em(str,path){
	str = str.replace(/\</g,'&lt;');
	str = str.replace(/\>/g,'&gt;');
	str = str.replace(/\n/g,'<br/>');
	str = str.replace(/\[em_([0-9]*)\]/g,'<img src="'+path+'$1.gif" border="0" />');
	return str;
}


/**
 * 收藏
 * @param user_id
 * @param favorite_type
 * @param favorite_id
 * @returns
 */
function insertMyFav(user_id, favorite_type, favorite_id){
	var creat_time=getCurrentDate();
	var description="";
	ctConnection.requestSpgtVer2({appid:"700002",tagName:"xmlinsertMyFav",cmdCode:"insertMyFav",urlDatas:"",
        paramDatas:[user_id, favorite_type, favorite_id, description, creat_time]}, function(data){
         if(isNotNull(data["outputMap"]["data"])){
        	 var arr=data["outputMap"]["data"][0]["result"];
			// alert("arr==>"+arr);
			 if (arr == "1") {
			 	var baseSql = "";
			 	switch (Number(favorite_type)) {
			 		//1:优惠券 2:商品 3:活动 4:商铺
						case 1:
							baseSql = "update shop_coupon set favorite_count=favorite_count+1 where coupon_id=" + favorite_id;
							break;
						case 2:
							baseSql = "update product set favorite_count=favorite_count+1 where product_id=" + favorite_id;
							break;
						case 3:
							baseSql = "update event set favorite_count=favorite_count+1 where event_id=" + favorite_id;
							break;
						case 4:
							baseSql = "update shop set favorite_count=favorite_count+favorite_count where shop_id=" + favorite_count;
							break;
					}
					
					ctConnection.requestSpgtVer2({
						appid: "100000",
						tagName: "xmlbaseSql",
						cmdCode: "baseSql",
						urlDatas: "",
						paramDatas: [baseSql]
					}, function(data){
						
						if (isNotNull(data["outputMap"]["data"])) {
						
							var arr_result = data["outputMap"]["data"][0]["result"];
							
							if (arr_result == "1") {
								ctAlertView.showToast("收藏成功", 2000);
							}
						}
					}, function(status, error){
					
					});
					
				}
         }
}, function(status,error){});
}


/**
 * 取消收藏
 * @param user_id
 * @param favorite_type
 * @param favorite_id
 * @returns
 */
function deleteMyFav(user_id, favorite_type, favorite_id){
	var where=" where 1=1 and user_id='"+user_id+"'"+" and favorite_type='"+favorite_type+"' and favorite_id='"+favorite_id+"'";
	ctConnection.requestSpgtVer2({appid:"700002",tagName:"xmldeleteMyFav",cmdCode:"deleteMyFav",urlDatas:"",
        paramDatas:[where]}, function(data){
         if(isNotNull(data["outputMap"]["data"])){
        	 var arr=data["outputMap"]["data"][0]["result"];
		
			 if(arr=="1"){
			 	var baseSql = "";
			 	switch (Number(favorite_type)) {
			 		//1:优惠券 2:商品 3:活动 4:商铺
						case 1:
							baseSql = "update shop_coupon set favorite_count=favorite_count-1 where coupon_id=" + favorite_id;
							break;
						case 2:
							baseSql = "update product set favorite_count=favorite_count-1 where product_id=" + favorite_id;
							break;
						case 3:
							baseSql = "update event set favorite_count=favorite_count-1 where event_id=" + favorite_id;
							break;
						case 4:
							baseSql = "update shop set favorite_count=favorite_count-favorite_count where shop_id=" + favorite_count;
							break;
					}
					
					ctConnection.requestSpgtVer2({
						appid: "100000",
						tagName: "xmlbaseSql",
						cmdCode: "baseSql",
						urlDatas: "",
						paramDatas: [baseSql]
					}, function(data){
					
						if (isNotNull(data["outputMap"]["data"])) {
							
							var arr_result = data["outputMap"]["data"][0]["result"];
							if (arr_result == "1") {
								
								ctAlertView.showToast("取消成功", 2000);
							}
						}
					}, function(status, error){
					
					});
			 }
        	// ctAlertView.showToast("取消成功",2000);
         }
}, function(status,error){});
}



/**
 * 收藏
 * @param user_id
 * @param favorite_type
 * @param favorite_id
 * @returns
 */
function getMyFav(user_id, favorite_type, favorite_id){
	var where=" where 1=1 and user_id='"+user_id+"'"+" and favorite_type='"+favorite_type+"' and favorite_id='"+favorite_id+"'";
	ctConnection.requestSpgtVer2({appid:"700002",tagName:"xmlgetMyFav",cmdCode:"getMyFav",urlDatas:"",
        paramDatas:[where]}, function(data){
         if(isNotNull(data["outputMap"]["data"])){
        	 var counts=data["outputMap"]["data"][0]["counts"];
        	 if(counts>0){
        		 $('#myfav').removeClass().addClass('favored-btn');
        	 }
         }
		 
		 
       
		 	$('#myfav').click(function(){
				 user=ctCache.readWebData("user");
                 user_id=user!=""?JSON.parse(user).user_id:"";
				  if (user_id != "") {
				  	var classname = $(this).attr('class');
				  	if (classname == "favor-btn") {
				  		       insertMyFav(user_id, favorite_type, favorite_id);//收藏优惠券
								$(this).removeClass().addClass('favored-btn');
							}
							else {
								deleteMyFav(user_id, favorite_type, favorite_id);//收藏优惠券
								$(this).removeClass().addClass('favor-btn');
							}
						}else{
							goLogin();


						}
				});
			
         
}, function(status,error){});
	
	
}

/**
 * 跑到登录界面
 */
function goLogin(){
	var app_id=arguments.length!=0?{
		app_id: arguments[0]
	}:"";
//	alert(JSON.stringify(app_id));
	ctAlertView.buildDialog("提示", "您还未登录，请先登录", "['确定','取消']", function(btnIndex){
								if(btnIndex==1)
								ctTransfer.openApp("11000010","clientInit",app_id,"登录");//跑回登录界面
							});
}

//验证邮箱格式
function verifyEmail(emailText)  
{  
	var email = emailText;  
 	var pattern = /^([a-zA-Z0-9_-])+@([a-zA-Z0-9_-])+(.[a-zA-Z0-9_-])+/;  
 	flag = pattern.test(email);  
 	if(flag) {  
    	return true;  
	}else {  
      	return false;  
	}  
} 

//获取图片url
function getImgUrl(img){
  var service_url=ctCache.readWebData("service_url");
  var url=service_url+img;//(max_img?arr[0]["max_img"]:arr[0]["min_img"]);
  
  return url;
}

//得到user_id
function getUserId(){
	var user=JSON.parse(ctCache.readWebData("user"));
    var user_id=user!=''?user.user_id:'';
	return user_id;
}

/*
 * 根据出生日期返回年龄
 */
 function getAge(birthdayText){
 	var birthday=new Date(birthdayText.replace(/-/g, "\/")); 
	var d=new Date(); 
	var age = d.getFullYear()-birthday.getFullYear()-((d.getMonth()<birthday.getMonth()|| d.getMonth()==birthday.getMonth() && d.getDate()<birthday.getDate())?1:0);
	if (age < 0) {
		age = 0;
	}
	return age;
 }
 
 
 //对数据的null进行限制
 function numberIsNull(str){
 	if(str==null||str==""){
		return 0;
	}else{
		return str;
	}
 }

 //对数据的null进行限制
 function strIsNull(str){
 	if(str==null||str==""){
		return "";
	}else{
		return str;
	}
 }
