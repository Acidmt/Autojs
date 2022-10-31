var i = dialogs.select("请选择要使用的工具", "获取应用包名", "打开应用详情页", "卸载应用","打开应用");

if(i == -1){
    alert("没有选择任何工具！");
}

switch(i){
case 0:
    //获取应用包名
    appName = rawInput("请输入应用名称", "QQ");
    if(appName===null){break;}
    packageName = getPackageName(appName);
    toast(packageName);
    setClip(packageName);
    toast("已复制到剪贴板");
    break;
case 1:
    //打开应用详情页
    appName = rawInput("请输入应用名称", "Auto.js");
    if(appName===null){break;}
    if(getPackageName(appName)!=null){
        openAppSetting(getPackageName(appName));
    }else{toast("请输入正确应用名")}
    break;
case 2:
    //卸载应用
    appName = rawInput("请输入应用名称");
    if(appName===null){break;}
    packageName = getPackageName(appName);
    if(packageName ===null||packageName===""){
        toast("应用不存在");
    }else if(confirm("确定卸载应用" + packageName + "吗？")){
        app.uninstall(packageName);
    }
    break;
case 3:
    //打开应用
    appName=rawInput("请输入应用名称")
    if(appName===null){break;}
    launchApp(appName)
}