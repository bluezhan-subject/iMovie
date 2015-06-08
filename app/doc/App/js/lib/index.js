require.config({
    baseUrl: "../../defind/",
    paths: {
      "jquery": "jquery-1.10.1.min",
      "idangerous" : "idangerous.swiper",
      "loadCss" : "loadCss"
     },
     shim : { 
        'idangerous': {
             exports: 'idangerous'
         }
     }
});

require(["jquery","idangerous"], function ($,idangerous){

    $(function(){
           var windowheight =  $(window).height() ,
               contentSlideHeight = $(".content-slide > div").height(),
               quantity = Math.ceil(contentSlideHeight/windowheight);

           $(".swiper-container").height(windowheight);
           $(".title-slide > p").height((windowheight-440)/2);    
    
           $(".title-slide , .swiper-slide").height(windowheight);    
        // alert(Number());
        for (var i = 1; i < quantity ; i++) {
          $(".content-slide").after('<div class="swiper-slide"></div>');
         }; 
         var Nav_flag = true;
         $(".content-slide > div").click(function(){
           if (Nav_flag) {
              $(".header").css("top","0"); Nav_flag = false ;
            }else{
               $(".header").css("top","-45px"); Nav_flag = true ;
            };
         });
         
    });
    setTimeout(function(){
      var mySwiper = new Swiper('.swiper-container',{mode: 'vertical'})
    },0);
          
});
