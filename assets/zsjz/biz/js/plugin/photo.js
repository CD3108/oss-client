require(["domReady!","wadeMobile","util"], function(doc,WadeMobile) {
	var iscroll = new iScroll("content");
	$("#tack_a_picture").tap(
			function() {
				var width = $("#pic").width();
				var height = $("#pic").height();
				WadeMobile.getPhoto(function(path) {
					$("#path").html("路径：" + path);
					$("#pic").removeClass("e_imagePlaceHolder");
					$("#pic").html("<img height='" + height + "' width='" + width + "' src='" + path + "'/>");
					iscroll.refresh();
					/*WadeMobile.getBase64Picture(function(base64) {
						$("#pic").html("<img height='" + height + "' width='" + width + "' src='" + path + "'/>");
						iscroll.refresh();
					}, url);*/
				}, 1);
			});
	$("#search").tap(function() {
		var width = $("#pic2").width();
		var height = $("#pic2").height();
		// 传入0，返回Base64字符串，传入1，返回图片路径
		WadeMobile.getPicture(function(path) {
			$("#pic2").removeClass("e_imagePlaceHolder");
			$("#pic2").html("<img height='" + height + "' width='" + width + "' src='" + path + "'/>");
			iscroll.refresh();
		}, 1);
	});
});