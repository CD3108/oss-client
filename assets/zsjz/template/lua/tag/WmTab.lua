local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmTab = Class(Tag)

function WmTab:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
  self.childrenAttr = {}
  self.index = 0; 
end

function WmTab:doStartTag(attr)
  if attr.id then
    self.id = attr.id
  else
    self.id = "tab"..os.time()
  end
  self.htmlbuff:append('<div id="',self.id,'" class="c_tab">','\n')
  self.htmlbuff:append('<div class="title"><ul>','\n')
  self.pos = self.htmlbuff:currPos()
  self.startPos = self.htmlbuff:length()+1
  self.htmlbuff:append([[
    </ul>
    </div>
    <div class="pages">
  ]])
end

function WmTab:doEndTag()
  self.htmlbuff:append([[
    </div>
    </div>
    <script type="text/javascript">
    require(["wmTab","wmWebUI"],function(WmTab,WmWebUI) {
  ]])
  self.htmlbuff:append('	var wmTab = new WmTab("',self.id,'");','\n')
  local StringBuilder = require("util.StringBuilder")
  self.htmlbuff:append('	wmTab.create();','\n')
  
  local buff = StringBuilder:new()
  for key, value in ipairs(self.childrenAttr) do
    if value.active=="true" then
      buff:append('<li class="on">',value.title,'</li>','\n')
      self.htmlbuff:append('wmTab.active(',value._index,');','\n');
    else
      buff:append('<li>',value.title,'</li>','\n')
    end
    
    if value.action then
      self.htmlbuff:append('wmTab.addListener(',value._index,',function(){',value.action,';});','\n');
    end
  end

  self.htmlbuff:append([[
  	});
  </script>
  ]])
  self.htmlbuff:insertTo(self.pos,buff:toString())
end

function WmTab:addChildrenAttr(childrenAttr)
  childrenAttr._index = self.index
  self.index = self.index + 1
  table.insert(self.childrenAttr, childrenAttr)
end

return WmTab
