local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmSliderItem = Class(Tag)

function WmSliderItem:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
end

function WmSliderItem:doStartTag(attr)
  self.htmlbuff:append([[
    <li><img src="]])
  self.htmlbuff:append(attr.url)
  self.htmlbuff:append([[" alt="]])
  self.htmlbuff:append(attr.alt)
  self.htmlbuff:append([["></li> ]]);
  self.parent:addBottom(attr)
end

function WmSliderItem:doEndTag()
end

return WmSliderItem