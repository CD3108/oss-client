local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmProgress = Class(Tag)

function WmProgress:doStartTag(attr)

	if not (attr.id and attr.progress) then
		monitor:error("WmProgress组件 id、progress属性不能为空 ")
		return nil
	end
		
	self.htmlbuff:append('<div class="e_progress" id="'..attr.id..'">')
	if attr.pastTip then
		self.htmlbuff:append([[
			<div class="e_progressUse">
				<div class="e_progressUseValue"></div>
				<div class="e_progressUseTip">]]..attr.pastTip..[[</div>
			</div>
		]])
	end
	self.htmlbuff:append('<div class="e_progressBar"><span></span></div>')
	if attr.totalTip then
		self.htmlbuff:append('<div class="e_progressTotal">'..attr.totalTip..'</div>')
	end
	if attr.spaceTip then
		self.htmlbuff:append([[
			<div class="e_progressSurplus">
				<div class="e_progressSurplusTip">]]..attr.spaceTip..[[</div>
				<div class="e_progressSurplusValue"></div>
			</div>
		]])
	end
	self.htmlbuff:append('</div>\n')

	self.htmlbuff:append('<script type="text/javascript">')
	self.htmlbuff:append('require(["wmProgress"],function(WmProgress) {')
	self.htmlbuff:append('var progress_'..attr.id..' = new WmProgress("'..attr.id..'");')
	self.htmlbuff:append('progress_'..attr.id..'.setProgress("'..attr.progress..'");')
	if attr.level then
		self.htmlbuff:append('progress_'..attr.id..'.setLevel("'..attr.level..'");')
	end
	self.htmlbuff:append('WmWebUI.store("'..attr.id..'",progress_'..attr.id..');')
	self.htmlbuff:append('})')
	self.htmlbuff:append('</script>')
end

function WmProgress:doEndTag()

end

return WmProgress
