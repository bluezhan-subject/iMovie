/**
 * 广东凯通移动开发平台
 * http://www.gdcattsoft.com
 * Created by fan frank on 2013-09-01.
 * Copyright 2013年 gdcattsoft.com. All rights reserved.
 */

/**
 * 状态码
 */
var ctStatusCode = {
    ConnectionError:1100, // 网络请求错误
    OK:1101, // 接口调用成功
    ClassNotfound:1102, // 调用对象不存在
    MethodNotFound:1103, // 调用方法不存在
    IllegalArgument:1104, // 参数不合法
    IOException:1105, // IO异常
    JsonException:1106 // JSON解析异常
};

/**
 * 函数返回类型
 */
var ctBackType = {
    Normal:0,
    CallFun:1
};
/**
 * 登录状态类型
 */
var ctLoginStatus = {
    Fail:0,
    Success:1,
    Checking:2
};
/**
 * 菜单显示位置
 */
var ctMenuAlign = {
    Center:0,
    Left:1,
    Right:2
};
/**
 * 聊天类型
 */
var ctChatType = {
    SingleChat:1,
    GroupChat:2
};


/*======================================================源生代码回调函数处理======================================================*/
var callbacks = {};
var nativeCallbackId = 1;
var nativeCallbackNmae = "nativeCallback";
/**
 * 统一处理源生代码回调处理

function nativeCallback(callbackId, status, args, keepCallback) {
    var callback = callbacks[callbackId];
    if (callback) {    
	    if (status == ctStatusCode.OK) {
	        callback.success && callback.success.apply(null, args);
	    }
	    else {
	    	 callback.fail && callback.fail.apply(null, args);
	    }
	    
	    // 是否保留回调函数在回调函数数组中
	    if (!keepCallback) {
	        delete callbacks[callbackId];
	    }
    }
}
 */
