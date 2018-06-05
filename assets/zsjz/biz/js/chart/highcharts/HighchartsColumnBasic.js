require(['domReady!','zepto','highcharts','mobile'],function(doc,$,Highcharts,Mobile){
	Highcharts.jquery('#container').highcharts({
        chart: {
            type: 'column',
            zoomType: 'x',
            panning: true
        },
        title: {
            text: 'Monthly Average Rainfall'
        },
        subtitle: {
            text: 'Source: WorldClimate.com'
        },
        credits: {
        	enabled: false
        },
        exporting: {
        	enabled: false
        },
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Rainfall (mm)'
            }
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true,
			positioner:function () {
                return { x: 80, y: 50 };
            }
        },
        plotOptions: {
            column: {
                pointPadding: 0.2,
                borderWidth: 0,
                cursor: 'pointer',
                point: {
                	events: {
                        click: function() {
                        	//alert(event.point.category);//对应X
                        	if(event.point.id){
                        		alert(event.point.id);//对应id
                        	}else{
                        		alert("仅前面三个组有对应的id数据");
                        	}
                        	//alert(event.point.name);//对应id
                        	//alert(event.point.y);//对应Y，即该柱的值
                        }
                    }
                }
            }
        },
        series: [{
            name: 'ChangSha',
            data: [{y:1.5,id:"001"  }, {y:171.5,id:"002"  }, {y:71.5,id:"003"  }, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4]
        }, {
            name: 'BeiJing',
            data: [{y:83.6,id:"011"}, {y:78.8,id:"012"}, {y:98.5,id:"013"}, 93.4, 106.0, 84.5, 105.0, 104.3, 91.2, 83.5, 106.6, 92.3]

        }, {
            name: 'ChengDu',
            data: [{y:48.9,id:"021"}, {y:38.8,id:"022"},{y: 39.3,id:"023"}, 41.4, 47.0, 48.3, 59.0, 59.6, 52.4, 65.2, 59.3, 51.2]

        }, {
            name: 'YiYang',
            data: [{y:42.4,id:"031"}, {y:33.2,id:"032"},{y: 34.5,id:"033"}, 39.7, 52.6, 75.5, 57.4, 60.4, 47.6, 39.1, 46.8, 51.1]

        }]
    });
});