require(["domReady!","wadeMobile","util"], function(doc,WadeMobile) {
	var iscroll=new iScroll("content");
	$("#scan").tap(function() {
		WadeMobile.scanQrCode(function(result){
			$("#result").html(result);
			$("#result").removeClass("e_placeholder");
		});
	});
	$("#create").tap(function(){
		var str=$("#info").html();
		WadeMobile.createQrCode(function(base64){
			$("#img").html("<img src=\"data:image/jpeg;base64,"+base64+"\" >");
			doc.getElementById("resultContent").style.display="";
			iscroll.refresh();
		},str);
	});
});