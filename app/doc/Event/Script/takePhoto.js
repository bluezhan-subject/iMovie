/**
 * 拍照功能
 * 调用: takePhoto.init();
*/

	var myScroll;
    function init(){
    	
    	var tpl = '<div class="photo-box">'
    			 +'<div id="header"></div>'
				 +'	<div id="wrapper">'
				 +'		<div id="scroller">'
				 +'			<ul id="thelist">'
			//	 +'				<li><img src="images/123.jpg"/></li>'
				 +'				<li class="add"><img src="../../../Images/common/btn-addPhoto.jpg"/></li>'
				+'			</ul>'
				+'		</div>'
				+'	</div>'
    			 +'</div>'
    			 +'<b class="arrow"></b>';
    			
  

    	$('.share-app').append(tpl);

	 
	    //document.addEventListener('touchmove', function (e) { e.preventDefault(); }, false);
	    document.addEventListener('DOMContentLoaded', setTimeout(function () { loaded(); }, 200), false);
      
	   

   
    }
    
    function loaded() {
        myScroll = new iScroll('wrapper',{
			hScrollbar:false, 
			vScrollbar: false,
			vScroll : false
		});  
    }
    
    
    //上传服务器后
    function uploadService(filePath,PhoneName,phoneUploadName,Circle){
    	var p = '[{"Type":"'+Circle+'","Name":'+PhoneName+',"S_IsMinPhoto":"Y"}]'; //ChatPhoto
		 ctConnection.uploadFile(function(data){
			 if(data.state==1){//上传成功后
				 uploadFileCallback(data,phoneUploadName);
		      }
			 },filePath,PhoneName,p,500);
    }
    
    function getWidthRefresh(){
    	var width = $('#scroller li').length * 100;
    	$('#scroller').css('width',width);
    	myScroll.refresh();	
    }
    /**
     * 显示可选择
     */
    function goshowMenuButton(data,phoneUploadName,Circle) {
    //	var data = "[{'title':'照相','bg':'','txcolor':'red'},{'title':'图库','bg':'','txcolor':'red'}]";
    	ctChoiceDialog.showMenuButton(data, "", true, function(item){
    		if(item=="1"){//照片
    			ctCamera.takePhotoWithEdit(function(filePath, minFilePath){
    				var filePathList =filePath.split('/'); 
    				var PhoneName= filePathList[filePathList.length-1];
    				takePhotoWithEditCallBack(filePath, minFilePath);
    			    uploadService(filePath,PhoneName,phoneUploadName,Circle);		
    			}, "takePhone", "folder", "max", "min");
    			
    		}else{//从库中取照片
    			
    			ctCamera.takeLibraryPhotoWithEdit(function(data){
    				
    				takeLibraryCallBack(data);
    				uploadService(data.path,data.name,phoneUploadName,Circle);
    			},"");
    			
    		}
    	});
    }
    