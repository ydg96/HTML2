//지역변수

// function showMessage() {
//   let message = "안녕하세요!"; //지역변수
//   alert(message);
// }

// alert(message);
// 함수 내에서 선언한 변수인 지역 변수는 함수 안에서만 접근할 수 있다.

//외부 변수
// let userName = 'John';
// function showMessage() {
//   let message = 'Hello' + userName;
//   alert(message);
// }
// showMessage();
// console.log(message);

// let userName = 'John';
// function showMessage() {
//   userName = 'Bob';
//   let message = 'Hello , ' + userName;
//   alert(message);
// }

// //생각 !!
// alert(userName); //함수 호출 전이므로 John 이 출려됨
// showMessage();
// alert(userName); // 함수에 의해 Bob 값이 변경됨.

let userName = 'John';
function showMessage() {
  let userName = "Bob"; // 외부 변수와 같은 이름을 가진 지역변수
  let message = 'Hello ,' + userName; // Bob 
  alert(message);
}
showMessage();
alert(userName);
// 함수는 외부 변수에 접근하지 않습니다.
