

 onloading( 1 , 5 );


function onloading( currentCount , maxmumCount ){
  //alert("current-==>"+currentCount);
  this.currentCount = currentCount ;
  this.maxmumCount = maxmumCount ;

  var _contrast = this.maxmumCount - this.currentCount ;
 // alert(_contrast+"_contrast");
  var _html = '<p><img src="../../../../doc/Images/common/onloading.gif"/></p>';
  var _cardiv = document.createElement("div");
  _cardiv.className="dai_loading";
  _cardiv.innerHTML = _html ; 
 // document.body.appendChild(_cardiv);
ctAlertView.showProgress("加载中...");


  var height = $(window).height();
  $(".dai_loading").css("line-height",height+"px");
  $(".dai_loading").bind("touchmove",function(){ return false; });

  if ( _contrast == 0 ) {
     // $(".dai_loading").css("display","none");
	 // $(".dai_loading").hide();
	 ctAlertView.dismissProgress();


  };

  return this.currentCount + 1 ;

};

