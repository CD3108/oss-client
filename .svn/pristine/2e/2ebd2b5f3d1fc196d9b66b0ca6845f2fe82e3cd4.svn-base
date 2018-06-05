require(["wmTabbar","common","mobile"], function(WmTabbar,Common,Mobile) {
	Common.get(function(index){
		var wmTabbar = new WmTabbar("tabbar1",index);
		wmTabbar.create();
	},"TABBAR_TCUR_INDEX");
	
	$("#plugin-menu li,#ui-menu li").each(function(index, item) {
		if (item.getAttribute("action") != "null") {
			$(item).tap(function() {
				Mobile.openPage(item.getAttribute("action"));
			});
		} else {
			item.onclick = function() {
				alert("敬请期待……");
			};
		}
	});
});
