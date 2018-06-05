require(["domReady!","mobile","wadeMobile","util"], function(doc,Mobile,WadeMobile) {
	var iscroll = new iScroll("content");
	var Flag0={
			"key1":false,
			"key2":false,
			"key3":false,
			"key4":false,
			"key5":false
	}
	var Flag1={
			"key1":false,
			"key2":false,
			"key3":false,
			"key4":false,
			"key5":false
	}
	//将所有已有的离线值，加入对应栏目中。
	/*
	for(var i=1;i<=5;i++){
		var k="key"+i;
		(function(argK){
			WadeMobile.getOfflineCache(function(v){
				if(v!=null){
					Flag1[argK]=true;
					confirmE(1, Flag1, argK,true);
				}
			},argK)
		})(k);
	}
	*/
	WadeMobile.getOfflineCache(function(json){
		var allValue=$.parseJSON(json);
		$.each(allValue,function(key,value){
			if(value!=""){
				confirmE(1, Flag1, key, true);
				Flag1[key]=true;
			}
		});
	},["key1","key2","key3","key4","key5"]);
	
	var type = -1;
	var emptyFlag=[true,true];
	$("#close").click(function(){
		Mobile.closeApp();
	});
	$("#add1").click(function() {
		$("#contentVaule").val("");
		type = 0;
	});
	$("#add2").click(function() {
		$("#contentVaule").val("");
		type = 1;
	});
	$("#confirm").click(function() {
		var Flag=eval("Flag"+type);
		var k=selectKey(Flag, type);
		confirmE(type,Flag,k);
	});
	function selectKey(obj,fg){
		for(k in obj){
			if(!obj[k]){
				obj[k]=true;
				return k;
			}
		}
		return -1;
	}
	function confirmE(fg,Flag,k,hasV){
		if(k==-1){
			alert("请删除部分数据后添加");
			return;
		}
		var kk=k+fg;
		var v = $("#contentVaule").val();
		if(!hasV){
		switch (fg) {
			case 0:
				WadeMobile.setMemoryCache(k, v);
				break;
			case 1:
				WadeMobile.setOfflineCache(k, v);
				break;
			}
		}
		if(emptyFlag[fg]){
			$("#empty"+fg).css("display","none");
			$("#list"+fg).css("display","");
			emptyFlag[fg]=false;
		}
		var str="<li id=\""+kk+"li"+"\"><div class=\"content\"><div class=\"main\" id=\""+kk+"\" ><div class=\"title\" >"+k+"(提示，单击查看数据)"+"</div></div><div class=\"fn\"><span class=\"e_ico-delete\" id=\""+kk+"del"+"\" ></span></div></div></li>"
		$("#list"+fg+" ul").append(str);
		var main=$("#"+kk);
		var del=$("#"+kk+"del");
		switch (fg) {
		case 0:
			main.click(function(){
				WadeMobile.getMemoryCache(alert,k,"没有记录，我是默认值");
			});	
			break;
		case 1:
			main.click(function(){
				WadeMobile.getOfflineCache(alert,k,"没有记录，我是默认值");
			});	
			break;
		}
		del.click(function(){
			switch (fg) {
			case 0:
				WadeMobile.removeMemoryCache(k);
				break;
			case 1:
				WadeMobile.removeOfflineCache(k);
				break;
			}
			$("#"+kk+"li").remove();
			if($("#list"+fg+" ul li").size()==0){
				$("#list"+fg).css("display","none");
				$("#empty"+fg).css("display","");
				emptyFlag[fg]=true;
			}
			Flag[k]=false;
			iscroll.refresh();
		});
		iscroll.refresh();
	}
});