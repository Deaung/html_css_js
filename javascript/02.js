function 함수명(매개변수1, 매개변수2) {
     // 함수의 본문
    let 리턴데이터 = null;
    console.log('매개변수1');
    console.log('매개변수2');
    console.log('함수명 호출됨');
    return 리턴데이터;
}
// 함수 호출
const 결과 = 함수명();
console.log(결과); // null
const 함수명2 = 함수명;
const 결과2 = 함수명2(10, 20);
console.log(결과2); // null
const 결과3 = 함수명(10);
console.log(결과3); // null


// 익명함수
const 함수명3 = function(매개변수1, 매개변수2) {
    // 함수의 본문
    let 리턴데이터 = null;
    console.log('매개변수1');
    console.log('매개변수2');
    console.log('함수명 호출됨');
    return 리턴데이터;
}

/**
 * 1. 매개변수 하나면 () 생략 가능
 * 2. 함수의 본문이 한 줄이면 {} 생략 가능
 * 3. 함수의 본문이 한 줄이면 return 생략 가능({}생략 안하고 return시 return키워드 필요)
 * 4. 화살표 함수는 this가 바인딩되지 않음
 */
// 화살표 함수
const 함수명4 = (매개변수1, 매개변수2) => {
    // 함수의 본문
    let 리턴데이터 = null;
    console.log('매개변수1');
    console.log('매개변수2');
    console.log('함수명 호출됨');
    return 리턴데이터;
}

const fx1 = () => console.log('fx1 호출')
const fx2 = n => console.log(n, '출력')
const fx3 = n => n + 1;
const fx4 = n => {
    console.log(n, '출력');
    return n + 1;   
}
const fx5 = (n1, n2) => n1 *n2;

fx1(); // fx1 호출
fx2(10); // 10 출력
console.log(fx3(10)); // 11
fx4(20); // 20 출력
fx4(30); // 30 출력
console.log(fx5(10, 20)); // 200

// 함수의 매개변수로 함수를 전달하는 예제
function aa(){
    console.log('aa 함수 호출');
    return 'aa 함수 리턴값';
}


function bb(fxx){
    console.log('bb 함수 호출');
    return fxx; // aa 함수 리턴값
}


function aaa(fxx, fxx2){
    console.log('aaa 함수 호출');
    console.log(fxx); // aa 함수 리턴값
    console.log(fxx2); // bb 함수 리턴값
    return 'aaa함수 리턴값' // aa 함수 리턴값 + bb 함수 리턴값
}

const aa2 = () => console.log('aa2 함수 호출');

const bb2 = fxx => {
    console.log('bb2 함수 호출'); 
    return fxx;
};

const aaa2 = (fxx, fxx2) => {
    console.log('aaa2 함수 호출');
    console.log(fxx);
    console.log(fxx2);
    return 'aaa2함수 리턴값';
}

console.log(aaa(bb(aa), bb(aa)));// aaa 함수 호출

console.log(aaa2(bb2(aa2), bb2(aa2))); // aaa2 함수 호출
