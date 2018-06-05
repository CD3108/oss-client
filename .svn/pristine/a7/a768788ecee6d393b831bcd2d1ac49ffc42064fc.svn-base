require(["domReady!","wadeMobile","wmTab","util"], function(doc,WadeMobile,wmTab) {
	new wmTab("http_tab").create();
	//此处注意，绝不允许省略协议头。即http不允许省略。
	$("#rawcontent").tap(function() {
		WadeMobile.loadingStart('大量数据正在努力获取中……', '等待');
		WadeMobile.httpGet(function(htmlString) {
			//替换网页特殊字符
			/*htmlString = htmlString.replace(/<|>/g,function(m){
				if(m == '<')return "&lt;";
				if(m == '>')return "&gt;";
			});*/
			var s="<style type=\"text/\css\">";
			var styleStartIndex = htmlString.indexOf(s)+s.length;
			var styleEndIndex=htmlString.indexOf("</style>",styleStartIndex);
			var styleString=htmlString.substring(styleStartIndex,styleEndIndex);
			var iniStyleString=styleString;
			var startClassIndex=0;
			var endClassIndex=0;
			var currentClassName="";
			var replaceClassName="";
			var preString="#c1 ";
			while(true){
				endClassIndex=styleString.indexOf("{",startClassIndex);
				if(endClassIndex!=-1){
					currentClassName=styleString.substring(startClassIndex,endClassIndex);
					replaceClassName=preString+currentClassName;
					styleString=styleString.replace(currentClassName,replaceClassName);
					startClassIndex=styleString.indexOf("}",endClassIndex-currentClassName.length+replaceClassName.length)+1;
				}else{
					break;
				}
			}
			htmlString=htmlString.replace(iniStyleString,styleString);
			//WadeMobile.logCat(htmlString);
			htmlString=htmlString.replace(/href/g,"hrefbad");
			$("#c1").html(htmlString+"  <div class=\"e_space\"></div>");
			$("#c1").addClass("c_article");
			new iScroll("iscroll_c1");
			WadeMobile.loadingStop();
		}, "http://3g.baidu.com/", true, "UTF-8"); //第三个参数true,由于百度页面的源码需要escape传输
	});
	$("#datacontent").tap(function(){
		WadeMobile.loadingStart('正在获取股票信息……', '等待');
		WadeMobile.httpGet(function(data) {
			var arr=data.substring('var hq_str_s_sh000001="'.length,data.length-3).split(',');
			var br="<br />"
			$("#c2").html(
					"名称:"+arr[0]+br
					+"价格:"+arr[1]+br
					+"涨跌:"+arr[2]+br
					+"涨跌率:"+arr[3]+br
					+"成交量(手):"+arr[4]+br
					+"成交额(万元):"+arr[5]+br
			);
			$("#c2").addClass("c_article");
			WadeMobile.loadingStop();
		}, "http://hq.sinajs.cn/list=s_sh000001", true, "UTF-8"); //第三个参数true,由于需要escape传输
	});
	//蓝牙分享
	$("#share").tap(function(){
		WadeMobile.shareByBluetooth();
	});
});