/*======================================================接口调用对象和方法======================================================*/
var ctFloatWindow = {
    className:"FloatWindow",
    showFloatView:function(appId, initFun, initParam, width, height) {
        ctsCmd.execVoidCmd(this.className, "showFloatView", JSON.stringify([appId, initFun, initParam, width, height]));
    },
    closeFloatView:function(fun, param) {
        ctsCmd.execVoidCmd(this.className, "closeFloatView", JSON.stringify([fun, param]));
    },
    callMainPageJS:function(fun, param) {
        ctsCmd.execVoidCmd(this.className, "callMainPageJS", JSON.stringify([fun, param]));
    },
    callFloatPageJS:function(fun, param) {
        ctsCmd.execVoidCmd(this.className, "callFloatPageJS", JSON.stringify([fun, param]));
    },
    callDouPageJS:function(fun, param) {
        ctsCmd.execVoidCmd(this.className, "callDouPageJS", JSON.stringify([fun, param]));
    }
};
var ctTransfer = {
    className:"Transfer",
    openApp:function(appId, initFun, initParam, title) {
        ctsCmd.execVoidCmd(this.className, "openApp", JSON.stringify([appId, initFun, initParam, title]));
    },
    openUrl:function(url, title) {
        ctsCmd.execVoidCmd(this.className, "openUrl", JSON.stringify([url, title]));
    },
    returnBack:function(type, param) {
        param = param || {};
        ctsCmd.execVoidCmd(this.className, "returnBack", JSON.stringify([type, param]));
    },
    logout:function() {
        ctsCmd.execVoidCmd(this.className, "logout", "[]");
    },
    appExit:function() {
        ctsCmd.execVoidCmd(this.className, "appExit", "[]");
    },
    openShareApp:function(action, key, value, downloadUrl) {
        return ctsCmd.execCmd(this.className, "openShareApp", JSON.stringify([action, key, value, downloadUrl]));
    },
    loginCheckIn:function(appId, initFun, initParam) {
        ctsCmd.execVoidCmd(this.className, "loginCheckIn", JSON.stringify([appId, initFun, initParam]));
    },
    loginStatus:function(status) {
        ctsCmd.execVoidCmd(this.className, "loginStatus", JSON.stringify([status]));
    }
};
var ctNaviBar = {
    className:"NaviBar",
    showNaviMenu:function(callback,jData,menuOption) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showNaviMenu", JSON.stringify([jData,menuOption]),callbackId);
    },
    setCaption:function(jData) {
        ctsCmd.execVoidCmd(this.className, "setCaption", JSON.stringify([jData]));
    },
    setUserIconBadge:function(number) {
        ctsCmd.execVoidCmd(this.className, "setUserIconBadge", JSON.stringify([number]));
    }
};
var ctToolBar = {
    className:"ToolBar",
    setToolBar:function(jData) {
        ctsCmd.execVoidCmd(this.className, "setToolBar", JSON.stringify([jData]));
    },
    setToolBtn:function(btnTag,jData) {
        ctsCmd.execVoidCmd(this.className, "setToolBtn", JSON.stringify([btnTag,jData]));
    },
    setToolBadge:function(btnTag, number) {
        ctsCmd.execVoidCmd(this.className, "setToolBadge", JSON.stringify([btnTag, number]));
    },
    setHomeToolBadge:function(index, number) {
        ctsCmd.execVoidCmd(this.className, "setHomeToolBadge", JSON.stringify([index, number]));
    }
};
var ctCustomBar = {
    className:"CustomBar",
    setCustomBar:function(jData) {
        ctsCmd.execVoidCmd(this.className, "setCustomBar", JSON.stringify([jData]));
    }
};
var ctAlertView = {
    className:"AlertView",
    buildDialog:function(title, message, btnTitles, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "buildDialog", JSON.stringify([title, message, btnTitles]), callbackId);
    },
    showToast:function(msg,duration) {
        ctsCmd.execVoidCmd(this.className, "showToast", JSON.stringify([msg,duration]));
    },
    showProgress:function(msg) {
        ctsCmd.execVoidCmd(this.className, "showProgress", JSON.stringify([msg]));
    },
    dismissProgress:function() {
        ctsCmd.execVoidCmd(this.className, "dismissProgress", "[]");
    }
};
var ctChoiceDialog = {
    className:"ChoiceDialog",
    showSingleDialog:function(jData, selected, addEmptyRow, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showSingleDialog", JSON.stringify([jData, selected, addEmptyRow]), callbackId);
    },
    showSingleDialogWithKey:function(jData, selected, addEmptyRow, idKey, valueKey, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showSingleDialogWithKey", JSON.stringify([jData, selected, addEmptyRow, idKey, valueKey]), callbackId);
    },
    showDBSingleDialog:function(dbName, tableName, field, condition, selected, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showDBSingleDialog", JSON.stringify([dbName, tableName, field, condition, selected]), callbackId);
    },
    showMultiDialog:function(jData, selected, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showMultiDialog", JSON.stringify([jData, selected]), callbackId);
    },
    showSingleTree:function(jData, selected, expand, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showSingleTree", JSON.stringify([jData, selected, expand]), callbackId);
    },
    showDBSingleTree:function(dbName, tableName, field, condition, parentId, parentCondition, selected, expand, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showDBSingleTree", JSON.stringify([dbName, tableName, field, condition, parentId, parentCondition, selected, expand]), callbackId);
    },
    showDatetime:function(selected, dateType, formatType, cancelName, elemId, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showDatetime", JSON.stringify([selected, dateType, formatType, cancelName, elemId]), callbackId);
    },
    showMenuButton:function(jData, bgImg, showCancelBtn, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "showMenuButton", JSON.stringify([jData, bgImg, showCancelBtn]), callbackId);
    }
};

