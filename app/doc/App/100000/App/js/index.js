require.config({
    baseUrl: "../../js/",
    paths : {
       "jquery" : "lib/jquery203",
       "loadCss" : "lib/loadCss",
       "ctsdk" : "lib/ctsdk"
     },
     shim : { 

     }
});

 require(["jquery","ctsdk"],function ($,ctsdk){
   
   $("#menu div").on("click",function(){
     ctTransfer.openApp("100001","clientInit",{},"品牌汇");
   });  
   


          
 });
