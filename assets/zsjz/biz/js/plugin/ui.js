require(["domReady!","wadeMobile","mobile","util"], function(doc,WadeMobile,Mobile) {
	new iScroll("content");
	$("#progressBar").tap(function() {
		WadeMobile.loadingStart('加载中……', '进度条');
		// 关闭进度条
		setTimeout(function(){
			WadeMobile.loadingStop();
		}, 2000);
	});
	
	$("#toastLong").tap(function() {
		WadeMobile.tip('我是一条提示信息！', 1);
	});
	
	$("#toastShort").tap(function() {
		WadeMobile.tip('我是一条提示信息！', 0);
	});
	
	$("#date1").tap(function() {
		WadeMobile.getDate(function(time) {
			$("#dateContent1").html(time);
		});
	});
	
	$("#date2").tap(function() {
		WadeMobile.getDate(function(time) {
			$("#dateContent2").html(time);
		}, '2012年12月', 'yyyy年MM月');
	});
	
	$("#customDialog").tap(function() {
		Mobile.openDialog("UI-CustomDialog", null, function(result) {
			alert(result);
		},0.6,0.6);
	});
	
	$("#customWindow").tap(function() {
		var param = Wade.DataMap();
		param.put("LEVEL", 1);
		Mobile.openWindow("UI-CustomWindow", param, function(result) {
			alert(result);
		});
	});
	
	$("#slidingMenu").tap(function() {
		Mobile.openSlidingMenu("UI-SlidingMenu",null,function(result){
			alert(result);
		});
	});
});