var ctCache = {
    className:"Cache",
    saveWebData:function(key, value) {
        return ctsCmd.execCmd(this.className, "saveWebData", JSON.stringify([key, value]));
    },
    readWebData:function(key) {
        return JSON.parse(ctsCmd.execCmd(this.className, "readWebData", JSON.stringify([key])));
    },
    clearWebCache:function(key) {
        return ctsCmd.execCmd(this.className, "clearWebCache", JSON.stringify([key]));
    },
    clearAllWebCache:function() {
        return ctsCmd.execCmd(this.className, "clearAllWebCache", "[]");
    },
    saveDataToRam:function(key, value) {
        ctsCmd.execVoidCmd(this.className, "saveDataToRam", JSON.stringify([key, value]));
    },
    readDataFromRam:function(key) {
        return JSON.parse(ctsCmd.execCmd(this.className, "readDataFromRam", JSON.stringify([key])));
    },
    getCacheImageWithUrl:function(imgUrl, saveFolder, otherInfo, updateTime, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "getCacheImageWithUrl", JSON.stringify([imgUrl, saveFolder, otherInfo, updateTime]), callbackId);
    },
    clearFolderCache:function(saveFolder) {
        return ctsCmd.execCmd(this.className, "clearFolderCache", JSON.stringify([saveFolder]));
    }
};
var ctFile = {
    className:"File",
    readFile:function(relativePath) {
        return ctsCmd.execCmd(this.className, "readFile", JSON.stringify([relativePath]));
    },
    deleteFile:function(absolutePath) {
        return ctsCmd.execCmd(this.className, "deleteFile", JSON.stringify([absolutePath]));
    },
    getAllFiles:function(relativePath) {
        return JSON.parse(ctsCmd.execCmd(this.className, "deleteFile", JSON.stringify([relativePath])));
    },
    getAllFolders:function(relativePath) {
        return JSON.parse(ctsCmd.execCmd(this.className, "deleteFile", JSON.stringify([relativePath])));
    },
    openFile:function(absolutePath) {
        ctsCmd.execVoidCmd(this.className, "openFile", JSON.stringify([absolutePath]));
    }
};
var ctStorage = {
    className:"Storage",
    executeSql:function(action, dbName, sql) {
        return JSON.parse(ctsCmd.execCmd(this.className, "executeSql", JSON.stringify([action, dbName, sql])));
    },
    executeEncryptSql:function(appId, tagName, params, dbName) {
        return JSON.parse(ctsCmd.execCmd(this.className, "executeEncryptSql", JSON.stringify([appId, tagName, params, dbName])));
    }
};

