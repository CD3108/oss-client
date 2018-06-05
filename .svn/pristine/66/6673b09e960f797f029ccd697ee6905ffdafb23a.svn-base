require(["domReady!","wmWebUI","jcl","mobile","iScroll5"],function(doc,WmWebUI,$,Mobile,IScroll){
	$("#open").tap( function(){
		var that = $(this);
		var switch01=WmWebUI.select("TestSwitchID1");
		if(switch01.isEnable()){
			if(switch01.getValue()){
				switch01.setValue(false);
				that.html("打开开关");
			}else{
				switch01.setValue(true);
				that.html("关闭开关");
			}
		}else{
			Mobile.tip("开关不可用！");
		}
	});
	$("#setAction").tap(function(){
		var switch01=WmWebUI.select("TestSwitchID1");
		var myDate=new Date();
		switch01.setOnAction(function(){
			Mobile.tip("正在打开。事件设置时间："+myDate.toLocaleString());
		});
		switch01.setOffAction(function(){
			Mobile.tip("正在关闭。事件设置时间："+myDate.toLocaleString());
		});
		switch01.setChangeAction(function(){
			Mobile.tip("即将改变开关状态。事件设置时间："+myDate.toLocaleString());
		});
		Mobile.tip("事件设置成功。设置时间："+myDate.toLocaleString());
	});
	$("#cleanAction").tap(function(){
		var switch01=WmWebUI.select("TestSwitchID1");
		switch01.setOnAction(function(){
		});
		switch01.setOffAction(function(){
		});
		switch01.setChangeAction(function(){
		});
		Mobile.tip("事件清除成功！");
	});
	$("#isEnable").tap(function(){
		var that = $(this);
		var switch01=WmWebUI.select("TestSwitchID1");
		if(switch01.isEnable()){
			switch01.isEnable(false);
			Mobile.tip("开关被设置为不可用。");
			that.html("取消禁用");
		}else{
			switch01.isEnable(true);
			Mobile.tip("开关被设置为可用。");
			that.html("禁用开关");
		}
	});
	$("#lable").tap(function(){
		var str=prompt("请输入开关显示的内容……示例：   A|B");
		if(str == undefined){
			return;
		}
		var switch01=WmWebUI.select("TestSwitchID1");
		var strs = str.split("|");
		if(strs[1] == undefined){
			return ;
		}
		switch01.setLabel(str);
	});
	new IScroll("#content",{tap:true,scrollbars: true});
});