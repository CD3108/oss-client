/**
 * 提供给外围自行扩展和终端交互的js API。 
 */
define(["require"],function(require) {
	
	var ExpandMobile = (function(){
		return{
			loadingStart:function(message,title,cancelable,err){ //加载进度条
				execute("loadingStart", [message,title,cancelable],err);
			},loadingStop:function(err){ //结束进度条
				execute("loadingStop", [],err);
			},getChoice:function(callback,options,values,title,iconName,err){
				storageCallback("getChoice", callback);
				execute("getChoice", [options,values,title,iconName], err);
			},tip:function(msg,type,err){
                if(type==undefined){
                    type = 0;//0-短提示,-1长提示
                }
                execute("tip", [msg,type],err);
            },alert:function(msg,type,err){
                if(type==undefined){
                    type = 0;//0-短提示,-1长提示
                }
                execute("alert", [msg,type],err);
            },getDate:function(callback,date,format,err){
				if(format==undefined){
					format = "yyyy-MM-dd";
				}
				storageCallback("getDate",callback);
				execute("getDate", [date,format],err);
			},getContactsView:function(callback,data,setting,err){
				if(data==undefined){
					data = new Wade.DataMap();
				}
				if(setting==undefined){
					setting = new Wade.DataMap();
				}
				storageCallback("getContactsView",callback);
				execute("getContactsView", [data.toString(),setting.toString()],err);
			},getPhoto:function(callback,type,err){//获取照片
				if(type==undefined){
					type = 1;//0-Base64编码的字符串 1- 文件路径
				}
				storageCallback("getPhoto",callback);
				execute("getPhoto", [type],err);
			},getPicture:function(callback,type,err){//获取照片
				if(type==undefined){
					type = 1;//0-Base64编码的字符串 1- 文件路径
				}
				storageCallback("getPicture",callback);
				execute("getPicture", [type],err);
			},transImageToBase64:function(callback,path,err){
				storageCallback("transImageToBase64",callback);
				execute("transImageToBase64", [path],err);
			},compressImage:function(callback,path,fileSize,quality,err){
				if(fileSize==undefined){
					fileSize = 10;//压缩到10K左右大小
				}
				if(quality==undefined){
					quality = 30;//图片质量30
				}
				storageCallback("compressImage",callback);
				execute("compressImage", [path,fileSize,quality],err);
			},beep:function(count,err){
				execute("beep", [count],err);
			},shock:function(time,err){
				execute("shock", [time],err);
			},call:function(sn,autoCall,err){
				if(autoCall==undefined){
					autoCall = false;// false-跳转至拨打界面,true-直接拨打
				}
				execute("call", [sn,autoCall],err);
			},sms:function(sn,msg,autoSms,err){
				if(autoSms==undefined){
					autoSms = false;// false-跳转至短信界面,true-直接短信
				}
				execute("sms", [sn,msg,autoSms],err);
			},openApp:function(appId,urlParams,installUrl,err){
				execute("openApp", [appId,urlParams,installUrl],err);
			},showKeyBoard:function(type,err){
				execute("showKeyBoard", [type],err);
			},hideKeyBoard:function(err){
				execute("hideKeyBoard", [],err);
			},setTitleView:function(title,err){
				execute("setTitleText", [title],err);
			},getSysInfo:function(callback,key,err){//TELNUMBER|IMEI|IMSI|SDKVERSION|OSVERSION|PLATFORM|SIMNUMBER
				storageCallback("getSysInfo",callback);
				execute("getSysInfo", [key],err);
			},getNetInfo:function(callback,key,err){//MAC|IP
				storageCallback("getNetInfo",callback);
				execute("getNetInfo", [key],err);
			},explorer:function(callback,fileType,initPath){
				storageCallback("explorer",callback);
				execute("explorer",[callback,fileType,initPath]);
			},httpDownloadFile : function(targetFilePath,fileName,callback,suc,err){//客户端直接访问服务端进行下载
				storageCallback("httpDownloadFile",callback);
				execute("httpDownloadFile",[targetFilePath,fileName],suc,err);
			},location:function(callback,err){
				storageCallback("location",callback);
				execute("location",[],err);
			},markMap:function(callback,markParam,isSelect,isJump,err){
				if (typeof(markParam)=="object" && (markParam instanceof Wade.DataMap)) {
					var markParams = new Wade.DatasetList();
					markParams.add(markParam);
					markParam = markParams;
				}
				storageCallback("markMap", callback);
				execute("markMap", [markParam.toString(),isSelect,isJump,err]);
			},selectLocation:function(callback,isLocation,longitude,latitude,scale){
				storageCallback("selectLocation",callback);
				execute("selectLocation",[isLocation, longitude, latitude, scale]);
			},scanQrCode:function(callback){
				storageCallback("scanQrCode",callback);
				execute("scanQrCode",[]);
			},createQrCode:function(callback,content){
				storageCallback("createQrCode",callback);
				execute("createQrCode",[content]);
			},httpGet:function(callback,url,encode){
				storageCallback("httpGet",callback);
				execute("httpGet",[url,encode]);
			},removeMemoryCache:function(key,err){
				execute("removeMemoryCache",[key],err);
			},clearMemoryCache:function(err){
				execute("clearMemoryCache",[],err);
			},setMemoryCache:function(key,value,err){
				execute("setMemoryCache",[key,value],err);
			},getMemoryCache:function(callback,key,defValue,err){
				storageCallback("getMemoryCache",callback);
				execute("getMemoryCache",[key,defValue],err);
			},setOfflineCache:function(key,value,err){
				execute("setOfflineCache", [key,value],err);
			},getOfflineCache:function(callback,key,defValue,err){
				storageCallback("getOfflineCache",callback);
				return execute("getOfflineCache", [key,defValue],err);
			},removeOfflineCache:function(key,err){
				execute("removeOfflineCache", [key],err);
			},clearOfflineCache:function(err){
				execute("clearOfflineCache", [],err);
			},writeFile:function(content,fileName,type,isSdcard,err){
				execute("writeFile",[content,fileName,type,isSdcard],err);
			},appendFile:function(content,fileName,type,isSdcard,err){
				execute("appendFile",[content,fileName,type,isSdcard],err);
			},readFile:function(callback,fileName,type,isSdcard,isEscape,err){
				storageCallback("readFile",callback,isEscape);
				execute("readFile",[fileName,type,isSdcard,isEscape],err);
			},openFile:function(filename,type,isSdcard,err){
				execute("openFile", [filename,type,isSdcard],err);
			},deleteFile:function(filename,type,isSdcard,err){
				execute("deleteFile", [filename,type,isSdcard],err);
			},getAllFile:function(callback,filename,type,isSdcard,err){
				storageCallback("getAllFile", callback);
				execute("getAllFile", [filename,type,isSdcard],err);
			},getRelativePath:function(callback,filename,type,err){
				storageCallback("getRelativePath",callback);
				execute("getRelativePath", [filename,type],err);
			},cleanResource:function(type,isSdcard,err){
				execute("cleanResource",[type,isSdcard],err);
			},shareByBluetooth:function(err){
				execute("shareByBluetooth", [],err);
			},openBrowser:function(url,err){
				execute("openBrowser",[url],err);
			},setSmsListener:function(callback,telString,err){
				storageCallback("setSmsListener", callback);
				execute("setSmsListener", [telString],err);
			},audioRecord:function(callback,auto,err){
				if(auto == undefined) {
					auto = false; //false-按住录音,true-自动录音
				}
				storageCallback("audioRecord",callback);
				execute("audioRecord", [auto],err);
			},audioPlay:function(audioPath,hasRipple,err){
				if (hasRipple == undefined) {
					hasRipple = true; //true-弹出波纹,false-无效果
				}
				execute("audioPlay",[audioPath,hasRipple],err);
			},logCat:function(msg,title,err){
				//将日志输出至LogCat控制台（异步）
				execute("logCat",[msg,title],err);
			},execSQL:function(dbName,sql,bindArgs,limit,offset,callback,err){
				if(bindArgs == undefined){
					bindArgs = new Wade.DataMap();
				}
				if(limit == null)
					limit = "";
				else if(!isNaN(limit))	
					limit = "\"" + limit + "\"";
				
				if(offset == null)	
					offset = "";
				else if(!isNaN(offset))
					offset = "\"" + offset + "\"";
				
				storageCallback("execSQL",callback);
				execute("execSQL",[dbName,sql,bindArgs.toString(),limit,offset],err);
			},insert:function(dbName,table,datas,callback,err){
				if(datas==undefined){
					datas = new Wade.DataMap();
				}
				storageCallback("insert",callback);
				execute("insert",[dbName,table,datas.toString()],err);
			},delete:function(dbName,table,condSQL,conds,callback,err){
				if(conds==undefined){
					conds = new Wade.DataMap();
				}
				storageCallback("delete",callback);
				execute("delete",[dbName,table,condSQL,conds.toString()],err);
			},update:function(dbName,table,datas,condSQL,conds,callback,err){
				if(datas==undefined){
					datas = new Wade.DataMap();
				}
				if(conds==undefined){
					conds = new Wade.DataMap();
				}
				storageCallback("update",callback);
				execute("update",[dbName,table,datas.toString(),condSQL,conds.toString()],err);
			},select:function(dbName,table,columns,condSQL,conds,limit,offset,callback,err){
				if(columns == null){
					columns = new Array();
				}
				if(conds == null){
					conds = new Wade.DataMap();
				}
				if(limit == null)
					limit = "";
				else if(!isNaN(limit))	
					limit = "\"" + limit + "\"";
				
				if(offset == null)	
					offset = "";
				else if(!isNaN(offset))
					offset = "\"" + offset + "\"";
				
				storageCallback("select",callback);
				execute("select",[dbName,table,columns,condSQL,conds.toString(),limit,offset],err);
			},selectFirst:function(dbName,table,columns,condSQL,conds,callback,err){
				this.select(dbName,table,columns,condSQL,conds,1,0,callback,err);
			},registerForPush:function(account,callback,err){
				storageCallback("registerForPush",callback);
				execute("registerForPush",[account],err);
			},unregisterForPush:function(callback){
				storageCallback("unregisterForPush",callback);
				execute("unregisterForPush", []);
			},sendText:function(account,content,callback,err){
				storageCallback("sendText",callback);
				execute("sendText", [account,content],err);
			},setCallbackForPush:function(callback){
				execute("setCallbackForPush", [callback]);
			},registerForPushWithYunba:function(account,callback,err){
				storageCallback("registerForPushWithYunba",callback);
				execute("registerForPushWithYunba",[account],err);
			},unregisterForPushWithYunba:function(callback){
				storageCallback("unregisterForPushWithYunba",callback);
				execute("unregisterForPushWithYunba", []);
			},sendTextWithYunba:function(account,content,callback,err){
				storageCallback("sendTextWithYunba",callback);
				execute("sendTextWithYunba", [account,content],err);
			},setCallbackForPushWithYunba:function(callback){
				execute("setCallbackForPushWithYunba", [callback]);
			},aliPay:function(tradeNo,subject,body,price,callback,err){
				storageCallback("aliPay",callback);
				execute("aliPay",[tradeNo,subject,body,price],err);	
			},uploadWithServlet:function(filePath,dataAction,param,callback,err){
				if(typeof(filePath)=="string"){
					filePath = [filePath];
				}
				storageCallback("uploadWithServlet",callback);
				execute("uploadWithServlet",[filePath,dataAction,param],err);	
			},downloadWithServlet:function(savePath,dataAction,param,callback,err){
				storageCallback("downloadWithServlet",callback);
				execute("downloadWithServlet",[savePath,dataAction,param],err);	
			},uploadFile:function(filePath,servletUrl,callback,err){
				storageCallback("uploadFile",callback);
				execute("uploadFile",[filePath,servletUrl],err);	
			},downloadFile:function(savePath,servletUrl,callback,err){
				storageCallback("downloadFile",callback);
				execute("downloadFile",[savePath,servletUrl],err);	
			},recordVideo:function(callback,compressRatio,timeLimit,err){
				storageCallback("recordVideo",callback);
				execute("recordVideo",[compressRatio,timeLimit],err);	
			},playVideo:function(videoPath,callback,err){
				storageCallback("playVideo",callback);
				execute("playVideo",[videoPath],err);	
			},getContacts:function(callback,err){
				storageCallback("getContacts",callback);
				execute("getContacts",[], err);	
			},openKeyboard:function(value,err){
				execute("openKeyboard",[value],err);
			},setScreenLock:function(dataParam,callback,err){
				storageCallback("setScreenLock",callback);
				execute("setScreenLock",[dataParam],err);
			},getScreenLockState:function(callback,err){
				storageCallback("getScreenLockState",callback);
				execute("getScreenLockState",[],err);
			},screenUnlock:function(forgetPageAction,callback,err){
				storageCallback("screenUnlock",callback);
				execute("screenUnlock",[forgetPageAction],err);
			},initNfc:function(cmds,callbackName,err) {
				execute("initNfc", [cmds, callbackName], err);
			},scanSingle:function(callback){
				storageCallback("scanSingle",callback);
				execute("scanSingle",[]);
			},scanMultiple:function(callback){
				storageCallback("scanMultiple",callback);
				execute("scanMultiple",[]);
			},showNotification:function(content,title,icon,id){
				execute("showNotification",[content,title,icon,id]);
			}
		};
	})();
	
	var WadeMobile;
	function execute(action, args, error, success) {
		/*循环依赖,懒加载*/
		if(!WadeMobile){
			WadeMobile = require("wadeMobile")
		}
        return WadeMobile.execute(action, args, error, success)
	}
	function storageCallback(action,callback) {
		/*循环依赖,懒加载*/
		if(!WadeMobile){
			WadeMobile = require("wadeMobile")
		}
		WadeMobile.callback.storageCallback(action,callback)
	}
	
	return ExpandMobile;
});
