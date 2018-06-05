local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmSlider = Class(Tag)

--htmlbuff
function WmSlider:createNew(obj,htmlbuff)
  self.htmlbuff=htmlbuff
  self.bottoms = {}
end

--attr所有属性
function WmSlider:doStartTag(attr)
  self.attr=attr
  self.htmlbuff:append([[
<div class="c_slide c_slide-col-4 l_mt" id="]])
  self.htmlbuff:append(attr.id)
  self.htmlbuff:append([[">
    <div class="frame">
      <div class="wrapper">
        <ul>]])
end

function WmSlider:doEndTag()
  self.htmlbuff:append([[
        </ul>
      </div>
    </div>
    <div class="page">
    ]])
  for k,v in pairs(self.bottoms) do
    if k==1 then
      self.htmlbuff:append([[
      <div class="on"></div>
      ]]);
    else
      self.htmlbuff:append([[
      <div></div>
      ]]);
    end
  end
  self.htmlbuff:append([[
    </div>
    </div>
  ]])
  
  
  self.htmlbuff:append([[
  <script>   
    require(["wmSlider","util"],function(WmSlider) {
        var wmSlider=new WmSlider("]])
  self.htmlbuff:append(self.attr.id);
  self.htmlbuff:append([[");
        wmSlider.create();]])
  if self.attr.duration then
    self.htmlbuff:append([[    
        wmSlider.setDuration(]])
    self.htmlbuff:append(self.attr.duration)
    self.htmlbuff:append([[);
        wmSlider.play();
    ]])
  end;
  self.htmlbuff:append([[
    WmWebUI.store("]])
  self.htmlbuff:append(self.attr.id)
  self.htmlbuff:append([[",wmSlider);
 });
    </script>
  ]])
end

--[[
require(["wmSlider","util"],function(WmSlider) {
  var wmSlider=new WmSlider("TestSlider01");
  wmSlider.create();
  $("#prev").click(function(){
    wmSlider.prev();
  });
  $("#next").click(function(){
    wmSlider.next();
  });
  $("#goFrame").click(function(){
    wmSlider.active($("#goFrame").val());
  });
  wmSlider.setDuration(2000);
  wmSlider.play();
  var items=wmSlider.getItems();
  items[0].setAlt('ABC');
  for(var i=0;i<items.length;i++){
    console.log(items[i].getUrl());
    console.log(items[i].getAlt());
    var j=i;
    var f=function(){
      console.log("index:"+arguments.callee.i); 
    };
    f.i=i;
    items[i].setAction(f);
  }
  console.log(items[0].setUrl('ABC'))
  console.log(items[0].getUrl());
});
]]

function WmSlider:addBottom(bottom)
  table.insert(self.bottoms, bottom)
end

return WmSlider
