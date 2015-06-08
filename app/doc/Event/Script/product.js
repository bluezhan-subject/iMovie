function getProductInfo(appId,appReverId,dom,where){
	
	ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlGood",cmdCode:"gdBase",
        urlDatas:[],paramDatas:[where]},
        function(data){
       	if(isNotNull(data["outputMap"]["data"])){
            	var arr=data["outputMap"]["data"];
            	var str="";
            	
            	
            	for(var i=0;i<arr.length;i++){//product_thumb 缩略图

            		 var service_url=ctCache.readWebData("service_url");
            		 var img=service_url+(max_img?arr[i]["product_image_url"]:arr[i]["product_image_url_min"]);//得到绝对地址
            		 
            		str='<li>'+
     				    '<div>'+
				   	    '<img src="'+img+'">'+
				        '</div>'+
				        ' <div>'+
				   	    '<p>￥'+arr[i]["product_price"]+'</p>'+
				        '</div>'+
				        '<input type="hidden" value="'+arr[i]["product_id"]+'"/>'+
				        '</li>';
            		$(dom).append(str);
            	}
            	
            	productInfoDetailClick(appReverId,dom);
            	
            	
            }else{
            	$(dom).parent().hide();//把这个div隐藏
            }
        },
        function(status,error){

        }
    ) ;
	
}

//点击跳转事件
function productInfoDetailClick(appReverId,dom){
	$(dom).children("li").click(function(){
		var param={};
		param.product_id=$(this).children("input").val();
		ctTransfer.openApp(appReverId,"clientInit",JSON.stringify(param),"产品详情");
	});
	
	
}