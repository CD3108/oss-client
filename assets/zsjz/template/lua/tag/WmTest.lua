monitor:debug("------------------------")
monitor:debug(tostring("10"+1))
monitor:debug(10 ..1)
monitor:debug(tostring(#"123456"));-- # 长度操作符

a={};--所有未初始化的元素的索引都是nil，Lua将nil作为界定数组结尾的标志
a["x"] = 123;
a[0] = 343;
a.y = "yyyy";
monitor:debug(tostring(a["x"]))
monitor:debug(tostring(a.y))
monitor:debug(tostring(a[0]))
monitor:debug(tostring(#a))--#用于返回一个数组和线性表的最后一个索引值（key值，不是value值,只考虑索引值为数字格式的值）
for i=1,10 do
	a[i]=tostring(i*2)
	monitor:debug(a[i])
end--Lua将全局变量存储在table中
monitor:debug(tostring(a[#a]))--打印最后一项值
a[#a] = nil --删除最后一个值
a[#a+1] = "hahha"--添加到列表末尾
monitor:debug(tostring(#a))--
monitor:debug(tostring(#a))
monitor:debug(tostring(#a))
a[100] = "aad"
monitor:debug(tostring(table.maxn(a)))--包含“空隙”的数组的最大索引数

--比较运算符 == ~=（不等于） < > >= <= 不同的类型必定不相等（区分JS）对于table userdata和函数是比较引用是否相等
--只能对两个数字或两个字符串进行比较，字符串以字符次序比较 2<15 true  "2"<"15" false
--and or not  not只返回true或false
monitor:debug(tostring(4 and 5))
monitor:debug(tostring(nil and 13))
monitor:debug(tostring(false and 13))
monitor:debug(tostring(4 or 5))
monitor:debug(tostring(false or 5))
--短路求值
x = x or "eee";
monitor:debug(x)

if type(a)=="table" and a[100] =="aad" then
	monitor:debug("----lalalalal---")
end
h = 5
i = 7
max = h > i and h or i 
monitor:debug(tostring(max))
monitor:debug("------------------------")
local Class = require("util.Class")
local Tag = require("engine.Tag")
local WmTest = Class(Tag)

function WmTest:doStartTag(attr)
  return "123456789"
end

function WmTest:doEndTag()
  return "987654321"
end

return WmTest
