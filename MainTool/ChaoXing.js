sleep(1000);
launchApp("学习通");

//权限
if(!requestScreenCapture()){
    toast("请求截图失败");
    exit();
 }
//获取控件
var xy = function (groups_id, groups_classname, text) {
    return id(groups_id).className(groups_classname).textContains(text).findOne(6000).bounds();
}
var xys = function (groups_classname, text) {
    return className(groups_classname).textContains(text).findOne(6000).bounds();
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
        if(id("btnOk").text("重试").findOnce()){
            var gen=id("btnOk").text("重试").findOnce().bounds()
            click(gen.centerX(),gen.centerY())

        }

        if ((id("start").className("android.widget.ImageView").depth(11).findOnce()) && (!id("btn_check_answer").text("提交").depth(14).findOnce())) {
            break;
        }
    }

}


//课程控制
function videoPlay() {
    sleep(getRandomInt(1))
    var platy = xys("android.widget.Image", "play")
    cli(platy)
    sleep(10000)
    var dot = className("android.view.View").depth("10").findOne().bounds()
    click(dot.centerX(), dot.centerY())
    sleep(getRandomInt(1))
    var speed = xys("android.widget.TextView", "倍速")
    cli(speed)
    sleep(getRandomInt(1))
    bounds(1128, 612, 1920, 757).clickable().click()


    sleep(getRandomInt(1))
    var dot = className("android.view.View").depth("10").findOne().bounds()
    click(dot.centerX(), dot.centerY())

    sleep(getRandomInt(1))

}






//点击我
var i = xy("tabButton", "android.widget.TextView", "我");
cli(i);

//点击课程
var course = xy("tvTitle", "android.widget.TextView", "课程");
cli(course);

//点击课
var ke = xy("tv_name", "android.widget.TextView", "中华传统");
cli(ke);


// 点击章节
var unit = className("android.widget.TextView").text("章节").depth(16).findOne().bounds()
click(unit.centerX(), unit.centerY())


//点击课程
// var num=xy("com.chaoxing.mobile:id/tv_icon","android.widget.TextView");
// cli(num)
sleep(5000)
// var bool=id("com.chaoxing.mobile:id/content").className("android.widget.RelativeLayout").findOne().children()
// log(bool)


while (true) {
    var node = depth("18").className("android.widget.TextView").id("tv_icon").find();
    node.forEach(element => {
        // click(element.text())
        var q = element.bounds().centerX()
        var w = element.bounds().centerY()
        if (w >= 1925) {
            return;
        }
        sleep(getRandomInt(1))
        //点击进入课程
        click(q, w)
        if(className("android.widget.TextView").text("视频").findOnce()){
            var video = xys("android.widget.TextView", "视频")
            cli(video);
        }
        if(className("android.widget.TextView").depth(9).textContains("测验").findOnce()){
            sleep(getRandomInt(1));
            back();
            return;
        }
        
        
        
        var img = captureScreen();
        if(images.detectsColor(img, -8613582, 102, 508)||images.detectsColor(img, -8613582, 100, 625)){    
            sleep(getRandomInt(1));
            back();
            return;
        }else{
            videoPlay();
            timeLong();
        }
        

        back();
        sleep(getRandomInt(1));
        back();
        sleep(getRandomInt(1))

    });
    sleep(getRandomInt(1))
    if (!className("android.support.v7.widget.RecyclerView").scrollable().findOne().scrollForward()) {
        break
    }

}





