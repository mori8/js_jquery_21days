/*
Do it! 자바스크립트 + 제이쿼리 입문
2020. 05. 08
05 함수
 */

// 즉시 실행 함수
(function () {
    var num = 100;
    function menu() {
        num += 100;
        alert(num);
    }
    menu();
}());

(function () {
    var num = 100;
    function menu() {
        alert(num);
    }
}());