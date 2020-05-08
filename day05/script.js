/*
Do it! 자바스크립트 + 제이쿼리 입문
2020. 05. 057
05 함수
 */

/*
// 일반 함수 정의 방식 (hoisting 지원)
testFunc1(); // hoisting

function testFunc1() {
    document.write("Hello, world!", "<br>");
}

// 익명 함수 정의 방식 (hoisting 지원하지 않음)
// testFunc2(); : error

var testFunc2 = function () {
    document.write("Hello, Suyeon!");
};

testFunc2();
 */

/*
var rightId = "suyeon";
var rightPw = "1234";

function login(id, pw) {
    if (id === rightId) {
        if (pw === rightPw) {
            document.write(id + "님 방문을 환영합니다.");
        } else {
            alert("올바르지 않은 비밀번호입니다.");
            location.reload();
        }
    } else {
        alert("올바르지 않은 아이디입니다.");
        location.reload();
    }
}

var userId = prompt("아이디를 입력하세요.", "");
var userPw = prompt("비밀번호를 입력하세요.", "");

login(userId, userPw);
 */

/*
function sum() {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}

document.write(sum(10, 20, 30, 40));
 */

var num = 1;
function gallery(direct) {
    if (direct) {
        if (num === 5) return;
        num++;
    } else {
        if (num === 1) return;
        num--;
    }

    var imgTag = document.getElementById("photo");
    imgTag.setAttribute("src", "images/pic"+num+".jpg");
}