	require(["domReady!","mobile","jcl","iScroll5",],function(doc, Mobile, $,IScroll) {
		var menus =$("#chartMenus").children("li");
		$.each(menus,function(index,item){
			var action = $(item).children("div").children("div").eq(0).html();
			$(item).tap(function(){
				Mobile.openPage(action);
			});
		});
		new IScroll("#content",{scrollbars:true});
	}); 