var ctConnection = {
    className:"Connection",
	/**
	 * Get方式请求JSON内容；callback(data); failCallback(status,error);
	 */
    doGetRequestJson:function(urlName, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "doGetRequestJson", JSON.stringify([urlName]), callbackId);
    },
	/**
	 * Get方式请求String内容；callback(data); failCallback(status,error);
	 */
    doGetRequestString:function(urlName, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "doGetRequestString", JSON.stringify([urlName]), callbackId);
    },
	/**
	 * POST方式请求JSON内容；callback(data); failCallback(status,error);
	 */
    doPostRequestJson:function(urlName, params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "doPostRequestJson", JSON.stringify([urlName, params]), callbackId);
    },
	/**
	 * POST方式请求String内容；callback(data); failCallback(status,error);
	 */
    doPostRequestString:function(urlName, params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "doPostRequestString", JSON.stringify([urlName, params]), callbackId);
    },
	/**
	 * GET方式请求restful协议接口，返回JSON内容；callback(data); failCallback(status,error);
	 */
    restfulGetRequestJson:function(urlName, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "restfulGetRequestJson", JSON.stringify([urlName]), callbackId);
    },
	/**
	 * GET方式请求restful协议接口，返回String内容；callback(data); failCallback(status,error);
	 */
    restfulGetRequestString:function(urlName, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "restfulGetRequestString", JSON.stringify([urlName]), callbackId);
    },
	/**
	 * POST方式请求restful协议接口，返回JSON内容；callback(data); failCallback(status,error);
	 */
    restfulPostRequestJson:function(urlName, params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "restfulPostRequestJson", JSON.stringify([urlName, params]), callbackId);
    },
	/**
	 * POST方式请求restful协议接口，返回String内容；callback(data); failCallback(status,error);
	 */
    restfulPostRequestString:function(urlName, params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "restfulPostRequestString", JSON.stringify([urlName, params]), callbackId);
    },
	/**
	 * 请求WebService接口；callback(data); failCallback(status,error);
	 */
    requestWebService:function(paramName, nameSpace, params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "requestWebService", JSON.stringify([urlName, params]), callbackId);
    },
	/**
	 * 请求WebService接口；参数使用Zip压缩和base64编码；callback(data); failCallback(status,error);
	 */
    requestZipWebService:function(paramName, nameSpace, params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "requestZipWebService", JSON.stringify([urlName, params]), callbackId);
    },
	/**
	 * 请求旧版能力平台；callback(code,data); failCallback(status,error);
	 */
    requestSpgt:function(params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "requestSpgt", JSON.stringify([params]), callbackId);
    },
	/**
	 * 请求新版能力平台；callback(code,data); failCallback(status,error);
	 */
    requestSpgtVer2:function(params, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "requestSpgtVer2", JSON.stringify([params]), callbackId);
    },
    /**
     * 上传文件
     * @param callback
     * @param filePath
     * @param fileName
     * @param uploadParam
     * @param maxSize
     * @returns
     */
    uploadFile:function(callback,filePath,fileName,uploadParam,maxSize) {
	  	var callbackId = nativeCallbackNmae + nativeCallbackId++;
	  	callbacks[callbackId] = {success:callback, fail:null};
	  	ctsCmd.execVoidCmd(this.className, "uploadFile", JSON.stringify([filePath,fileName,uploadParam,maxSize]), callbackId);
  　　}
};
var ctLocation = {
    className:"Location",
    getCell:function() {
        return JSON.parse(ctsCmd.execCmd(this.className, "getCell", "[]"));
    },
    get23GSignal:function() {
        return JSON.parse(ctsCmd.execCmd(this.className, "get23GSignal", "[]"));
    },
    getLocalCity:function(callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "getLocalCity", "[]",callbackId);
    },
    getBaseAndLocation:function(callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "getBaseAndLocation", "[]", callbackId);
    },
    getLocation:function(engine, resultType, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "getLocation", JSON.stringify([engine, resultType]), callbackId);
    },
    deCodeAddress:function(engine, address, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "deCodeAddress", JSON.stringify([engine, address]), callbackId);
    },
    deCodeLocation:function(engine, lat, lng, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "deCodeLocation", JSON.stringify([engine, lat, lng]), callbackId);
    },
    openMap:function(lat, lng) {
        ctsCmd.execVoidCmd(this.className, "openMap", JSON.stringify([lat, lng]));
    },
    openAnnotationMap:function(zoomLevel, lat, lng, annotationDatas, layerDatas) {
        ctsCmd.execVoidCmd(this.className, "openAnnotationMap", JSON.stringify([zoomLevel, lat, lng, annotationDatas, layerDatas]));
    }
};
var ctNotification = {
    className:"Notification",
    sendMessage:function(message) {
        ctsCmd.execVoidCmd(this.className, "sendMessage", JSON.stringify([message]));
    },
    getMsgServiceStatus:function() {
        ctsCmd.execCmd(this.className, "getMsgServiceStatus", "[]");
    },
    setSessionEvent:function(funName) {
        ctsCmd.execVoidCmd(this.className, "setSessionEvent", JSON.stringify([funName]));
    }
};

