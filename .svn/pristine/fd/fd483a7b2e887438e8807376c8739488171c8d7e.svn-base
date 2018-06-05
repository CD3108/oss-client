local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmNavBarItem = Class(Tag)

function WmNavBarItem:doStartTag(attr)
	if attr.type == "back" then
		self.htmlbuff:append('<div class="left"><div class="back"><span class="e_ico-back"></span>')
		if attr.title then
			self.htmlbuff:append('<span class="text">'..attr.title..'</span>')
		end
		self.htmlbuff:append('</div></div>')
	elseif attr.type == "add" or attr.type == "delete" or attr.type == "date" then
		if attr.position then
			self.htmlbuff:append('<div class="'..attr.position..'">')
		else
			self.htmlbuff:append('<div class="right">')
		end 
		self.htmlbuff:append('<button><span class="e_ico-'..attr.type..'"></span>')
		if attr.text then
			self.htmlbuff:append(attr.text)
		end 
		self.htmlbuff:append('</button></div>')
	elseif attr.type == "title" then
		self.htmlbuff:append('<div class="center"><div class="title">'..attr.text..'</div></div>')
	elseif attr.type == "icon" then
		if attr.position then
			self.htmlbuff:append('<div class="'..attr.position..'">')
		else
			self.htmlbuff:append('<div class="right">')
		end
		self.htmlbuff:append('<div class="icon">')
		local icons = self.parent.Split(attr.icons, ",");
		for i=1,#icons do
			if icons[i]~="" then
				self.htmlbuff:append('<span class="e_ico-'..icons[i]..'"></span>')
			end
		end 
		self.htmlbuff:append('</div></div>')
	elseif attr.type == "tab" then
		if attr.position then
			self.htmlbuff:append('<div class="'..attr.position..'">')
		end 
		self.htmlbuff:append('<div class="tab"><ul>')
		local items = self.parent.Split(attr.items, ",");
		for i=1,#items do
			if i==1 then
				self.htmlbuff:append('<li class="on">'..items[i]..'</li>')
			else
				if items[i]~="" then
					self.htmlbuff:append('<li>'..items[i]..'</li>')
				end
			end
		end 
		self.htmlbuff:append('</ul></div>')
		if attr.position then
			self.htmlbuff:append('</div>')
		end 
	elseif attr.type == "tabgroup" then
		self.htmlbuff:append('<div class="'..attr.position..'">')
		self.htmlbuff:append('<div class="buttonList">')
		self.htmlbuff:append('<div class="tip">'..attr.text..'<span class="e_ico-unfold"></span></div>')
		self.htmlbuff:append('<div class="option" style="display:none;"><ul>')
		local items = self.parent.Split(attr.items, ",");
		for i=1,#items do
			if items[i]~="" then
				self.htmlbuff:append('<li>'..items[i]..'</li>')
			end
		end 
		self.htmlbuff:append('</ul></div></div></div>')
	end
	
	self.parent:addBottom(attr)
	
end

function WmNavBarItem:doEndTag()

end

return WmNavBarItem
