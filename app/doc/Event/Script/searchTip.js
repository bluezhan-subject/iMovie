/**
 * 搜索输入提示功能
 * 
 * 使用方法: 在搜索框页面下添加：
 * <div id="search-tip" class="search-list" style="display: none;">
 *   <ul id="tipList"></ul>
 * </div>
 */
require.config({
    baseUrl: "../../../Event/Script/",
    paths: {
      "jquery": "libs/jquery203"
    },
});

define(['jquery'],function($){

    function autoGet(value, rawData){
        if(value == '') {
            closePop();
            if ($("#search-list").length > 0) {
                $("#search-list").css("display", "block");
            };   
        } else {
            // get the return value list from json
            if ($("#search-list").length > 0) {
                $("#search-list").css("display", "none");
            };
            var jsonValue = getListJson(value, rawData).summary;
            autoCallback(jsonValue);
        }
    }

    function autoCallback(list){
        //remove the old pop li
        closePop();
        $("#search-tip").css("display", "block");
        if (list.length > 0) {
          for(var i = 0;i < list.length; i++){
            $("#tipList").addClass("list-tab-view");
            $("#tipList").append("<li>"+"<a href='#'>" + list[i].name + "</a>"+"</li>");
          }
        }
    }

    function closePop(){
        var ul = $("#tipList").children().length;
        for(var i = ul - 1; i >= 0 ; i--) {
            $("#tipList li").eq(i).remove();
        }
        $("#tipList").addClass("borderNull");
        $("#search-tip").css("display", "none");
    }

    // the json test data
    function getListJson(value, rawData) {
        var nameJson = [];
        var patternValue = "^" + value;
        var pattern = new RegExp(patternValue);
        var list = rawData.data;
        alert("db: "+list);
        if (isNotNull(list)) {
          for(var i = 0;i < list.length; i++){
            var str = list[i]["shop_name"].match(pattern);
            if (str) {
                var result = list[i]["shop_name"].match(pattern).input;
                    nameJson[i] = {
                        "name": result
                    };
                }else{
                    nameJson[0] = {
                        "name": "暂没有相关数据"
                    };
                }    
            }
        };
        var summaryJson = {"summary": nameJson};
        alert("match: " + summaryJson);
        return summaryJson;
    }

    return{
        autoGet : autoGet
    };

})
