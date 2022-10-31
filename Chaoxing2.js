sleep(1000);
launchApp("学习通");
//权限
if (!requestScreenCapture()) {
    toast("请求截图失败");
    exit();
}

var obj = {
    video_normal: 1.0,
    video_quick: 1.5,
    vide_fast: 2.0
}

var isColor = {
    img1: function (img) {
        return images.detectsColor(img, -8613582, 77, 508)
    },
    img2: function (img) {
        return images.detectsColor(img, -8613582, 77, 625)
    },
    img3: function (img) {
        return images.detectsColor(img, -8613582, 77, 570)
    },
    img4: function (img) {
        return images.detectsColor(img, -8613582, 74, 380)
    }
}

var isColorMessage = {
    img1: function (img, colors, x, y) {
        return images.detectsColor(img, colors, x, y)
    }
}

//获取控件
var xy = function (groups_id, groups_classname, text) {
    return id(groups_id).className(groups_classname).textContains(text).findOne(6000).bounds();
}
var xys = function (groups_classname, text,isOnce) {
    this.isOnce=isOnce||false
    if(!isOnce){
        return className(groups_classname).textContains(text).findOne(6000).bounds();
    }else{
        return className(groups_classname).textContains(text).findOnce();
    }
    
}

var likeXY = function (groups_classname, text, depth, isFind) {

    if (groups_classname == null) {
        return textContains(text).depth(depth).findOnce();
    }
    if (depth == null && groups_classname == null) {
        return textContains(text).findOnce();
    }
    if (isFind) {
        return className(groups_classname).textContains(text).find();
    }
    return className(groups_classname).textContains(text).findOnce();
}

function My_buns(num) {
    if (num == obj.video_normal) {
        bounds(1128, 322, 1920, 467).clickable().click()
    } else if (num == obj.video_quick) {
        bounds(1128, 612, 1920, 757).clickable().click()
    } else if (num == obj.vide_fast) {
        bounds(1128, 757, 1920, 902).clickable().click()
    }
}

function getRandomInt(max) {
    let value = max * Math.round(Math.random() * 4 + 7);
    return value * 100;
}
//点击控件
function cli(i) {
    sleep(getRandomInt(1))
    click(i.centerX(), i.centerY());
}
//获取视频长度
function timeLong() {
    while (true) {
        sleep(5000)
        if (id("btn_check_answer").text("提交").depth(14).findOnce()) {
            var quest = id("cb_answer").depth(15).find();
            var send = id("btn_check_answer").depth(14).findOnce().bounds()
            quest.forEach(element => {
                sleep(1100)
                click(element.bounds().centerX(), element.bounds().centerY())
                sleep(2200)
                click(send.centerX(), send.centerY());
                sleep(900)
                var cont = id("btn_next").depth(14).text("继续").findOnce()
                if (cont) {
                    click(cont.bounds().centerX(), cont.bounds().centerY())
                }
                sleep(1400)
            });
        }
        if (id("btnOk").text("重试").findOnce()) {
            var gen = id("btnOk").text("重试").findOnce().bounds()
            click(gen.centerX(), gen.centerY())
            console.log("点击重试")
        }

        if ((id("start").className("android.widget.ImageView").depth(11).findOnce()) && (!id("btn_check_answer").text("提交").depth(14).findOnce())) {
            back();
            sleep(getRandomInt(1))
            sleep(getRandomInt(1))
            break;
        }
    }

}


//课程控制
function videoPlay(x, y) {
    this.x = x || 0
    this.y = y || 0
    sleep(getRandomInt(1));
    // var platy = xys("android.widget.Image", "play");
    if (x == undefined && y == undefined) {
        var platy = xys("android.widget.Button", "播放");
        cli(platy);
    } else {
        click(x, y)
    }
    sleep(10000);
    var dot = className("android.view.View").depth("10").findOne().bounds();
    click(dot.centerX(), dot.centerY());
    sleep(getRandomInt(1));
    var speed = xys("android.widget.TextView", "倍速",true);
    if(speed!=null){
        cli(speed.bounds())
        sleep(getRandomInt(1));
        My_buns(obj.vide_fast);
        sleep(getRandomInt(1));
    }
    

    var dot = className("android.view.View").depth("10").findOnce().bounds();
    click(dot.centerX(), dot.centerY());

    sleep(getRandomInt(1));

}

//找图找色


//重载----------------------------------------------------------------------


//点击我
sleep(getRandomInt(1))
var i = xy("tabButton", "android.widget.TextView", "我");
cli(i);
sleep(getRandomInt(1))
//点击课程
var course = xy("tvTitle", "android.widget.TextView", "课程");
cli(course);
sleep(getRandomInt(1))
//点击课
var ke = xy("tv_name", "android.widget.TextView", "框架技术");
cli(ke);
sleep(getRandomInt(1))

// 点击章节
var unit = className("android.widget.TextView").text("章节").depth(16).findOne().bounds()
click(unit.centerX(), unit.centerY())


//点击课程
// var num=xy("com.chaoxing.mobile:id/tv_icon","android.widget.TextView");
// cli(num)
sleep(8000)
// var bool=id("com.chaoxing.mobile:id/content").className("android.widget.RelativeLayout").findOne().children()
// log(bool)

var arry = [30, 300, 110, 1620]
while (true) {
    sleep(getRandomInt(1));
    var node = depth("18").id("tv_title").find();
    node.forEach(element => {
        // click(element.text())
        sleep(getRandomInt(1));
        var q = element.bounds().centerX()
        var w = element.bounds().centerY()
        if (w >= 1920 || w <= 370) {
            return;
        }
        sleep(getRandomInt(1))
        //点击进入课程
        click(q, w)
        sleep(getRandomInt(1))
        sleep(getRandomInt(1))
        if (className("android.widget.TextView").depth(12).text("视频").findOnce()) {
            var video = xys("android.widget.TextView", "视频")
            cli(video);
        }
        if (likeXY("android.widget.TextView", "测验", 9) || likeXY("android.widget.TextView", "学习课件", null)) {
            sleep(getRandomInt(1));
            back();
            return;
        }
        //任务点数和已完成任务数量
        var task = likeXY("android.widget.TextView", "任务点", 17, true)
        var taskFinish = likeXY("android.widget.TextView", "已完成", 17, true)
        var img = captureScreen();
        sleep(getRandomInt(1));
        // if (task.length <= 1) {
        //     if (isColor.img1(img) || isColor.img2(img) || isColor.img3(img) || isColor.img4(img)) {
        //         sleep(getRandomInt(1));
        //         back();
        //         return;
        //     }
        // } else if (task.length <= 1 && !isColor.img4(img)) {
        //     videoPlay();
        //     timeLong();
        // }

        //循环播放视频
        while(taskFinish.length<task.length) {
            sleep(getRandomInt(1));
            // 截图
            var img = captureScreen();
            var point = findColor(img, -27391, { region: arry });
            if (point && !isColorMessage.img1(img, -8613582, point.x, point.y)) {
                sleep(getRandomInt(1));
                if (point.y < 1500) {
                    videoPlay(point.x + 460, point.y + 318);
                    timeLong();
                    sleep(getRandomInt(1));
                }

            }
            sleep(getRandomInt(1));
            taskFinish = likeXY("android.widget.TextView", "已完成", 17, true)
            className("android.webkit.WebView").scrollable().findOnce().scrollForward()
        }
        back();
        sleep(getRandomInt(1))

    });
    sleep(getRandomInt(1))
    if (!className("android.support.v7.widget.RecyclerView").depth(13).id("rv_knowledge").scrollable().find().scrollForward()) {
        break
    }

}





