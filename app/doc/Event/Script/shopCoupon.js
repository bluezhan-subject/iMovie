//得到优惠券列表
function  getShopCouponInfo(appId,appRevertId,dom,where ){
	
    ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlshopCoupon",cmdCode:"shopCoupon",
            urlDatas:[],paramDatas:[where]},
        function(data){
         // alert(JSON.stringify(data));
			//alert("优惠券"+data["outputMap"]["data"]);
			currentIndex=currentIndex+1;
			 onloading(currentIndex, maxIndex);
            	if(isNotNull(data["outputMap"]["data"])){
					
					
              var arr=data["outputMap"]["data"];
            
            //  alert(arr.length);
              for(var i=0;i<arr.length;i++){
            	   
            	  var service_url=ctCache.readWebData("service_url");
            	  var img=service_url+(max_img?arr[i]["coupon_url"]:arr[i]["coupon_url_min"]);//得到绝对地址
            	  
            	  var coupon_dl_criteria_val=numberIsNull(arr[i]["coupon_dl_criteria_val"])==0?'免费':numberIsNull(arr[i]["coupon_dl_criteria_val"])+'积分';//积分
            	  var coupon_dl_count=numberIsNull(arr[i]["coupon_dl_count"]);//已下载多少张
            	  
            	  var str='<li>'+
          			      '<div class="coupon-img-msg">'+
   			              '<dl>'+
   					      '<dt class="coupon-img">'+
   						  '<img src="'+img+'">'+
   					      '</dt>'+ 
   					      '<dd class="coupon-msg-title">'+
   					      '<p>'+arr[i]["coupon_name"]+'</p>'+
   					      '<p>'+arr[i]["coupon_word"]+'</p>'+
   				          '</dd>'+
   				          '<dd class="coupon-msg-tag">'+
   					      '<p><span>'+getSubStrDate(arr[i]["coupon_start_date"])+'</span>/<span>'+getSubStrDate(arr[i]["coupon_end_date"])+'</span></p>'+
   				          '</dd>'+
   			              '</dl>'+
   			              '</div>'+
   			              '<div class="coupon-btn">'+
   			              '<div>'+
   				          '<p>'+coupon_dl_criteria_val+'</p>'+
   				          '<p>已下载<br/>'+coupon_dl_count+'张</p>'+
   			              '</div>'+
   			              '</div>'+
   			              '<input type="hidden" value="'+arr[i]["coupon_id"]+'"/>'+
   		                  '</li>';
            	
                  $(dom).append(str);

                   

              }

              if ( appId == "100000" ) {
                // 刷新 iScroll
                  myScroll.refresh();
              };
			 // alert(appId+"appId");
               if ( appId == "700000" ||  appId == "13000001") {
                  // 刷新 iScroll
                  refreshScroll();
              };
              

              liclick(appId,appRevertId,dom);
            	}
            	
        },
        function(status,error){
                    currentIndex=currentIndex+1;
			        onloading(currentIndex, maxIndex);
        }
    ) ;

}




