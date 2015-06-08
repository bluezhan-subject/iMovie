
'use strict';

define([
    'jquery'
], function ($ ) {
    
    var fun = 1000;
     
    var returnModel = {
         good: "5555",
         fun: function  (argument)
         {
             
             console.log(good)
         },
         /**
          * @el_show: 显示元素
          * @el_hide: 隐藏元素
          */ 
         page_show: function (el_show, el_hide)
         {
             $(el_show).show();
             $(el_hide).hide();
             window.scrollTo(0,0);
         },
         /**
          * 页面的图片的加载
          * 
          */ 
         page_images_loading: function (imgArr)
         {

            var img_arr = imgArr,
                img_total = images_arr.length,
                loaded_count = 0;

            var loading = $("#loading"),
                loading_text = $("#loading_text");

            var do_load = function(url) {
                    var img = new Image();
                    img.onload = function() {
                        ++loaded_count;
                        loading_text.text(parseInt((loaded_count / img_total) * 100) + "%")
                    };

                    img.src = url
                };

            for (var i = 0; i < img_total; ++i) {
                    do_load("images/" + img_arr[i])
                } 

            var check_time = 60;
            var check = function() {
                    if (0 >= check_time) {
                        if (loaded_count / img_total > 0.5) {
                            plush_page()
                        } else {
                            alert("加载图片失败，请返回刷新尝试!")
                        }
                    } else {
                        check_time -= 0.5;
                        if (loaded_count == img_total) {
                            plush_page()
                        } else {
                            setTimeout(check, 500)
                        }
                    }
                };

            var plush_page = function() {};

            return function(cb) {
                    if (typeof(cb) == "function") {
                        plush_page = cb
                    }
                    check();
                }


         },

    // page_images_loading(function() {
    //     loading.hide();
    //     wrapper.show().find(".sec0 > .logo").addClass("breathe");
    //     setTimeout(function() {
    //         wrapper.find(".sec0").css({
    //             "opacity": "0"
    //         })
    //     }, 800);
    //     setTimeout(function() {
    //         wrapper.find(".sec0").css({
    //             "display": "none"
    //         })
    //     }, 1500);
    //     setTimeout(function() {
    //         animation[0].init(), page_drag_init()
    //     }, 2500)
    // })
    
        // 处理图片异步加载
        load_image: function ( image_arr, div_cell ) {

            for (var i = 0; i < image_arr.length; i++) {
                this._go_load_image(image_arr[i], div_cell, i)
            };

        },
        _go_load_image: function  (image_arr, div_cell, i) {
            var img = new Image(); 
                img.src = image_arr;

                if(img.complete) { 
                    $(div_cell).eq( i ).find("img").removeClass("img_loading").attr("src",img.src);
                }else{
                    // 图片加载成功
                    img.onload = function () { 
                        $(div_cell).eq( i ).find("img").removeClass("img_loading").attr("src",img.src);
                    };
                    // 图片加载失败
                    img.onerror = function () { 
                    };
                };
        },

        progress_bar: function ( _mark ){
          //  $(".progress-bar").css("width", mark / allLength * 100 +"%" );
        },
        
        /**
         *  判断是否为空对象
         */ 
         is_empty_object: function (obj)
         {
                for(var n in obj){return false} 
                return true; 
         },

        /***
         *  时间戳转换格式
         */ 
        date_format: function (time,format)
        {
            format = format || 'yyyy-MM-dd';
            var date = new Date(time*1000);
            var week = ['日','一','二','三','四','五','六']

            var o = { 
              "M+" : date.getMonth()+1, // month 
              "d+" : date.getDate(),    // day 
              "h+" : date.getHours(),   // hour 
              "m+" : date.getMinutes(), // minute 
              "s+" : date.getSeconds(), // second 
              "q+" : Math.floor((date.getMonth()+3)/3), // quarter 
              "S"  : date.getMilliseconds(), // millisecond 
              "W"  : week[date.getDay()]   // week
            } 
            
            if(/(y+)/.test(format)) { 
              format = format.replace(RegExp.$1, (date.getFullYear()+"").substr(4 - RegExp.$1.length)); 
            } 
            for(var k in o) { 
              if(new RegExp("("+ k +")").test(format)) { 
                format = format.replace(RegExp.$1, RegExp.$1.length==1 ? o[k] : ("00"+ o[k]).substr((""+ o[k]).length)); 
              } 
            }

            return format;
        },


        /***
         *  把数组的重复元素干掉
         */ 
        unique: function (arr)
        {
                var result = [], hash = {};
                for (var i = 0, elem; (elem = arr[i]) != null; i++) {
                    if (!hash[elem]) {
                        result.push(elem);
                        hash[elem] = true;
                    }
                }
                return hash;
        },
        // @组件：回到顶部
        to_top: function  () {
            
            var html = "<div></div>" 



        }
            


          



     }

    return returnModel;
});






