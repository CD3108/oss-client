require(["domReady!","mobile","wadeMobile","wmTab","wmPopup","util"], function(doc,Mobile, WadeMobile,wmTab,wmPopup) {
	var popup = new wmPopup("createFile","closeCreateFile","cancelCreateFile","okCreateFile");
	new wmTab("fileTab").create();
	var iscroll=new iScroll("content");
	
	var type=1;
	//获取data/files全路径
	WadeMobile.getDirection(function(dir){
		$("#files_dir").html(dir);
	},0);
	//获取sdcard/files全路径
	WadeMobile.getDirection(function(dir){
		$("#sdcard_dir").html(dir);
	},1);
	//根据已有的文件，创建对应的li
	createAllLi(1);
	createAllLi(0);
	$("#addFile0").click(function(){
		$("#fileName").val("");
		popup.show();
	});
	$("#addFile1").click(function(){
		$("#fileName").val("");
		popup.show();
	});
	//确认保存按钮单击事件
	$("#okCreateFile").click(function(){
		ul=$("#file_ul_"+type);
		var name=$("#fileName").val();
		createLi(name,ul);
		WadeMobile.writeFile("",name,type);
		var l1=ul.children("li").last().children("div").children("div");
		bindE(l1);
		iscroll.refresh();
	});
	$("#li_sdcard").click(function(){
		type=1;
	});
	$("#li_data").click(function(){
		type=0;
	});
	
	function createAllLi(flag){
		WadeMobile.getAllFile(function(fileNames){
			var arr=$.parseJSON(fileNames);
			var ul=$("#file_ul_"+flag);
			$.each(arr,function(index,fileName){
				createLi(fileName,ul);
			});
			iscroll.refresh();
			var lis=ul.children("li");
			$.each(lis,function(index,item){
				var child=$(item).children("div").children("div");
				bindE(child);
			});
		},flag);
	}
	function bindE(child){
		//处理长按事件与单击事件
		var flagL=false;
		var tid=-1;
		child.bind("touchstart",function(event){
			  var id=this.getAttribute("id");
			  var fileName=unescape(id.substr(5));
			  tid=setTimeout(function(){
				  	flagL=true;
			        if (confirm("确认要删除？")) {
			        	WadeMobile.deleteFile(fileName,type);
			        	var key="file-"+escape(fileName);
			        	$("#"+key).parent().parent().remove();
			        	WadeMobile.tip("删除成功！");
			        }else{
			        }
			  },700); 
		  });
		  child.bind("touchend",function(){
			  clearInterval(tid);
			  if(flagL){
			  }else{
				  	var id=this.getAttribute("id");
				  	var fileName=unescape(id.substr(5));
				  	var values=new Wade.DataMap();
					values.put("type", type);// files
					values.put("fileName", fileName);
					Mobile.openTemplate("file-detail", values);
			  }
			  flagL=false;
		  });
	}
	function createLi(fileName,ul){
		if(ul.children("li").size()<30){
			var key="file-"+escape(fileName);
			var view=fileName.replace(/<|>/g,function(m){
				if(m=="<") return "&lt;";
				if(m==">") return "&gt;";
			});
			ul.append("<li><div class=\"content\"><div class=\"ico\" id=\""+key+"\"><div class=\"e_ico-file e_gold\"></div><div class=\"text\" >"+view+"</div></div></div></li>");
		}
	}
});