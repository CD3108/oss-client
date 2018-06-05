local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmSegment = Class(Tag)

function WmSegment:doStartTag(attr)
	local texts = self.Split(attr.texts, ",")
	local values = self.Split(attr.values, ",")
	self.htmlbuff:append('<span class="e_segment" id="'..attr.id..'"><span class="e_segmentWrapper">')
	for i=1,#texts do
		self.htmlbuff:append('<span class="e_segmentLi" segValue="'..values[i]..'">'..texts[i]..'</span>')
	end 
	self.htmlbuff:append('</span></span>\n')
	self.htmlbuff:append('<input type="hidden" id="'..attr.name..'" name="'..attr.name..'" value="" />')
	
	
	self.htmlbuff:append('<script type="text/javascript">')
	self.htmlbuff:append('require(["wmSegment"],function(WmSegment) {')
	self.htmlbuff:append('var segment_'..attr.id..' = new WmSegment("'..attr.id..'","'..attr.name..'",false);')
	if attr.selected then
		self.htmlbuff:append('segment_'..attr.id..'.activeItem("'..attr.selected..'");')
	else
		self.htmlbuff:append('segment_'..attr.id..'.activeItemIndex(0);')
	end 
	if attr.action then
		self.htmlbuff:append('segment_'..attr.id..'.setAction(function(){ return '..attr.action..'.apply(window,arguments);})')
	else
		self.htmlbuff:append('segment_'..attr.id..'.setAction()')
	end 
	self.htmlbuff:append('WmWebUI.store("'..attr.id..'",segment_'..attr.id..');')
	self.htmlbuff:append('})')
	self.htmlbuff:append('</script>')
end

function WmSegment:doEndTag()

end

function WmSegment.Split(szFullString, szSeparator)
	local nFindStartIndex = 1
	local nSplitIndex = 1
	local nSplitArray = {}
	while true do
		local nFindLastIndex = string.find(szFullString, szSeparator, nFindStartIndex)
		if not nFindLastIndex then
			nSplitArray[nSplitIndex] = string.sub(szFullString, nFindStartIndex, string.len(szFullString))
			break
		end
		nSplitArray[nSplitIndex] = string.sub(szFullString, nFindStartIndex, nFindLastIndex - 1)
		nFindStartIndex = nFindLastIndex + string.len(szSeparator)
		nSplitIndex = nSplitIndex + 1
	end
	return nSplitArray
end

return WmSegment
