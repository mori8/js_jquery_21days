/*
Do it! 자바스크립트 + 제이쿼리 입문
2020. 05. 05
04 객체
 */

/*
var addNum = 0;
var subNum = 1000;

var auto_1 = setInterval(function () {
    addNum++;
    console.log("addNum: " + addNum);
}, 3000);

var auto_2 = setInterval(function () {
    subNum--;
    console.log("subNum: " + subNum);
}, 3000);
*/

/*
var addNum = 0;
var auto = setTimeout(function () {
    addNum++;
    console.log(addNum);
}, 5000);
 */

var info = navigator.userAgent.toLowerCase();
var os = null;

if (info.indexOf('windows') >= 0) {
    alert("윈도우");
} else if (info.indexOf('macintosh') >= 0) {
    alert("mac");
} else if (info.indexOf('iphone') >= 0) {
    alert('iphone');
} else if (info.indexOf('android') >= 0) {
    alert('android');
}

var sc_w = screen.width;
var sc_h = screen.height;

document.write("모니터 해상도 너비 :" + sc_w + "px", "<br>");
document.write("모니터 해상도 높이 :" + sc_h + "px", "<br>");