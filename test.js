sleep(3000)
depth(13).className("android.view.View").click()
sleep(2000)

var starts=text("立即开启").depth(17).className("android.view.View").findOnce().bounds()
click(starts.centerX(), starts.centerY())
//1毫秒～0.22