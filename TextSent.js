sleep(3000)

var text1= [
    ["培龙", "烤肉饭", "麻辣，蜜汁，黑椒"],
    ["我给你抗大起", "谢谢大哥大哥大哥", "你真是高大威武，帅气，足智多谋又带着英俊潇洒", "你带烤肉饭时候工院彭于晏在世"]
]
var text2=[
["该走了","快快快"],
["生日快乐走起","希望人美心善客服解决一下"]
]
//间隔
var timesOut = 50

while (true) {

    for (var i = 0; i < text1.length; i++) {
        var textArry = text1[i]
        for (var j = 0; j < textArry.length; j++) {
            sleep(timesOut)
            setText(textArry[j])
            sleep(timesOut)
            click("发送")
        }
    }
    i = 0, j = 0
}