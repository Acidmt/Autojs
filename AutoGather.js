sleep(3000)
var p = className("android.view.View").
depth(13).indexInParent(2).
findOnce().bounds()
click(p.centerX(),p.centerY())