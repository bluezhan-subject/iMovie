//活动
function getEventInfo(appId,appReverId,dom,where){
	
	 ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlEvent",cmdCode:"event",
         urlDatas:[],paramDatas:[where]},
         function(data){
        
            var str="";
            if(isNotNull(data["outputMap"]["data"])){
            	var arr=data["outputMap"]["data"];
            
            	var service_url=ctCache.readWebData("service_url");
            	
            	 
            	for(var i=0;i<arr.length;i++){
            		 var img=service_url+(max_img?arr[i]["event_img_url"]:arr[i]["event_img_url_min"]);//得到绝对地址
                	 
            		str='<li>'+
            		     '<input type="hidden" value="'+arr[i]["event_id"]+'"/>'+
						'<div class="templet-list-div">'+
					    '<div class="templet-list-img"><img src="'+img+'"></div>'+
					    '<div class="hot-activity">'+
						'<div>'+
						'<p>'+arr[i]["event_name"]+'</p>'+
						'</div>'+
						'<div>'+
						'<p>'+getSubStrDate(arr[i]["event_end_time"])+'</p>'+
						'</div>'+
					    '</div>'+
				        '</div>'+
			            '</li>';
            		
            		$(dom).append(str);
            	}
            	
            	eventInfoDetailClick(appReverId,dom);
            }else{
            	$(dom).parent().hide();//把这个div隐藏
            }
          },function(status,error){
            	
            });
            
}


//跳转页面
function eventInfoDetailClick(appReverId,dom){
	$(dom).children("li").click(function(){
		var param={};
		param.event_id=$(this).children("input").val();
		ctTransfer.openApp(appReverId,"clientInit",JSON.stringify(param),"活动详情");
	});
	

}
