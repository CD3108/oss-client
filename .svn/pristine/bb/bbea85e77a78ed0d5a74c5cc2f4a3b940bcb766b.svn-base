local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmNavBar = Class(Tag)
--[[
function WmNavBar:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
  monitor:debug("------------------------")
 -- monitor:debug("htmlbuff length:"..#self.htmlbuff)
  self.bottoms = {}
end
--]]
function WmNavBar:doStartTag(attr)
	self.id = attr.id
	self.bottoms = {}
	self.htmlbuff:append('<div class="c_navBar" id="'.. self.id ..'">')
end

function WmNavBar:doEndTag()
	self.htmlbuff:append('</div>')
	self.htmlbuff:append('<script type="text/javascript">')
	self.htmlbuff:append('require(["wmNavBar"],function(WmNavBar) {')
	self.htmlbuff:append('var navbar_'..self.id..' = new WmNavBar("'..self.id..'");')
	local groupCount = 0
	for i=1,#self.bottoms do
		local attr = self.bottoms[i]
		if attr.action and attr.action~="" then
			if attr.type == "icon" then
				local icons = self.Split(attr.icons, ",");
				local actions = self.Split(attr.action, ",");
				for i=1,#icons do
					if icons[i]~="" then
						self:setAction(icons[i],actions[i])
					end
				end 
			elseif attr.type == "tab" then
				local actions = self.Split(attr.action, ",");
				for i=1,#actions do
					self.htmlbuff:append('navbar_'..self.id..'.setTabItemAction('..(i-1)..',function(){ return '..actions[i]..'.apply(window,arguments);});')
				end
			elseif attr.type == "tabgroup" then
				if groupCount==0 then
					self.htmlbuff:append('navbar_'..self.id..'.initTabGroup();')
				end
				local actions = self.Split(attr.action, ",");
				for i=1,#actions do
					self.htmlbuff:append('navbar_'..self.id..'.setTabGroupItemAction('..groupCount..','..(i-1)..',function(){ return '..actions[i]..'.apply(window,arguments);});')
				end
				groupCount = groupCount+1
			else
				self:setAction(attr.type,attr.action)
			end
		end 
	end 
	self.htmlbuff:append('WmWebUI.store("'..self.id..'",navbar_'..self.id..');')
	self.htmlbuff:append('});')
	self.htmlbuff:append('</script>')
end

function WmNavBar:setAction(type,action)
	if action and action~="" then
		action = 'function(){ return '..action..'.apply(window,arguments);}'
		if type == "back" then
			self.htmlbuff:append('navbar_'..self.id..'.setBackAction('..action..');')
		elseif type == "add"  then
			self.htmlbuff:append('navbar_'..self.id..'.setAddAction('..action..');')
		elseif type == "delete" then
			self.htmlbuff:append('navbar_'..self.id..'.setDelAction('..action..');')
		elseif type == "date" then
			self.htmlbuff:append('navbar_'..self.id..'.setDateAction('..action..');')
		elseif type == "search" then
			self.htmlbuff:append('navbar_'..self.id..'.setSearchAction('..action..');')
		end
	end
end
function WmNavBar:addBottom(bottom)
  table.insert(self.bottoms, bottom)
end

function WmNavBar.Split(szFullString, szSeparator)
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

return WmNavBar
