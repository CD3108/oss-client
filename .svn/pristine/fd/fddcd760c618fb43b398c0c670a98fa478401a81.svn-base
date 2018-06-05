local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmTabItem = Class(Tag)

function WmTabItem:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
end

function WmTabItem:doStartTag(attr)
  self.htmlbuff:append('<div class="page">')
  self.parent:addChildrenAttr(attr)
end

function WmTabItem:doEndTag()
  self.htmlbuff:append('</div>')
end

return WmTabItem
