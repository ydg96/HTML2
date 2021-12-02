// /*
//  * null 병합 연산자??
//  * 
//  * 최근에 추가됨...
//  * 
//  * a ?? b 의 평가
//  * 
//  * a가 null도 아니고 undefined도 아니면 a
//  * 그외의 경우는 b
//  * 
//  * let x = a ?? b;
//  * 
//  * x = (a !== null && a !== undefined) ? a : b;
//  *  
//  */

let firstName = null;
let lastName = null;
let nickName = "바이올렛";

let myName = firstName ?? lastName ?? nickName;
console.log(myname);

