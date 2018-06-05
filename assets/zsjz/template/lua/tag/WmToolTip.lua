local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmToolTip = Class(Tag)

function WmToolTip:doStartTag(attr)
	self.id = attr.id
	local align = ""
	if attr.align=="right" then
		align = "c_toolTip-arrowRight"
	elseif attr.align=="left" then
		align = "c_toolTip-arrowLeft"
	end
	local position = ""
	if attr.position=="up" then
		position = "c_toolTip-positionBottom"
	end
	self.htmlbuff:append('<div class="c_toolTip '..align..' '..position..'" id="'.. self.id ..'" >')
	self.htmlbuff:append('<div class="pointer"></div>')
	self.htmlbuff:append('<div class="content" >')
	self.htmlbuff:append('<div class="ico"><span class="e_ico-swipe"></span></div>')
	local textAlign = ""
	if attr.textAlign == "center" then
		textAlign = "e_center"
	end
	self.htmlbuff:append('<div class="detail '..textAlign..'">'..attr.text..'</div>')
	if attr.buttonText then
		self.htmlbuff:append('<div class="submit"><span class="e_button">'..attr.buttonText..'</span></div>')
	end
	self.htmlbuff:append('</div></div>')
	self.htmlbuff:append('<script type="text/javascript">')
	self.htmlbuff:append('require(["wmToolTip"],function(WmToolTip) {')
	self.htmlbuff:append('var tooltip_'..self.id..' = new WmToolTip("'..self.id..'");')
	if attr.action then
		self.htmlbuff:append('tooltip_'..self.id..'.setCloseAction(function(){ return '..attr.action..'.apply(window,arguments);});')
	else
		self.htmlbuff:append('tooltip_'..self.id..'.setCloseAction();')
	end
	self.htmlbuff:append('tooltip_'..self.id..'.setBaseElement("'..attr.baseId..'");')
	self.htmlbuff:append('tooltip_'..self.id..'.show();')
	self.htmlbuff:append('WmWebUI.store("'..attr.id..'",tooltip_'..attr.id..');')
	self.htmlbuff:append('})')
	self.htmlbuff:append('</script>')
end

function WmToolTip:doEndTag()

end

return WmToolTip
