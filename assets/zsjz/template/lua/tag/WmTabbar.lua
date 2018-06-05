local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmTabbar = Class(Tag)

function WmTabbar:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
  self.childrenAttr = {}
  self.index = 0; 
end

function WmTabbar:doStartTag(attr)
  if attr.id then
    self.id = attr.id
  else
    self.id = "tabbar"..os.time()
  end
  if attr.active then
    self.active = tonumber(attr.active)
  else
    self.active = 0
  end

  self.htmlbuff:append('<div id="',self.id,'">','\n')
  self.htmlbuff:append([[
  <div class="m_nav">
  <div class="wrapper">
  ]])
end

function WmTabbar:doEndTag()
  self.htmlbuff:append([[
  </div>
  </div>
  <div class="m_footer">
  <ul>
  ]])
  for key, value in ipairs(self.childrenAttr) do
    if value.active=="true" or value._index==self.active then
      self.htmlbuff:append('<li class="on">','\n')
    else
      self.htmlbuff:append('<li>','\n')
    end
    self.htmlbuff:append('<span class="',value.icon,'"></span>','\n')
    self.htmlbuff:append('<div class="text">',value.label,'</div>','\n')
    self.htmlbuff:append('</li>','\n')
  end
  self.htmlbuff:append([[
  </ul>
  </div>
  </div>
  ]])
  
  self.htmlbuff:append([[
  <script type="text/javascript">
    require(["wmTabbar","wmWebUI"],function(WmTabbar,WmWebUI) {
  ]])
  self.htmlbuff:append('  var wmTabbar = new WmTabbar("',self.id,'");','\n')
  self.htmlbuff:append('  wmTabbar.create();','\n')
  for key, value in ipairs(self.childrenAttr) do
    if value.action then
      self.htmlbuff:append('wmTabbar.addListener(',value._index,',function(){',value.action,';});','\n');
    end
  end
  self.htmlbuff:append([[
  });
   </script>
  ]])
end

function WmTabbar:addBottom(bottom)
  table.insert(self.bottoms, bottom)
end

function WmTabbar:addChildrenAttr(childrenAttr)
  childrenAttr._index = self.index
  self.index = self.index + 1
  table.insert(self.childrenAttr, childrenAttr)
end

return WmTabbar
