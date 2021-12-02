//형 변환 type conversion

//숫자 1 (true)
//숫자 0 (false)
let value = true;

value = String(value);
console.log(typeof (value));

value = "123";

value = Number(value);
console.log(value + 10);

let age = Number("임의의 문자열 123");
console.log(age); //NaN , 형 변환이 실패 합니다.

//불린형으로 형 변환
let adc = Boolean(1);
let abc2 = Boolean(0);
console.log(abc);
console.log(abc2);

