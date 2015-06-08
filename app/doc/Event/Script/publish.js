function insertTopic(param){
	
	ctConnection.requestSpgtVer2({appid:appId,tagName:"xmlTopic",cmdCode:"topic",
        urlDatas:[],paramDatas:[where]},
        function(data){
        },
        function(status,error){

        }
    ) ;
	
}