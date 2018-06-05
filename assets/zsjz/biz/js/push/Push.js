require(["domReady!","wadeMobile","mobile","util"],function(doc,WadeMobile,Mobile){
	var isConnected = false; //是否连接
	/*刷新在线联系人*/
	var refreshOnlineList = function(){
		var loading = '<div class="c_loading"><div class="pic"></div><div class="text">正在加载中，请稍候</div></div>';
		$("#content").html(loading);
		WadeMobile.httpGet(function(data){
			var onlineStaffs = new Wade.DataMap(data).get("SESSION_LRU");
			onlineStaffs = onlineStaffs.split("|");
			
			var params = new Wade.DatasetList();
			var param;
			for(var i=0;i<onlineStaffs.length;i++){
				param = new Wade.DataMap();
				if(onlineStaffs[i]!=""){
					param.put("ACCOUNT",onlineStaffs[i]);
					params.add(param);
				}
			}
			param = new Wade.DataMap();
			param.put("ONLINE_STAFFS",params);
			Mobile.getTemplate("OnlineList",param.toString(),function(html){
				$("#content").html(html);
				new iScroll("content");
				$("#refresh").tap(function(){
					refreshOnlineList();
				});
			});
		},"http://114.215.100.48:8080/push/mobiledata?action=getLRUSession",true);
//		},"http://192.168.51.155:8080/push/mobiledata?action=getLRUSession",true);
	}
	/*进入界面先销毁链接,防止离开此界面时没有断开*/
	WadeMobile.unregisterForPush(function(){
		refreshOnlineList();//刷新在线人员列表
	});
	
	$("#register").tap(function(){
		if($("#register").html()=="连接"){
			if(!$("#account").val()){
				WadeMobile.tip("请输入一个昵称,让小伙伴认识你~");
				return;
			}
			WadeMobile.registerForPush($("#account").val(),function(msg){
				WadeMobile.tip($("#account").val() + msg);
				$("#register").html("注销");
				
				refreshOnlineList();//刷新在线人员列表
				isConnected = true;
			},function(msg){
				WadeMobile.tip(msg);
			});
		}else{
			WadeMobile.unregisterForPush(function(){
				WadeMobile.tip("注销成功");
				refreshOnlineList();//刷新在线人员列表
			});
			$("#register").html("连接");
			$("#account").val("");
			isConnected = false;
		}
	});
	
	window.chatByAccount = function(account){
		if(!isConnected){
			WadeMobile.tip("请先输入昵称让小伙伴找到你!然后【连接】");
			return;
		}
		var param = new Wade.DataMap();
		param.put("OWN_ACCOUNT",$("#account").val());
		param.put("OTHER_ACCOUNT",account);
		Mobile.openTemplate("Chat",param);
	}
});