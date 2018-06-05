require(["domReady!","wadeMobile","mobile","util"],function(doc,WadeMobile,Mobile){
	/*日期格式化*/
	Date.prototype.format = function(format) {
		var o = {
			"M+" : this.getMonth() + 1, // month
			"d+" : this.getDate(), // day
			"h+" : this.getHours(), // hour
			"m+" : this.getMinutes(), // minute
			"s+" : this.getSeconds(), // second
			"q+" : Math.floor((this.getMonth() + 3) / 3), // quarter
			"S" : this.getMilliseconds()
		}

		if (/(y+)/.test(format)) {
			format = format.replace(RegExp.$1,
					(this.getFullYear() + "")
							.substr(4 - RegExp.$1.length));
		}

		for ( var k in o) {
			if (new RegExp("(" + k + ")").test(format)) {
				format = format.replace(RegExp.$1,
						RegExp.$1.length == 1 ? o[k] : ("00" + o[k])
								.substr(("" + o[k]).length));
			}
		}
		return format;
	}
	
	var iscroll = new iScroll("content");
	
	/*接受信息的处理方法*/
	window.receiveMessage = function(msg){
		var html = 
		'<div class="u">' +
		'<div class="head"><img src="biz/temp/female.png" alt="" /></div>' +
		'<div class="dialog">' +
		'	<div class="info">'+$("#receiver").val()+'['+new Date().format("yyyy-MM-dd hh:mm:ss")+']</div>' +
		'	<div class="content">' + msg
		'	</div>' +
		'</div>' +
		'</div>';
		$(".c_chat").append(html);
		iscroll.refresh();
	};
	
	/*发送信息*/
	$("#send").tap(function(){
		WadeMobile.sendText($("#receiver").val(),$("#msg").val(),function(msg){
			/*回调方法后续补充*/
			var html = 
				'<div class="i">' +
				'<div class="head"><img src="biz/temp/male.png" alt="" /></div>' +
				'	<div class="dialog">' +
				'		<div class="info">'+$("#receiver").val()+'['+new Date().format("yyyy-MM-dd hh:mm:ss")+']</div>' +
				'		<div class="content">' + $("#msg").val()
				'		</div>' +
				'	</div>' +
				'</div>';
			$(".c_chat").append(html);
			$("#msg").val("");
			iscroll.refresh();
		});
	});
	
	WadeMobile.setCallbackForPush("receiveMessage");
});