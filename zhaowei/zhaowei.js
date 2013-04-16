// ==UserScript==  
// @name        CMS Auto Choose Files
// @version		 1.1.0
// @author       zhaowei01@baidu.com
// @namespace    https://baidu.com
// @description  cms自动勾选上线文件,svn & scmp
// @include      *://icms.baidu.com:8080/cmscript/fire/id/cms_tplplatform_files/*
// @require	https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js
// ==/UserScript== 

function withjQuery(callback, safe){
	if(typeof(jQuery) == "undefined") {
		var script = document.createElement("script");
		script.type = "text/javascript";
		//script.src = "https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js";
		//script.src = "http://zw.com/jquery-1.8.3.min.js";
		script.src = "http://lib.sinaapp.com/js/jquery/1.7.2/jquery.js";
    //http://lib.sinaapp.com/js/jquery/1.7.2/jquery.js

		if(safe) {
			var cb = document.createElement("script");
			cb.type = "text/javascript";
			cb.textContent = "jQuery.noConflict();(" + callback.toString() + ")(jQuery, window);";
			script.addEventListener('load', function() {
				document.head.appendChild(cb);
			});
		}
		else {
			var dollar = undefined;
			if(typeof($) != "undefined") dollar = $;
			script.addEventListener('load', function() {
				jQuery.noConflict();
				$ = dollar;
				callback(jQuery, window);
			});
		}
		document.head.appendChild(script);
	} else {
		setTimeout(function() {
			//Firefox supports
			callback(jQuery, typeof unsafeWindow === "undefined" ? window : unsafeWindow);
		}, 30);
	}
}

withjQuery(function($, window){
			var _ui = "<textarea style='height:200px;width:400px;' id='_box'>/path/demo.php</textarea><input type='button' value='auto choose file' id='auto-choose-file'/>";
			$(".treeTitle").append(_ui);
      //svn type=1 ,scmp type=2
      var _uptype='';
			$("#auto-choose-file").click(function(){
        var _box_type = $("[name='type']").val();

	    	var box = $("#_box").val().split("\n");
				var _cur_item=1;
				$("#filesTree tr").each(function(trindex,tritem){
          var _trindex_level = $(this).attr('data-id');
          if (_box_type == 2 && _trindex_level == 1) {
            _uptype = '/'+$(this).attr('data-name');
            alert('scmp module');
          }
					$(tritem).find("td").each(function(tdindex,tditem){

						var _select_item_obj = $(tditem).find("label>input");
						var _select_item = '/'+_select_item_obj.val().split("|")[0];

						$.each(box, function(index, callback){
							if (_uptype+$.trim(box[index]).replace(/\\/g, "/") == $.trim(_select_item)) {
								//console.log('find it'+_select_item);
								alert(_cur_item+':'+_select_item);
								_select_item_obj.click();
								_select_item_obj.attr("checked",'true');
								_cur_item++;

							}
						});//end each

					})

				});

			});
}, true);
