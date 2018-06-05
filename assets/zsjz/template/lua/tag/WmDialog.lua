local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmDialog = Class(Tag)

function WmDialog:doStartTag(attr)
	if not (attr.id and attr.title) then
		monitor:error("WmDialog组件 id、title属性不能为空 ")
		return nil
	end
	self.attr = attr
	self.htmlbuff:append('<div class="c_dialog" id="'..attr.id..'">')
	self.htmlbuff:append('<div class="wrapper">')
	self.htmlbuff:append('<div class="title">')
	self.htmlbuff:append('<div class="text">'..attr.title..'</div>')
	self.htmlbuff:append('<a href="#nogo" class="close"></a>')
	self.htmlbuff:append('</div>')
	self.htmlbuff:append('<div class="content">')
	if attr.contentText then
		self.htmlbuff:append(attr.contentText)
	end 
end

function WmDialog:doEndTag()
	local attr = self.attr
	self.htmlbuff:append('</div>')
	self.htmlbuff:append([[
		<div class="submit">
			<ul>
				<li><span class="e_button e_button-cancel">取消</span></li>
				<li><span class="e_button e_button-ok" id="btn">确定</span></li>
			</ul>
		</div>]])
	self.htmlbuff:append('</div></div>')
	self.htmlbuff:append('')

	self.htmlbuff:append('<script type="text/javascript">')
	self.htmlbuff:append('require(["wmDialog"],function(WmDialog) {')
	self.htmlbuff:append('var dialog_'..attr.id..' = new WmDialog("'..attr.id..'");')
	if attr.contentId then
		self.htmlbuff:append(' dialog_'..attr.id..'.setContent("'..attr.contentId..'","html");')
	end
	if attr.cancelAction then
		self.htmlbuff:append(' dialog_'..attr.id..'.cancelAction(function(){ return '..attr.cancelAction..'.apply(window,arguments);});')		
	end
	if attr.submitAction then
		self.htmlbuff:append(' dialog_'..attr.id..'.submitAction(function(){ return '..attr.submitAction..'.apply(window,arguments);});')
	end
	if attr.hideAction then
		self.htmlbuff:append(' dialog_'..attr.id..'.setHideAction(function(){ return '..attr.hideAction..'.apply(window,arguments);});')
	end
	if attr.showAction then
		self.htmlbuff:append(' dialog_'..attr.id..'.setShowAction(function(){ return '..attr.showAction..'.apply(window,arguments);});')
	end
	self.htmlbuff:append('WmWebUI.store("'..attr.id..'",dialog_'..attr.id..');')
	self.htmlbuff:append('})')
	self.htmlbuff:append('</script>')
end

return WmDialog
