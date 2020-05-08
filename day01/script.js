document.write("매우 재미있는 자바스크립트^.^<br>")
/*
Do it! 자바스크립트 + 제이쿼리 입문
2020. 05. 01
01 자바스크립트 시작하기 ~ 02 자바스크립트 기초 문법
 */

// Number
var s = 100;
var t = Number(500);

// Boolean
var a = true;
var b = Boolean("Hello");

// null & typeof
var x = null;
document.write(typeof x, "<br>"); // object

// 문자 결합 연산자
// str + str = str
var str1 = "Hello, ";
var str2 = "javascript";
var str = str1 + str2;
document.write(str, "<br>"); // Hello, javascript

// str + num = str
var num1 = 10000;
var str3 = " emerald pools";
var str4 = num1 + str3;
document.write(str4, "<br>", typeof str4, "<br>"); // 10000 emerald pools, string

// == and ===
var x = 10;
var y = "10";
var result1 = (x == y);  // true
var result2 = (x === y); // false
document.write(result1, "<br>", result2);

