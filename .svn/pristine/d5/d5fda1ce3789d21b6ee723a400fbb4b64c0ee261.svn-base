require(["domReady!","mobile","wadeMobile","util"], function(doc,Mobile,WadeMobile) {
	var type=$("#type").val();
	var fileName=$("#fileName").val();
	
	$("#title").html(fileName);
	WadeMobile.readFile(function(str){
		$("#content").html(str);
	},fileName,type);
	$("#save").tap(function(){
		var content=$("#content").val();
		WadeMobile.writeFile(content,fileName,type);
		Mobile.openPage("file");
	});
});