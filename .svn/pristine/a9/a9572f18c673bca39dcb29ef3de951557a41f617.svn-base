require([ "domReady!", "wmWebUI","jcl" ], function(doc,WmWebUI,$) {
	$("#prev").tap(function() {
		var slider01 = WmWebUI.select("TestSlider01");
		slider01.prev();
	});
	$("#next").tap(function() {
		var slider01 = WmWebUI.select("TestSlider01");
		slider01.next();
	});
	$("#play").tap(function() {
		var slider01 = WmWebUI.select("TestSlider01");
		var that = $(this);
		if(slider01.isPlaying()){
			slider01.stop();
			that.html("开始自动播放");
		}else{
			slider01.setDuration(2000);
			slider01.play();
			that.html("停止自动播放")
		}
	});
	new IScroll("#content",{tap:true,scrollbars: true});
});