// begin
var ctWeather = {
    className:"Weather",
    getTodayWeather:function(city, service, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "getTodayWeather", JSON.stringify([city, service]), callbackId);
    },
    getWeather:function(city, type, startTime, endTime, service, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "getWeather", JSON.stringify([city, type, startTime, endTime, service]), callbackId);
    },
    getAllWeather:function(city, service, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "getAllWeather", JSON.stringify([city, service]), callbackId);
    }
};
var ctStatis = {
className:"Statis",
    startupCount:function() {
        ctsCmd.execVoidCmd(this.className, "startupCount", "[]");
    },
    funUsedCount:function(functionId, operationId) {
        ctsCmd.execVoidCmd(this.className, "funUsedCount", JSON.stringify([functionId, operationId]));
    },
    appUsedTime:function(type) {
        ctsCmd.execVoidCmd(this.className, "appUsedTime", JSON.stringify([type]));
    },
    customEventCount:function(functionId, operationId, eventId, eventInfo) {
        ctsCmd.execVoidCmd(this.className, "customEventCount", JSON.stringify([functionId, operationId, eventId, eventInfo]));
    }
};
var ctTools = {
    className:"Tools",
    addTaskQueue:function(jData) {
        ctsCmd.execVoidCmd(this.className, "addTaskQueue", JSON.stringify([jData]));
    },
    setUserInfo:function(initData) {
        ctsCmd.execVoidCmd(this.className, "setUserInfo", JSON.stringify([initData]));
    },
    sendEmail:function(emails, subject, content, attachmentPaths, callback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "sendEmail", JSON.stringify([emails, subject, content, attachmentPaths]), callbackId);
    },
    makePhoneCall:function(phoneNO) {
        ctsCmd.execVoidCmd(this.className, "makePhoneCall", JSON.stringify([phoneNO]));
    },
    md5:function(content) {
        return ctsCmd.execCmd(this.className, "md5", JSON.stringify([content]));
    },
    getUUID:function() {
        return ctsCmd.execCmd(this.className, "getUUID", "[]");
    },
    unzipData:function(content) {
        return ctsCmd.execCmd(this.className, "unzipData", JSON.stringify([content]));
    }
};
var ctDevices = {
    className:"Devices",
    getDeviceModel:function() {
        return ctsCmd.execCmd(this.className, "getDeviceModel", "[]");
    },
    getDeviceType:function() {
        return ctsCmd.execCmd(this.className, "getDeviceType", "[]");
    },
    getAppVersion:function() {
        return ctsCmd.execCmd(this.className, "getAppVersion", "[]");
    },
    getDeviceId : function(){//得到唯一标识
    	return ctsCmd.execCmd(this.className, "getDeviceId", "[]");
    	}

};
var ctBarcode = {
    className:"Barcode",
    scanBarcode:function(savePath, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "scanBarcode", JSON.stringify([savePath]), callbackId);
    },
    createBarcode:function(content, savePath, callback, failCallback) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:failCallback};
        ctsCmd.execVoidCmd(this.className, "createBarcode", JSON.stringify([content, savePath]), callbackId);
    }
};
// end

