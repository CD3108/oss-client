local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmSwitch = Class(Tag)

--htmlbuff
function WmSwitch:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
end

local function split(s, delim)
    if type(delim) ~= "string" or string.len(delim) <= 0 then
        return
    end

    local start = 1
    local t = {}
    while true do
    local pos = string.find (s, delim, start, true) -- plain find
        if not pos then
          break
        end

        table.insert (t, string.sub (s, start, pos - 1))
        start = pos + string.len (delim)
    end
    table.insert (t, string.sub (s, start))

    return t
end

--attr 所有属性
function WmSwitch:doStartTag(attr)
  --[[for k,v in pairs(attr) do
    self.htmlbuff:append(k,v)
  end--]]
  ---[[属性初始化
  attr.value=attr.value or "true"
  attr.label=attr.label or "On|Off"
  attr.onAction=attr.onAction or "console.log('On')"
  attr.offAction=attr.offAction or "console.log('Off')"
  attr.changeAction=attr.changeAction or "console.log('onChange')"
  attr.isEnable=attr.isEnable or "true"
  local stateStyle=""
  if attr.value=="false"
    then 
    stateStyle="transform:translateX(-100%)"
  end
  self.htmlbuff:append([[
    <div class="value">
        <span class="e_switch e_switch-on" id="]])
  self.htmlbuff:append(attr.id)
  self.htmlbuff:append([[">
          <span class="e_switchOn">]])
  local labelTable=split(attr.label,"|")
  self.htmlbuff:append(labelTable[1])
  self.htmlbuff:append([[</span>
          <span class="e_switchOff">]])
  self.htmlbuff:append(labelTable[2])
  self.htmlbuff:append([[</span>
          <span class="e_switchBar" style="]])
  self.htmlbuff:append(stateStyle)
  self.htmlbuff:append([["></span>
          <input type="hidden" value="]])
  self.htmlbuff:append(attr.value)
  self.htmlbuff:append([[" >
        </span>
     </div>
  ]]);
  
  
  self.htmlbuff:append([[
  <script>
  require(["iScroll","wmSwitch","util"],function(iScroll,wmSwitch) {
  var obj=new wmSwitch("]])
  self.htmlbuff:append(attr.id)
  self.htmlbuff:append([[");
  obj.setOnAction(function(){]])
  self.htmlbuff:append(attr.onAction)
  self.htmlbuff:append([[});
  obj.setOffAction(function(){]])
  self.htmlbuff:append(attr.offAction)
  self.htmlbuff:append([[});
  obj.setChangeAction(function(){]])
  self.htmlbuff:append(attr.changeAction)
  self.htmlbuff:append([[});
  obj.isEnable(]])
  self.htmlbuff:append(attr.isEnable)
  self.htmlbuff:append([[);
  obj.create();
  WmWebUI.store("]])
  self.htmlbuff:append(attr.id)
  self.htmlbuff:append([[",obj);
  });
  </script>
  ]])
end
--结束标签
function WmSwitch:doEndTag()

end
return WmSwitch