require(["domReady!","zepto","ichart","mobile"],function(doc,$,IChart,Mobile){
		IChart(function(){
			var data = [
						{name : 'IE',value : 35.75,color:'#bc6666'},
						{name : 'Chrome',value : 29.84,color:'#cbab4f'},
						{name : 'Firefox',value : 24.88,color:'#76a871'},
						{name : 'Safari',value : 6.77,color:'#9f7961'},
						{name : 'Opera',value : 2.02,color:'#2ba5a4'},
						{name : 'Other',value : 0.73,color:'#6f83a5'}
					];
			
			new IChart.Column3D({
				render : 'canvasDiv',
				data: data,
				title : 'Top 5 Browsers from 1 to 29 Feb 2012',
				width : 800,
				height : 400,
				align:'left',
				offsetx:50,
				legend : {
					enable : true
				},
				sub_option:{
					label:{
						color:'#111111'
					}
				},
				coordinate:{
					width:600,
					scale:[{
						 position:'left',	
						 start_scale:0,
						 end_scale:40,
						 scale_space:8,
						 listeners:{
							parseText:function(t,x,y){
								return {text:t+"%"}
							}
						}
					}]
				}
			}).draw();
	});
});