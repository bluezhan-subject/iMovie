var friends=[];

/**
 * 取得我的好友的基本信息
 * @param appId
 * @param dom
 * @param where
 */
function getMyFriends(appId,dom,where){
	
	ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlmyFriend",cmdCode:"myFriend",
        urlDatas:[],paramDatas:[where]},
        function(data){
        	
           var str="";
           if(isNotNull(data["outputMap"]["data"])){
           	var arr=data["outputMap"]["data"];
           
        	var obj=ctCache.readWebData("selectedfriends")!=''?JSON.parse(ctCache.readWebData("selectedfriends")):null;
            
         	  
           	for(var i=0;i<arr.length;i++){
          //avatar 头像
       		str="<li>"+
				   "<dl class='clearfix'>"+
			   "<dt class='search-key-img'>"+
			   "<img src='images/2312.jpg'>"+
			   "</dt>"+ 
			   "<dd class='search-key-title'>"+
			   "<p>"+arr[i]['user_name']+"</p>"+
		       "</dd>"+
	           "</dl>"+
	           "<input type='hidden' value='"+JSON.stringify({'user_id':arr[i]["user_id"],'user_name':arr[i]["user_name"],'avatar':arr[i]["avatar"]})+"'/>"+
               "</li>";
           
               if(obj!=null){
            	   for(var j=0;j<obj.length;j++){	
                 		 var one=JSON.parse(obj[j]);
                 		  if(one["user_id"]==arr[i]["user_id"]){
      						  str = "<li>" + "<dl class='clearfix btnOk'>"
      								+ "<dt class='search-key-img'>"
      								+ "<img src='images/2312.jpg'>" + "</dt>"
      								+ "<dd class='search-key-title'>" + "<p>"
      								+ arr[i]['user_name'] + "</p>" + "</dd>"
      								+ "</dl>" + "<input type='hidden' value='"
      								+ JSON.stringify({
      									'user_id' : arr[i]["user_id"],
      									'user_name' : arr[i]["user_name"],
      									'avatar' : arr[i]["avatar"]
      								}) + "'/>" + "</li>";
                    
                 		  }
                 	   }
               }
           	   
           		
           		$(dom).append(str);
           	}
           	
           	/* 点击选择 */
            $(dom).children("li").on('click',function(){
            	var class_name=$(this).find('dl').attr("class");
            	var input=$(this).children("input").val();
            	 if(class_name=="clearfix btnOk"){
            		 $(this).find('dl').removeClass("btnOk");
            	 }else{
            		 friends.push(input);
            		 $(this).find('dl').addClass("btnOk").end();//siblings('li').find('dl').removeClass("btnOk");
            	 }
            	 
            	
            });
            
//            ctCache.saveWebData("shareFriends", {"friends":friends});//设置缓存
//            alert(friends);
            
           }else{
           	$(dom).parent().hide();//把这个div隐藏
           }
         },function(status,error){
           	
           });
}




