sleep(3000)
var i=0
while (true) {

    if (depth(24).text("title_877d1ab0").findOnce()) {
        bounds(48, 1590, 510, 1707).click()
        sleep(800)
        i++
        //log(i)
    } else {
       
        press(700, 800,1000)
        sleep(500)
    }
}