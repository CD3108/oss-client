require(["domReady!","wadeMobile","util"], function(doc,WadeMobile) {
	var flag=false;
	new iScroll("content");
	
	$("#call").tap(function() {
		var num=$("#num").val();
		WadeMobile.call(num);
	});
	$("#sms").tap(function(){
		var num=$("#num").val();
		var msg=$("#msg").val();
		WadeMobile.sms(num,msg);
	});
	$("#shock").tap(function(){
		//持续2000ms
		WadeMobile.shock(2000);
	});
	$("#beep").tap(function(){
		//重复响铃3次
		WadeMobile.beep(3);
	});
	$("#getInfo").tap(getInfo);
	function getInfo(){
		$("#info_list")[0].style.display="";
		doc.getElementById("info_space").style.display="none";
		var infoDivs=$("#info div");
		WadeMobile.getSysInfo(function(info1){
			WadeMobile.getSysInfo(function(info2){
				infoDivs.eq(0).html(info2+' '+info1);
			},'PLATFORM');
		},'OSVERSION');
		var spans=infoDivs.eq(1).find("span");
		function allInfo(IMEI,MAC,IP){
			this.IMEI=IMEI;
			this.MAC=MAC;
			this.IP=IP;
		}
		var all=new allInfo();
		//获取全球唯一码
		WadeMobile.getSysInfo(function(info){
			modify(info,"IMEI");
			run(all);
		},'IMEI');
		//获取MAC地址
		WadeMobile.getNetInfo(function(info){
			modify(info,"MAC");
			run(all);
		},'MAC');
		//获取IP地址
		WadeMobile.getNetInfo(function(info){
			modify(info,"IP");
			run(all);
		},'IP');
		function modify(info,param){
			switch(param)
				{
					case "IMEI":
						all.IMEI=info;
					  break;
					case "MAC":
						all.MAC=info;
					  break;
					case "IP":
						all.IP=info;
						break;
				}
		}
		function run(i){
			if(i.IMEI!="" && i.MAC!="" && i.IP!=""){
				$("#getInfo").html("系统信息");
				spans.eq(0).html(i.IMEI);
				spans.eq(1).html(i.MAC);
				spans.eq(2).html(i.IP);
			}
		}
	}
});
