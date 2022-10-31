var i = dialogs.select("请选择要使用的工具", "获取应用包名", "打开应用详情页", "卸载应用", "打开应用", "AutoAnts", "开启极夜");

if (i == -1) {
    exit()
}

switch (i) {
    case 0:
        //获取应用包名
        appName = rawInput("请输入应用名称", "QQ");
        if (appName === null) {
            break;
        }
        packageName = getPackageName(appName);
        toast(packageName);
        setClip(packageName);
        toast("已复制到剪贴板");
        break;
    case 1:
        //打开应用详情页
        appName = rawInput("请输入应用名称", "Autox.js[dev]");
        if (appName === null) {
            break;
        }
        if (getPackageName(appName) != null) {
            openAppSetting(getPackageName(appName));
        } else {
            toast("请输入正确应用名")
        }
        break;
    case 2:
        //卸载应用
        appName = rawInput("请输入应用名称");
        if (appName === null) {
            break;
        }
        packageName = getPackageName(appName);
        if (packageName === null || packageName === "") {
            toast("应用不存在");
        } else if (confirm("确定卸载应用" + packageName + "吗？")) {
            app.uninstall(packageName);
        }
        break;
    case 3:
        //打开应用
        appName = rawInput("请输入应用名称")
        packageName = getPackageName(appName);
        if (appName === null || packageName === null) {
            toast("应用不存在");
            break;
        } else {

            launch(packageName)
        }
        break;
    case 4:
        //antauto
        engines.execScriptFile("AutoAnts.js")
        break
    case 5:
        //launch("com.vivo.settings.VivoSubSettings")
        //launch("com.android.settings")
        app.startActivity({
            action: "android.intent.action.SEND",
            packageName: "com.android.settings",
            className: "com.vivo.settings.VivoSubSettings"
        });
        sleep(700)
        while (!text("亮度").findOnce()) {
            if (click("无障碍")) {
                sleep(300)
            }
            if (click("极暗")) {}

            sleep(500)
        }
        if (text("亮度").findOnce()) {
            bounds(876, 1269, 1020, 1377).click()
        }
        break;
}