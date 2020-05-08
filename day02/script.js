document.write("매우 재미있는 자바스크립트^.^<br>")
/*
Do it! 자바스크립트 + 제이쿼리 입문
2020. 05. 02
03 제어문
 */

/* code #1
var result = confirm("정말로 회원탈퇴하시겠습니까?");

if (result) {
    document.write("정상적으로 탈퇴 처리되었습니다.");
} else {
    document.write("탈퇴 취소되었습니다.");
}
*/

/* code #2
var id = "kaithape";
var pw = "1234";

var userId = prompt("input id here", "");
var userPw = prompt("input password here", "");

if (userId === id) {
    if (userPw === pw) {
        document.write(userId + "님 반갑습니다!");
    } else {
        alert("비밀번호가 일치하지 않습니다.");
        location.reload();
    }
} else {
    alert("아이디가 일치하지 않습니다.");
    location.reload();
}
*/

/* code #3
var site = prompt("네이버, 다음, 구글 중 즐겨 사용하는 검색 포털 사이트는?");
var url;

switch (site) {
    case "구글": url = "www.google.com"; break;
    case "다음": url = "www.daum.net"; break;
    case "네이버": url = "www.naver.com"; break;
    default: alert("보기 중에 없는 사이트입니다.");
}

if (url) location.href = "http://" + url;
 */

for (var i = 1; i < 10; i++) {
    document.write("반복 " + i + "h<br>");
}