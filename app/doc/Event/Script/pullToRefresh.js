/**
 * Filename    :   pullToRefresh.js
 * Description :   下拉刷新和上拉加载
 * Version     :   1.2.5 (2014-3-28) 
 * Author      :   詹代俊(Diajoon)
 *
 * 调用:


  使用 

      new  init("wrapper",{    // wrapper 为ID

              //  pullDown: true,            // 是否下拉刷新
              //  pullUp: true,              // 是否上拉加载
              
              // pullDownActionFun: function (e) { },  //下拉刷新触发的函数
              // pullUpActionFun: function (e) { }     //上拉加载触发的函数

           });
*/





 var  myScroll,　dai_nomore  = true ,
      pullDownEl, pullDownOffset,
      pullUpEl, pullUpOffset ;
      
   var  shareType = false ;


   function init(el,options){
         
    var that = this,
        i;

     // wrapper: 'wrapper'
     that.wrapper = el ;

     // 默认 options 参数
    that.options = {

      pullDown: false,
      pullUp: false,

      pullDownActionFun: function (e) { },
      pullUpActionFun: function (e) { }

    };
    // 用户自定义 options 参数
    for (i in options) that.options[i] = options[i];  

    //设置开始值

    that.pullDown   =  that.options.pullDown;
    that.pullUp     =  that.options.pullUp;



    // 添加下拉和上拉HTML
    if (that.pullDown) {
      if($("#"+that.wrapper).find("#pullDown").length > 0 ){
      }else{
         var pulldownhtml = '<div id="pullDown"><span class="pullDownIcon"></span><span class="pullDownLabel">下拉刷新...</span></div>';
        $($("#"+that.wrapper).children()).prepend(pulldownhtml);
      };
    };
    if (that.pullUp) {
      if($("#"+that.wrapper).find("#pullUp").length > 0 ){
      }else{
      var pulluphtml = '<div id="pullUp"><span class="pullUpIcon"></span><span class="pullUpLabel">上拉加载...</span></div>';
      $($("#"+that.wrapper).children()).append(pulluphtml);
     };
    };
    // 添加CSS样式
   //  loadCss.load('../../../Event/css/pull-to-refresh.css');

       // pullDownAction
    function pullDownAction () {
       dai_nomore = true ;
       that.options.pullDownActionFun();
       myScroll.refresh();  
    }
     // pullUpAction
    function pullUpAction () {
      that.options.pullUpActionFun();
      myScroll.refresh();  
    }

    function loaded() {
         
       // new iScroll('share-type-wrapper'); 
        if ( shareType ) {
          new iScroll('share-type-wrapper'); 
        };
       // addScroll();         

        if (that.pullDown) {
          pullDownEl = document.getElementById('pullDown');
          pullDownOffset = pullDownEl.offsetHeight;
        }else{
          pullDownOffset = 0 ;
        };

        if (that.pullUp) {
          pullUpEl = document.getElementById('pullUp'); 
          pullUpOffset = pullUpEl.offsetHeight;
        };

        myScroll = new iScroll(that.wrapper, {
          useTransition: true,

         // topOffset: pullDownOffset,

          onRefresh: function () {
            if (that.pullDown) {
                if (pullDownEl.className.match('loading') ) {
                  pullDownEl.className = '';
                  pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                };
            };
            if (that.pullUp) {
                 if (pullUpEl.className.match('loading') ) {
                  pullUpEl.className = '';
                  pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载...';
                }
            };

          },

          onScrollMove: function () {
           if (that.pullDown) {
              if (this.y > 65 && !pullDownEl.className.match('flip')) {
                pullDownEl.className = 'flip';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '松开刷新...';
                this.minScrollY = 0;
              } else if (this.y < 65 && pullDownEl.className.match('flip')) {
                pullDownEl.className = '';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '下拉刷新...';
                this.minScrollY = 0;
              };
            };
           if (that.pullUp && dai_nomore ) {
               if (this.y < (this.maxScrollY - 65) && !pullUpEl.className.match('flip')) {
                pullUpEl.className = 'flip';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '松开加载...';
                this.maxScrollY = this.maxScrollY;
              } else if (this.y > (this.maxScrollY + 65) && pullUpEl.className.match('flip')) {
                pullUpEl.className = '';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '上拉加载...';
                this.maxScrollY = this.maxScrollY;
              };
            };
          },

          onScrollEnd: function () {
            if (that.pullDown) {
              if (pullDownEl.className.match('flip')) {
                pullDownEl.className = 'loading';
                pullDownEl.querySelector('.pullDownLabel').innerHTML = '加载中...';        
                pullDownAction(); 
              };
            };
            if (that.pullUp) {
               if (pullUpEl.className.match('flip')) {
                pullUpEl.className = 'loading';
                pullUpEl.querySelector('.pullUpLabel').innerHTML = '加载中...';        
                pullUpAction(); 
              };
            };

          }
        });
     };

   
      loaded(); 

    //  refreshScroll = function (){
    //    myScroll.refresh();
    //    myScroll.scrollTo(0,0);
    //  } ;


    };
    // 传入
     function refreshScroll(){
       setTimeout(function(){myScroll.refresh();},0); 
    };
     function destroyScroll(){
       myScroll.destroy();
    };
     function scrollToStart(){
        myScroll.scrollTo(0,0);
    };


    function addScroll( ){

        shareType = true ;

    };


    // 没有更多的时候所调用的函数
    function setNotMore(){

       dai_nomore = false ;

       //pullUpEl.className = '111';
      // pullUpEl.querySelector('.pullUpLabel').innerHTML = '没有更多...';  



    };





