require(["domReady!","wadeMobile","util"], function(doc,WadeMobile) {
	var audioPath;
	//录音
	$("#record").tap(function(){
		WadeMobile.audioRecord(function(path){
			if(path){
				audioPath = path;
				WadeMobile.tip(audioPath);
				doc.getElementById("hiddenContent").style.display="";
			}else{
				WadeMobile.tip("别气馁，再录一次吧！");
			}
		});
	});
	$("#play").tap(function(){
		WadeMobile.audioPlay(audioPath,true);
	});
	$("#cleanAudioResource").tap(function(){
		WadeMobile.cleanResource(3);
		doc.getElementById("hiddenContent").style.display="none";
	});
});