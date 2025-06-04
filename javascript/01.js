let name = '김대웅'

console.log(name);   

console.log('hello javascript')

name = '김대웅2'
console.log(name);

const age = 20;
console.log(age);
// age = 30; // TypeError: Assignment to constant variable
/**연산자 */
let data1 = 10;
let data2 = '10';
let result = data1 == data2;
console.log(result); // true, 값만 비교
let result2 = data1 === data2;
console.log(result2); // false, 값과 타입을 비교
console.log(typeof data1); // number
console.log(typeof data2); // string
/**not 연산 활용 */
console.log(!1); // false
console.log(!0); // true
console.log(!'a'); 
console.log(!''); // true
console.log(!null); // true
console.log(!!null)

let data = {
    name: '김대웅',
    age: 25 
}


if (data.name === '김대우') {
    console.log('이름이 김대웅입니다.');
}else if(data.age === 25){
    console.log('이름 일치 안하고 나이는 일치.');
}else{
    console.log('이름도 나이도 일치하지 않습니다.');
}