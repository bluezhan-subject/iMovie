// QQ表情插件


var userAgent = navigator.userAgent.toLowerCase(); 
// Figure out what browser is being used 
jQuery.browser = { 
version: (userAgent.match( /.+(?:rv|it|ra|ie)[\/: ]([\d.]+)/ ) || [])[1], 
safari: /webkit/.test( userAgent ), 
opera: /opera/.test( userAgent ), 
msie: /msie/.test( userAgent ) && !/opera/.test( userAgent ), 
mozilla: /mozilla/.test( userAgent ) && !/(compatible|webkit)/.test( userAgent ) 
}; 




(function($){  
	$.fn.qqFace = function(options){
		
		var defaults = {
			id : 'facebox',
			path : 'face/',
			assign : 'content',
			tip : 'em_'
		};
		var option = $.extend(defaults, options);
		var assign = $('#'+option.assign);
		var id = option.id;
		var path = option.path;
		
		var tip = option.tip;
		
		if(assign.length<=0){
			alert('缺少表情赋值对象。');
			return false;
		}
		
		$(this).click(function(e){
			
			var strFace, labFace;
			if($('#'+id).length<=0){
//				strFace = '<div id="'+id+'" style="position:absolute;margin-left:-10%;display:none;z-index:1000;" class="qqFace">' +
//							  '<table border="0" cellspacing="0" cellpadding="0"><tr>';
//				for(var i=1; i<=75; i++){
//					labFace = '['+tip+i+']';
//					strFace += '<td><img src="'+path+i+'.gif" onclick="$(\'#'+option.assign+'\').setCaret();$(\'#'+option.assign+'\').insertAtCaret(\'' + labFace + '\',\'' + path + '\');" /></td>';
//					if( i % 15 == 0 ) strFace += '</tr><tr>';
//				}
//				strFace += '</tr></table></div>';
				
				strFace = '<div id="'+id+'" style="position:absolute;border-style: solid;-moz-border-radius: 11px;-khtml-border-radius: 11px;-webkit-border-radius: 11px;border-radius: 11px;display:none;z-index:1000;float:left;" class="qqFace">' ;
				         
	                     for(var i=1; i<=75; i++){
		                 labFace = '['+tip+i+']';
		                 strFace += '<img src="'+path+i+'.gif" onclick="$(\'#'+option.assign+'\').setCaret();$(\'#'+option.assign+'\').insertAtCaret(\'' + labFace + '\',\'' + path + '\');" />';
		               // if( i % 15 == 0 ) strFace += '</tr><tr>';
	}
	//strFace += '</tr></table></div>';
		strFace+="</div";		
			}
			$(this).parent().append(strFace);
			var offset = $(this).position();
			var top = offset.top + $(this).outerHeight();
			$('#'+id).css('top',top);
			$('#'+id).css('left',offset.left);
			$('#'+id).show();
			e.stopPropagation();
		});

		$(document).click(function(){
			$('#'+id).hide();
			$('#'+id).remove();
		});
	};

})(jQuery);

jQuery.extend({ 
unselectContents: function(){ 
	if(window.getSelection) 
		window.getSelection().removeAllRanges(); 
	else if(document.selection) 
		document.selection.empty(); 
	} 
}); 
jQuery.fn.extend({ 
	selectContents: function(){ 
		$(this).each(function(i){ 
			var node = this; 
			var selection, range, doc, win; 
			if ((doc = node.ownerDocument) && (win = doc.defaultView) && typeof win.getSelection != 'undefined' && typeof doc.createRange != 'undefined' && (selection = window.getSelection()) && typeof selection.removeAllRanges != 'undefined'){ 
				range = doc.createRange(); 
				range.selectNode(node); 
				if(i == 0){ 
					selection.removeAllRanges(); 
				} 
				selection.addRange(range); 
			} else if (document.body && typeof document.body.createTextRange != 'undefined' && (range = document.body.createTextRange())){ 
				range.moveToElementText(node); 
				range.select(); 
			} 
		}); 
	}, 

	setCaret: function(){ 
		
		if(!($.browser.msie)) return; 
		var initSetCaret = function(){ 
			var textObj = $(this).get(0); 
			textObj.caretPos = document.selection.createRange().duplicate(); 
		}; 
		$(this).click(initSetCaret).select(initSetCaret).keyup(initSetCaret); 
	}, 

	insertAtCaret: function(textFeildValue,path){ 
		//if($("input[type='text']").length>0)$("input[type='text']").remove();
		var textObj = $(this).get(0); 
	//	console.log($(textObj).contents().find("body").html());
		//alert($(textObj).contents().find("body").html());
		if(document.all && textObj.createTextRange && textObj.caretPos){ 
			
			var caretPos=textObj.caretPos; 
			caretPos.text = caretPos.text.charAt(caretPos.text.length-1) == '' ? 
			textFeildValue+'' : textFeildValue; 
		} else if(textObj.setSelectionRange){ 
		
			var rangeStart=textObj.selectionStart; 
			var rangeEnd=textObj.selectionEnd; 
			var tempStr1=textObj.value.substring(0,rangeStart); 
			var tempStr2=textObj.value.substring(rangeEnd); 
			textObj.value=tempStr1+textFeildValue+tempStr2; 
			textObj.focus(); 
			var len=textFeildValue.length; 
			textObj.setSelectionRange(rangeStart+len,rangeStart+len); 
			textObj.blur(); 
		}else{ 
			//textObj.innerHTML+=replace_em(textFeildValue,path); 
			$(textObj).contents().find("body").html($(textObj).contents().find("body").html()+replace_em(textFeildValue,path));
		} 
		
		
		
	}
});