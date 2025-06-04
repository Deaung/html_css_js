/**
 *  단축 평가 논리연산
 * 
 *  && 연산 = 앞의 값이 true면 뒤의 값을 출력,false면 앞의 값을 출력
 * 
 *  || 연산 = 앞의 값이 true면 앞의 값을 출력,false면 뒤의 값을 출력
 * 
 *  ?? 연산 = 앞의 값이 null,undefined,false,0,''(빈 문자열)일 경우 뒤의 값을 출력,그 외에는 앞의 값을 출력
 */
const name = '김대웅';

console.log(name && !! '김머웅'); 
console.log(false && name)
console.log(true && name) // 앞쪽의 조건에 따라 결과값이 결정 (true면 뒤쪽의 값이 출력됨,false면 앞쪽의 값이 출력됨) 

console.log( true || false );
console.log( false || 10 ); 
console.log( true || 10 ); // 앞쪽의 조건에 따라 결과값이 결정 (true면 앞쪽의 값이 출력됨,false면 뒤쪽의 값이 출력됨)

// nullish 병합 연산자 (null 체크)
console.log ( null ?? 10)
console.log ( 20 ?? 10);