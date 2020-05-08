/*
Do it! 자바스크립트 + 제이쿼리 입문
2020. 05. 04
04 객체
 */

/*
var tv = {};
tv.color = "White";
tv.price = 300000;
tv.info = function () {
    document.write("tv 색상:" + this.color, "<br>");
    document.write("tv 가격:" + this.price, "<br>");
}

var car = {
    color: "black",
    price: 5000000,
    info: function () {
        document.write("car 색상:" + this.color, "<br>");
        document.write("car 가격:" + this.price, "<br>");
    }
};

document.write("<h1>tv 객체 메서드 호출</h1>");
tv.info();
document.write("<h1>car 객체 메서드 호출</h1>");
car.info();

var d = new Date();
var nowMonth = d.getMonth() + 1;
nowDate = d.getDate();
nowDay = d.getDay();

document.write("<h1>오늘 날짜 정보</h1>");
document.write("현재 월: " + nowMonth, "<br>");
document.write("현재 일: " + nowDate, "<br>");
document.write("현재 요일: " + nowDay, "<br>");

var today = new Date();
var nowYear = today.getFullYear();

var theDate = new Date(nowYear, 11, 31);
var diffDate = theDate.getTime() - today.getTime();  // 1970년 1월 1일로부터 경과된 시간(ms)

var result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
document.write("연말 D-day: " + result + "일 남았습니다.");
 */

/*
document.write("<h1>컴퓨터 가위, 바위, 보 맞추기</h1>");

var game = prompt("가위, 바위, 보 중 선택하세요.", "가위");
var gameNum;
switch (game) {
    case "가위":
        gameNum = 1; break;
    case "바위":
        gameNum = 2; break;
    case "보":
        gameNum = 3; break;
    default:
        alert("잘못 작성했습니다.");
        location.reload();
}

var com = Math.ceil(Math.random()*3);

if (gameNum == com) {
    document.write("맞췄습니다!");
} else {
    document.write("틀렸습니다 ㅠㅠ");
}

 */

/*
var userName = prompt("당신의 영문 이름은?", "");

var upperName = userName.toUpperCase();
document.write(upperName, "<br>");

var userNum = prompt("당신의 연락처는?", "");
var result = userNum.substring(0, userNum.length - 4) + "****";
document.write(result, "<br>");

 */

var userEmail = prompt("당신의 이메일 주소는?", "");
var arrUrl = [".co.kr", ".com", ".net", ".or.kr", ".go.kr", "ac.kr"];

var check1 = false;
var check2 = false;

if (userEmail.indexOf("@") > 0 ) {check1 = true;}

for (i in arrUrl) {
    if (userEmail.indexOf(arrUrl[i]) > 0) {check2 = true;}
}

if (check1 && check2) {
    document.write(userEmail);
} else {
    alert("이메일 형식이 잘못되었습니다.")
    location.reload();
}