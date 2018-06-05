require(["domReady!","mobile","util"], function(doc,Mobile) {
	var dbName = "display";
	var table_name = "log";
	//建表语句
	var create_sql = "CREATE TABLE IF NOT EXISTS " + table_name + " ("
			+ "id integer primary key autoincrement, "
			+ "content varchar(100) ,"
			+ "timestamp timestamp)";
	//建表
	$("#create").tap(function() {
		Mobile.execSQL(dbName,create_sql,null,function(){
			alert("建表成功");
		});
	});
	
	$("#insert").tap(function() {
		var datas = new Wade.DataMap();
		datas.put("content","测试日志");
		datas.put("timestamp",new Date().getTime());
		Mobile.insert(dbName,table_name,datas,function(row){
			alert("插入"+row+"条数据");
		});
	});
});
