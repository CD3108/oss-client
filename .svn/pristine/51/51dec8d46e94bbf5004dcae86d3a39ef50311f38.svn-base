require(["wmTabbar","common","mobile"], function(WmTabbar,Common,Mobile) {
	var loginData = new Wade.DataMap();
	
	loginData.put("ACCOUNT","测试工号");
	Common.callSvc("Login",loginData,function(data){
		alert("登陆成功:"+data);
		Common.put("SESSION_ID",data.get("SESSION_ID"));
		setTimeout(function(){
			Common.callSvc("GetLoginInfo",data,function(info){
				alert(info)
				Common.callSvc("GetLoginInfo",info,function(info1){
					alert(info1)
				});
			});
		},200);
	});
});