// begin
var ctCamera = {
    className:"Camera",
    takePhoto:function(callback, imgName, saveFolder, cacheFolder, minCacheFolder) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "takePhoto", JSON.stringify([imgName, saveFolder, cacheFolder, minCacheFolder]), callbackId);
    },
    takePhotoWithEdit:function(callback, imgName, saveFolder, cacheFolder, minCacheFolder) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "takePhotoWithEdit", JSON.stringify([imgName, saveFolder, cacheFolder, minCacheFolder]), callbackId);
    },
    lookPhoto:function(imgs, defIndex) {
        ctsCmd.execVoidCmd(this.className, "lookPhoto", JSON.stringify([imgs, defIndex]));
    },
    lookFolderPhoto:function(folder) {
        ctsCmd.execVoidCmd(this.className, "lookFolderPhoto", JSON.stringify([folder]));
    },
    lookCachePhoto:function(imgs, minFolder, maxFolder, defIndex) {
        ctsCmd.execVoidCmd(this.className, "lookCachePhoto", JSON.stringify([imgs, minFolder, maxFolder, defIndex]));
    },
    takeTypePhoto:function(callback, folder, flag) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "takeTypePhoto", JSON.stringify([folder, flag]), callbackId);
    },
    findTypePhoto:function(folder) {
        return ctsCmd.execCmd(this.className, "findTypePhoto", JSON.stringify([folder]));
    },
    delTypePictures:function(folder, imgs) {
        return ctsCmd.execCmd(this.className, "delTypePictures", JSON.stringify([folder, imgs]));
    },
    updateTypePhoto:function(folder, img) {
        return ctsCmd.execCmd(this.className, "updateTypePhoto", JSON.stringify([folder, imgs]));
    },
    takeLibraryPhoto:function(callback, path, cacheFolder, minCacheFolder) {
	  	var callbackId = nativeCallbackNmae + nativeCallbackId++;
		callbacks[callbackId] = {success:callback, fail:null};
		ctsCmd.execVoidCmd(this.className, "takeLibraryPhoto", JSON.stringify([path, cacheFolder, minCacheFolder]), callbackId);
  　},
 takeLibraryPhotoWithEdit:function(callback, path, cacheFolder, minCacheFolder) {
	  	var callbackId = nativeCallbackNmae + nativeCallbackId++;
		callbacks[callbackId] = {success:callback, fail:null};
		ctsCmd.execVoidCmd(this.className, "takeLibraryPhotoWithEdit", JSON.stringify([path, cacheFolder, minCacheFolder]), callbackId);
  　}
};  
var ctChat = {
    className:"Chat",		
    showChat:function(type, chatId, name, faceFolder, faceHost) {
        ctsCmd.execVoidCmd(this.className, "showChat", JSON.stringify([type, chatId, name, faceFolder, faceHost]));
    }
};
var ctChart = {
    className:"Chart",
    showTrend:function(datas, height, isTop) {
        ctsCmd.execVoidCmd(this.className, "showTrend", JSON.stringify([datas, height, isTop, true]));
		//ctsCmd.execVoidCmd(this.className, "showTrend", JSON.stringify([datas, height]));
    },
    openSignatureDraw:function(callback, saveFolder, minFolder) {
        var callbackId = nativeCallbackNmae + nativeCallbackId++;
        callbacks[callbackId] = {success:callback, fail:null};
        ctsCmd.execVoidCmd(this.className, "openSignatureDraw", JSON.stringify([saveFolder, minFolder]), callbackId);
    }
};
var ctPrinter = {
    className:"Printer",
    connectPrinter:function() {
        ctsCmd.execVoidCmd(this.className, "connectPrinter", "[]");
    },
    printWebContent:function(height) {
        ctsCmd.execVoidCmd(this.className, "printWebContent", JSON.stringify([height]));
    },
    printImage:function(imgPath) {
        ctsCmd.execVoidCmd(this.className, "printImage", JSON.stringify([imgPath]));
    },
    printText:function(text) {
        ctsCmd.execVoidCmd(this.className, "printText", JSON.stringify([text]));
    },
    printBarcode:function(text) {
        ctsCmd.execVoidCmd(this.className, "printBarcode", JSON.stringify([text]));
    }
};
// end


var ctextend = {
	    className:"extend",
	    get:function(savePath, callback,failCallback) {
	        var callbackId = nativeCallbackNmae + nativeCallbackId++;
	        callbacks[callbackId] = {success:callback, fail:failCallback};
	        ctsCmd.execVoidCmd(this.className, "getmethods", JSON.stringify([savePath]), callbackId);
	    },
		getreturn:function(key, value, action) {
			return ctsCmd.execCmd(this.className, "getreturn", JSON.stringify([key, value, action]));
		},
	    geterror:function(key, value, action) {
			 ctsCmd.execVoidCmd(this.className, "toerror", JSON.stringify([]));
		},
		getXmlOptionJson:function(xmlname){
			return ctsCmd.execCmd(this.className, "getXmlOptionJson", JSON
					.stringify([xmlname]));
		}
	};
