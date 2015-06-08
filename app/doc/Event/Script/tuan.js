//团购 
function getTuanInfo(appId,appReverId,dom,where){
	
	 ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlTuan",cmdCode:"tuangou",
         urlDatas:[],paramDatas:[where]},
         function(data){
        	
            var str="";
            if(isNotNull(data["outputMap"]["data"])){
            	var arr=data["outputMap"]["data"];
            	for(var i=0;i<arr.length;i++){
            		str='<li  class="clearfix">'+
            		    '<input type="hidden" value="'+arr[i]["deal_id"]+'"/>'+
						'<div class="templet-list-div">'+
					    '<div class="templet-list-img"><img src="'+arr[i]["image_url"]+'"></div>'+
				        '<div class="hot-groupon">'+
						'<div>'+
						'<p>'+arr[i]["title"]+'</p>'+
						'</div>'+
						'<div>'+
						'<p>￥'+arr[i]["current_price"]+'</p>'+
					    '<p>'+arr[i]["list_price"]+'</p>'+
						'</div>'+
					    '</div>'+
				        '</div>'+
			            '</li>';
            		$(dom).append(str);
            	}
            	tuanInfoDetailClick(appReverId,dom);
            }else{
            	$(dom).parent().hide();//把这个div隐藏
            }
          },function(status,error){
            	
            });
            
}

//跳转页面
function tuanInfoDetailClick(appReverId,dom){
	$(dom).children("li").click(function(){
		var param={};
		param.deal_id=$(this).children("input").val();
		ctTransfer.openApp(appReverId,"clientInit",JSON.stringify(param),"团购详情");
	});

}
