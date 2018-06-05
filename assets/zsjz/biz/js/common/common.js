/**
 * 将一些公共的业务处理放入此对象中 
 */
define(["jcl","mobile","clientTool"],function(Wade,Mobile,ClientTool) {
	var Common = new function(){
		/*调用服务*/
		this.callSvc = function(action,param,callback,isEscape,error){
			param = param ? param : new Wade.DataMap();
            error = error ? error : function(x_code, x_info) {
				Mobile.loadingStop();
				alert(action + "请求失败\n错误编码:[" + x_code + "]\n错误信息:" + x_info);
				if(x_code==-100){
					Mobile.openPage("SessionErr");
				}
			};
            
			Common.get(function(sessionID){
				param.put(Constant.SESSION_ID,sessionID);
				if(!param.get(Constant.STAFF_ID)){
					Common.getLocal(function(staffID){
						param.put(Constant.STAFF_ID,staffID);
						callSvc(action,param,callback,isEscape,error);
					},Constant.STAFF_ID);
				}else{
					callSvc(action,param,callback,isEscape,error);
				}
			},Constant.SESSION_ID);
			
			function callSvc(_action,_param,_callback,_isEscape,_error){
				Mobile.dataRequest(_action,_param,function(data){
					var x_resultcode, x_resultinfo;
					if (data.substring(0, 1) == "{") {
						data = new Wade.DataMap(data);
						x_resultcode = data.get(Constant.X_RESULTCODE);
						x_resultinfo = data.get(Constant.X_RESULTINFO);
					} else if (data.substring(0, 1) == "[") {
						data = new Wade.DatasetList(data);
						x_resultcode = data.get(0).get(Constant.X_RESULTCODE);
						x_resultinfo = data.get(0).get(Constant.X_RESULTINFO);
					}
					_callback(data);
				}, _isEscape, _error);
			}
		};
		
		this.closeApp = function(){
			if(confirm("确定要退出应用程序吗?")){
				Mobile.closeApp();
			}
		};
		
		this.logoutAccount = function(){
			if(confirm("确定要注销该工号吗?")){
				Common.remove(Constant.SESSION_ID);
				Mobile.openTemplate("Home");
			}
		};
		
		this.put = function(key, value) {
			if(!checkMapKey(key)){
				return;
			}
			Mobile.setMemoryCache(key, value);
		};
		this.get = function(callback, key, value) {
			if(!checkArrayKey(key)){
				return;
			}
			Mobile.getMemoryCache(callback, key, value);
		};
		this.remove = function(key) {
			if(!checkArrayKey(key)){
				return;
			}
			Mobile.removeMemoryCache(key);
		};
		this.clear = function() {
		    Mobile.clearMemoryCache();
		};
		this.putLocal = function(key, value) {
			if(!checkMapKey(key)){
				return;
			}
			Mobile.setOfflineCache(key, value);
		};
		this.getLocal = function(callback, key, value) {
			if(!checkArrayKey(key)){
				return;
			}
			Mobile.getOfflineCache(callback, key,value);
		};
		this.removeLocal = function(key) {
			if(!checkArrayKey(key)){
				return;
			}
			Mobile.removeOfflineCache(key);
		};
		this.clearLocal = function() {
			Mobile.clearOfflineCache();
		};
		/*数据库操作*/
		var dbName = "display";
		this.execSQL = function(sql,bindArgs,callback,err){
			Mobile.execSQL(dbName,sql,bindArgs,callback,err);
		};
		
		function checkMapKey(key){
			if (!key || (typeof (key) != "string" && !ClientTool.tool.isDataMap(key))) {
				alert(key+"参数类型异常");
				return false;
			} else {
				return true;
			}
		}
		
		function checkArrayKey(key){
			if (!key || (typeof (key) != "string" && !ClientTool.tool.isArray(key))) {
				alert(key+"参数类型异常");
				return false;
			} else {
				return true;
			}
		}
	}
	
	window.Constant = {
		OPEN_PAGE_KEY : "OPEN_PAGE_KEY",
		STAFF_ID : "STAFF_ID",
		SESSION_ID : "SESSION_ID",
		X_RECORDNUM : "X_RECORDNUM",
		X_RESULTCODE : "X_RESULTCODE",
		X_RESULTINFO : "X_RESULTINFO",
		X_RESULTCAUSE : "X_RESULTCAUSE"
	}
	
	return Common;
});