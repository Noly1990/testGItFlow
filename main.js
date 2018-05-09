
//设置cookie
function setCookie(docu,cname, cvalue, exhours) {
    var d = new Date();
    d.setTime(d.getTime() + exhours * 60 * 60 * 1000);
    var expires = "expires=" + d.toUTCString();
    docu.cookie = cname + "=" + cvalue + "; " + expires;
}

//获取cookie
function getCookie(docu, cname) {
    var cookie=docu.cookie;
    var name = cname + "=";
    var ca = cookie.split(";");
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == " ") c = c.substring(1);
        if (c.indexOf(name) != -1) return c.substring(name.length, c.length);
    }
    return "";
}
//清除cookie
function clearCookie(name) {
    setCookie(name, "", -1);
}