auto();
setScreenMetrics(1080,1920);
launchApp("拼多多");
console.show();
main();

function main(){
     
    while(true){
        // 随机获取观看时长
        let viewTime = getRandomInt(10);
        customSleep(viewTime);
        console.log("下拉, 观看时长: " + viewTime);
        next();
    }
}
 
 
/**
 * 下一个短视频
 * 
 * 这里数据都是写死的, 毕竟是脚本刷视频,可以动态化一下 
 */
function next(){
    swipe(device.width/2,1500,device.width/2,200,1000);
}
 
function getRandomInt(max) {
    let value = Math.floor(Math.random() * Math.floor(max));
    // 不足 5 秒, 观看 6 秒
    return value >= 5 ? value : 6;
}
 
function customSleep(time) {
    sleep(time * 500);
}