// 解锁屏幕
function unlock() {
    if (!device.isScreenOn()) {
        device.wakeUp();
        console.log("唤醒屏幕")
        sleep(500);
        swipe(550, 1800, 550, 700, 500);
        sleep(500)
        var password = "197329"
        for (var i = 0; i < password.length; i++) {
            var p = text(password[i].toString()).findOne().bounds();
            click(p.centerX(), p.centerY());
            sleep(200);
        }
    }
}

unlock()