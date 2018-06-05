require(["domReady!","mobile","util"], function(doc,Mobile) {
	var level = $("#level").val();
	var param = Wade.DataMap();
	param.put("LEVEL", parseInt(level) + 1);
	
	$("#openWindow").tap(function() {
		Mobile.openWindow("UI-CustomWindow", param, function(result) {
			alert(result);
		});
	});
	
	$("#return").tap(function() {
		alert("关闭第"+level+"层窗口");
		Mobile.closeWindow($("#result").val());
	});
	
	$("#cancel").tap(function() {
		alert("关闭第"+level+"层窗口");
		Mobile.closeWindow();
	});
});