/**
 * baseUrl的优先级:require.config>data-main>html文件路径
 * 如果模块包含如下的字符,不按照baseUrl+paths的方式来寻找模块,而是采用全路径(URL)的方式:
 * 1.如果以".js"结尾
 * 2.如果以"/"开头
 * 3.如果以"http:"或者"https:"开头
 */
require.config({
	baseUrl:'res/js',
	//指定别名. zepto.event如果不使用引号,会导致异常
	paths:{
		'jcl' : 'base/jcl',
		'o' : 'frame/o',
		'oInput' : 'frame/o-input',
		'tap' : 'frame/tap',
		'gesture' : 'frame/gesture',
		
		'browserTool' : 'mobile/browser-toolkit',
		'clientTool' : 'mobile/client-toolkit',
		'mobileBrowser' : 'mobile/mobile-browser',
		'mobileClient' : 'mobile/mobile-client',
		'wadeMobile' : 'mobile/wade-mobile',//这里同时会引入expand-mobile和biz-mobile
		'mobile' : 'mobile/mobile',
		'base64' : 'mobile/base64',
		'wmWebUI' : 'ui/wm-webui',
		'wmTab' : 'ui/wm-tab',
		'wmTabbar' : 'ui/wm-tabbar',
		'wmPopup' : 'ui/wm-popup',
		'wmBase' : 'ui/wm-base',
		'wmAnimate' : 'ui/wm-animate',
		'wmCss3animate' : 'ui/wm-css3animate',
		'wmTouchLayer' : 'ui/wm-touchLayer.js',
		'wmUI' : 'ui/wm-ui',
		'wmNavBar' : 'ui/wm-navbar',
		'wmToolTip' : 'ui/wm-tooltip',
		'wmSwitch' : 'ui/wm-switch',
		'wmSlider' : 'ui/wm-slider',
		'wmProgress' : 'ui/wm-progress',
		'wmSegment' : 'ui/wm-segment',
		'wmDialog' : 'ui/wm-dialog',
		'wmDialog2' : 'ui/wm-dialog2',
		'wmDropmenu' : 'ui/wm-dropmenu',
		'wmRefresh' : 'ui/wm-refresh',
		
		'domReady' : 'base/require/domReady-2.0.1',
		'zepto' : 'base/zepto/zepto.min-1.1.6',
		'handlebars' : 'base/handlebars/handlebars-4.0.5',
		'hammer' : 'base/hammer/hammer.min-2.0.8',
		'iScroll' : 'base/iscroll/iscroll',
		'jquery' : 'base/jquery/jquery-1.12.4.min',
		
		'highcharts' : 'base/chart/highchart/highcharts',
		'highcharts-3d' : 'base/chart/highchart/highcharts-3d',
		'highcharts-more' : 'base/chart/highchart/highcharts-more',
		/*"echarts": 'http://echarts.baidu.com/build/dist',*/
		"echarts": 'base/chart/echart/echarts',
		"icharts": 'base/chart/ichart/ichart.1.2.1.min'
		
	},
	deps: [],
	callback: function(){
	},
	//非AMD规范的js输出对象
	shim: {
		/*highcharts: {
	      exports: "Highcharts",
	      deps: ["jquery"]
	    }*/
	},
	//设置超时时间,默认7秒
	waitSeconds:7/*,
	//缓存
	urlArgs: "bust=" + (new Date()).getTime()*/
});
