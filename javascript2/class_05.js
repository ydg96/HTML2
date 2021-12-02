// 자바 스크립트 자료형
//8가지 기본 자료형

let message = "hello";
message = 1234567;

console.log(message);
//변수는 어떤 순간에 문자열일 수 있고 다른 순간엔 숫자가 될 수도 있다.

//1.숫자형(nunmber type)
let n = 123;
n = 12.345;
// * , / , + , - 

// 특수 숫자 값 
//Infinuty // (무한대)
console.log(1 / 0);
// NaN
console.log("숫자가 아님" / 2);

//2.BigInt (숫자 뒤에 n 점미사를 붙여준다)
const bigNumber = 12321421343151345325431546544315453254n;
console.log(bigNumber);

//3.문자형
let str = "Hello";
let str2 = 'hello';
let str3 = `Hello`;

console.log(`this return value ${1 + 100}`);
console.log("this is value : " + 100);

//4.불린형(논리형)
let check = true;
let check = false;

let isGreater = 4 > 1;
console.log(isGreater);

//5.null 값
let age = null; //존재하지 않는 값 , 알 수 없는 값
console.log(age);

//6. undefined : 값이 할당되지 않은 상태를 나타낸다.
let age2;
console.log(age2);

// 6. 객체(object) --> 특수한 자료형

//7.symbol --> 객체의 고유한 식별자를 만들 때 사용합니다.

//8.typeof
console.log("-------------------------");
console.log(typeof (undefined));
console.log(typeof (0));
console.log(typeof (10n));
console.log(typeof (true));
console.log(typeof ("foo"));
console.log(typeof (Math));
console.log(typeof (null));

