require(["domReady!","util"], function(doc,util) {
	new iScroll("content");
	/*也可以通过标签属性ontap=";"来展示触感,使用ontap演示*/
	//$("#title_button").tap(function(){});
	//$("#icon_button").tap(function(){});
	
	$("#cancel").tap(function(){
		alert("长按取消按钮有触感");
	});
	$("#submit").tap(function(){
		alert("长按提交按钮有触感");
	});
	$("#delete").tap(function(){
		alert("长按删除按钮有触感");
	});
	
	//设置 dropmenu
	//初始化（CSS已将它默认放到了界面之外，以下设置不会造成闪烁）
	$("#dropmenu").find("ul").css("top",$("#dropmenu").height()*(-1) + "px");
	$("#dropmenu").find("ul").css("transition","transform 0.2s ease-out");
	$("#dropbutton").find(".e_ico-unfold").css("transition","transform 0.2s ease-out");
	$("#dropmenu").css("visibility","hidden");
	//位置
	$("#dropmenu").css("left",$("#dropbutton").offset().left + $("#dropbutton").width() - $("#dropmenu").width());//靠右要减去这两个 width()，靠左则不需要
	$("#dropmenu").css("top",$("#dropbutton").offset().top + $("#dropbutton").height());
	$("#dropmenu").css("display","none");
	$("#dropmenu").css("visibility","visible");
	//显隐
	$("#dropbutton").tap(function(){
		if($("#dropmenu").css("display") == "none"){
			$("#dropmenu").css("display","");
			$("#dropmenu").find("ul").css("transform","translateY(" + $("#dropmenu").height() + "px)");
			$("#dropbutton").find(".e_ico-unfold").css("transform","rotate(180deg)");
		} else {
			$("#dropmenu").find("ul").css("transform","translateY(0)");
			$("#dropbutton").find(".e_ico-unfold").css("transform","rotate(0)");
			$("#dropmenu").css("display","none");
		}
	});
//设置 dropmenu
	//初始化（CSS已将它默认放到了界面之外，以下设置不会造成闪烁）
	$("#dropmenu2").find("ul").css("top",$("#dropmenu2").height()*(-1) + "px");
	$("#dropmenu2").find("ul").css("transition","transform 0.2s ease-out");
	$("#dropbutton2").find(".e_ico-unfold").css("transition","transform 0.2s ease-out");
	$("#dropmenu2").css("visibility","hidden");
	//位置
	$("#dropmenu2").css("left",$("#dropbutton2").offset().left + $("#dropbutton2").width() - $("#dropmenu2").width());//靠右要减去这两个 width()，靠左则不需要
	$("#dropmenu2").css("top",$("#dropbutton2").offset().top + $("#dropbutton2").height());
	$("#dropmenu2").css("display","none");
	$("#dropmenu2").css("visibility","visible");
	//显隐
	$("#dropbutton2").tap(function(){
		if($("#dropmenu2").css("display") == "none"){
			$("#dropmenu2").css("display","");
			$("#dropmenu2").find("ul").css("transform","translateY(" + $("#dropmenu2").height() + "px)");
			$("#dropbutton2").find(".e_ico-unfold").css("transform","rotate(180deg)");
		} else {
			$("#dropmenu2").find("ul").css("transform","translateY(0)");
			$("#dropbutton2").find(".e_ico-unfold").css("transform","rotate(0)");
			$("#dropmenu2").css("display","none");
		}
	});
});
