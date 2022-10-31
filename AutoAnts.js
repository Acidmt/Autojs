//随机数
var randTimes = {
    longTime: function(max) {
        //0.7s~1.1s、1.4s~2.2s
        let value = max * Math.round(Math.random() * 4 + 7);
        return value * 100;
    },
    mediumTime: function(max) {

        let value = max * Math.round(Math.random() * +7);
        return value * 100;
    },
    shortTime: function(max) {
        let value = max * Math.round(Math.random() * 4 + 7);
        return value * 100;
    }
}

function powerON() {
    swipe(550, 1800, 550, 700, 500)
    sleep(randTimes.longTime(1))
    click(224, 1200)
    sleep(randTimes.longTime(1))
    click(272, 1500)
    sleep(700)
    click(803, 1900)
    sleep(700)
    //sleep(randTimes.longTime(1))
    click(284, 1900)
    sleep(700)
    click(793, 1500)
    sleep(700)
    click(550, 1500)
    sleep(700)
    click(810, 1900)
    sleep(randTimes.longTime(1))
}

//找控件
var xy = function(groups_deepen, text) {
    return depth(groups_deepen).textContains(text).findOne(2000).bounds();
}

var bool = function(groups_class, groups_depth, groups_id) {
    return className(groups_class).depth(groups_depth).id(groups_id).findOnce();
}

var boolDesk = function(groups_class, groups_depth) {
    return className(groups_class).depth(groups_depth).findOnce();
}

//点击控件
function cli(i) {
    sleep(randTimes.longTime(2))
    click(i.centerX(), i.centerY());
}

//找图着色
function viewImg(color, regionArray) {
    var img = captureScreen();
    point = findColor(img, color, {
        threshold: 4,
        region: regionArray
    });
    if (point) {
        click(point.x, point.y);
        return true;
    }
    return false;
}

//权限
function textExists(str) {
    return textContains(str).exists();
}

function requestScreenCapturePermision() {
    threads.start(function() {
        for (let i = 0; i < 50; i++) {
            if (textExists("立即开始")) {
                click("立即开始");
                threads.currentThread().interrupt();
            }
        }
    });
    if (!requestScreenCapture()) {
        toast("请允许截图权限后重试");
        exit();
    }

}

//退出应用
function excited(appName) {
    //openAppSetting(getPackageName(appName));
    //sleep(randTimes.longTime(1))
    //click("强行停止")
    //sleep(randTimes.longTime(1))
    //click("确定")
    back()
    sleep(randTimes.longTime(1))
    back()
    sleep(randTimes.longTime(1))
    back()
    sleep(randTimes.longTime(1))
    home()
    sleep(randTimes.longTime(1))
    sleep(randTimes.longTime(1))
    launch("com.android.bbk.lockscreen3")
}
/*###########################################################################################*/
//ffc2ff01 能量球

//解锁
while (!device.isScreenOn()) {
    device.wakeUp()

    if (device.isScreenOn()) {
        sleep(randTimes.longTime(1))
        powerON();
    }

}

/*if(device.isScreenOn()&&!boolDesk("android.view.ViewGroup","7")) {
        sleep(randTimes.longTime(1))
        powerON();
    }
*/
setScreenMetrics(1080, 2376)
requestScreenCapturePermision()
sleep(randTimes.longTime(1))
launch("com.eg.android.AlipayGphone");
sleep(randTimes.longTime(2))
var regionArray1 = [125, 565, 800, 500]
var regionArray2 = [810, 1450];
var antico = xy("20", "蚂蚁森林");
cli(antico)
sleep(randTimes.longTime(5))
while (true) {
    //sleep(randTimes.longTime(1))
    sleep(randTimes.longTime(1))
    var i = 0;
    while (true) {
        if (viewImg("#ffc2ff01", regionArray1) && i < 8) {
            click(530, 390)
            sleep(randTimes.longTime(1))
            i++
            continue
        } else {
            if (depth(18).text("装扮中").findOnce()) {
                click(540, 1960)
                sleep(1000)
            }
            break
        }
    }
    if (viewImg("#fffe8600", regionArray2)) {
        sleep(randTimes.longTime(2))
        sleep(randTimes.longTime(1))
        continue
    }
    break

}
excited("支付宝")