require(["domReady!","wadeMobile","util"], function(doc,WadeMobile) {
	var iscroll=new iScroll("content");
	$("#location").tap(function(){
		WadeMobile.loadingStart("正在定位");
		WadeMobile.location(function(info){
			WadeMobile.loadingStop();
			var data=new Wade.DataMap(info);
			$("#locationDesc").html(data.get("LocationDesc"));
			iscroll.refresh();
			alert(data);
		},function(error){
			WadeMobile.loadingStop();
			WadeMobile.tip(error);
		});
	})
	
	$("#selectLocation").tap(function(){
		WadeMobile.selectLocation(function(str){
			var data=new Wade.DataMap(str);
			var lat=parseFloat(data.get("Latitude"));
			var lng=parseFloat(data.get("Longitude"));
			var latlng="选定坐标："+lng.toFixed(2)+" , "+lat.toFixed(2);
			var desc=data.get("LocationDesc");
			$("#selectLatLng").html(latlng);
			$("#selectLocationDesc").html("选定地址："+desc);
			iscroll.refresh();
			alert(str);
		});
	});
	
	$("#markMapMulti").tap(function(){
		var list=new Wade.DatasetList();
		/*不设置Icon则使用默认图标*/
		/*不设置Title和Snippet则使用默认位置信息*/
		//标记长沙
		var data1=new Wade.DataMap();
		data1.put("Latitude",28.20);
		data1.put("Longitude", 112.96);
		list.add(data1);
		//标记衡阳
		var data2=new Wade.DataMap();
		data2.put("Latitude",26.91);
		data2.put("Longitude", 112.57);
		data2.put("Icon", "map_mark");
		data2.put('Title',"工业城市衡阳");
		//标记内容过长情况
		data2.put("Snippet", "地处南岳衡山之南，因山南水北为“阳”，故得此名；又因“北雁南飞，至此歇翅停回”栖息于市区回雁峰，而雅称“雁城”。");
		list.add(data2);
		//标记岳阳
		var data3=new Wade.DataMap();
		data3.put("Latitude", 29.39);
		data3.put("Longitude", 113.13);
		data3.put("Icon", "map_mark");
		//标记内容过长情况
		data3.put("Title", "岳阳古称巴陵、又名岳州。东倚幕阜山，西临洞庭湖，北接长江，远眺湖北，南连湘、资、沅、澧四水。");
		//没有输入标记内容,内容会默认是一个地址
		list.add(data3);
		WadeMobile.markMap(function(info){
			var data = new Wade.DataMap(info);
			alert(data);
		},list,true,true,true);
	});
	$("#markMapSingle").tap(function(){
		var param=new Wade.DataMap();
		param.put("Latitude",28.1953);
		param.put("Longitude",112.9886);
		param.put('Title',"我们是谁?");
		param.put("Snippet", "我们是Wade平台系统架构部，在长沙五一大道银华大酒店办公，如有需要可以联系我们。");
		WadeMobile.markMap(function(info){
			var data = new Wade.DataMap(info);
			alert(data);
		},param,false,true,true);
	});
});
