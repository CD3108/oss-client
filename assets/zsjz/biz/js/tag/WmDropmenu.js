require(["domReady!","wmWebUI","jcl","mobile"],function(doc,WmWebUI,$,Mobile){
	$("#show").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var that = $(this);
		if(dropmenu.invisible()){
			dropmenu.show();
			that.html("关闭菜单");
		}else{
			dropmenu.hidden();
			that.html("显示菜单");
		}
	});
	$("#setLabel").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var str=prompt("请输入菜单名。示例：我的活动");
		if(str == ""){
			str = "默认名称";
		}
		dropmenu.setLabel(str);
	});
	$("#setAction").on("tap", function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var myDate=new Date();
		dropmenu.setOpenAction(function(){
			Mobile.tip("正在打开。事件设置时间："+myDate.toLocaleString());
		});
		dropmenu.setCloseAction(function(){
			Mobile.tip("正在关闭。事件设置时间："+myDate.toLocaleString());
		});
		Mobile.tip("事件设置成功。设置时间："+myDate.toLocaleString());
	});
	$("#cleanAction").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		dropmenu.setOpenAction(function(){
		});
		dropmenu.setCloseAction(function(){
		});
		alert("事件清除成功！");
	});
	$("#setItemAction").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var items=dropmenu.getItems();
		var myDate=new Date();
		if(items.length>0){
			items[0].click(function(){
				alert("我是第一个菜单项，事件设置时间为："+myDate.toLocaleString());
			});
			Mobile.tip("事件设置成功。设置时间："+myDate.toLocaleString());
		}else{
			alert("事件设置失败，没有菜单项。");
		}
	});
	$("#removeAll").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		dropmenu.removeAll();
		alert("清除成功。");
	});
/*	$("#push").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var str=prompt("请输入菜单显示条目。示例：中国");
		dropmenu.push(str);
		alert("添加成功。")
	});*/
	$("#remove").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var items=dropmenu.getItems();
		items[0].remove();
		alert("删除成功");
	});
	$("#html").on("tap",function(){
		var dropmenu=WmWebUI.select("dropmenu01");
		var items=dropmenu.getItems();
		var str=prompt("第一个菜单项的内容。示例：<b>中国</b>")
		items[0].html(str);
		alert("添加成功");
	});
	new IScroll("#content",{tap:true,scrollbars: true});
});