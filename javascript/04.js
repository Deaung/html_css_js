/**
 * 배열
 */
const arr1 = [];
const arr2 = new Array();

arr1.push(10);
arr1.push(20);
arr1.push(30);
arr1.push(40);

console.log(arr1);   


arr2.push(10);
arr2.push(20);
arr2.push(30);
arr2.push(40);

console.log(arr2);   
console.log(arr1 === arr2); // false

const obj1 = {key1: 'value1', key2: 'value2'};
const obj2 = {key1: 'value1', key2: 'value2'};

console.log(obj1 === obj2); // false

// json 변환
// js 객체 혹은 배열을 문자열로 변환해주는 JSON.stringify();
// json 문자열을 js 객체 혹은 배열로 변환 JSON.parse();

const json1 = JSON.stringify(arr1);
const json2 = JSON.stringify(arr2);
console.log(json1); // "[10,20,30,40]"
console.log(json2); // "[10,20,30,40]"
console.log(json1 === json2); // true

const json3 = JSON.stringify(obj1);
const json4 = JSON.stringify(obj2);
console.log(json3); // {"key1":"value1","key2":"value2"}
console.log(json4); // {"key1":"value1","key2":"value2"}
console.log(json3 === json4); // true

/**
 * 배열의 기본 내장 함수
 */
const names = ['김대웅', '이영희', '박철수'];
names.push('홍길동'); // .push(); 배열의 끝에 요소 추가
console.log(names.pop()); // .pop(); 배열의 끝에서 요소 제거
names.splice(1, 2, '김머웅'); // .splice(); 배열의 특정 위치에서 요소 제거
console.log(names); // [ '김대웅', '김머웅' ]
const foundName = names.find(n => n === '김대웅'); // .find(); 배열에서 특정 조건을 만족하는 첫 번째 요소를 찾음
console.log(foundName); // 김대웅
console.log(names.includes('김대웅')); // .includes(); 배열에 특정 요소가 포함되어 있는지 확인

const students = [
    { name: '김대웅', age: 25 },
    { name: '이영희', age: 22 },
    { name: '박철수', age: 28 },
    { name: '홍길동', age: 30 },
    { name: '김머웅', age: 27 },
]
console.log(students.find(s => s.name === '박철수'));//{ name: '박철수', age: 28 }

const numbers = [1, 2, 3, 4, 5];
console.log(numbers.filter(n => n % 2 === 0)); // [2, 4] .filter(); 배열에서 특정 조건을 만족하는 모든 요소를 찾음
console.log(students);
console.log(students.filter(student => student.age === 25));
// students.stream().filter(student => student.getAge() == 25).collect(Collectors.toList()); // 김대웅

console.log(numbers.map(n => n * 10))
console.log(students.map(student => {
    if( student.age ===25) {
        return {
            name: student.name,
        }
    }
        return student;
}))



function map(array, fx) {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        newArray.push(fx(array[i], i));
    }
    return newArray;
}
console.log(map(students, student => {
    if( student.age === 30) {
        return {
            name: student.name,
        }
    }
    return student;
}))


const filter = (array, fx) => {
    const newArray = [];
    for (let i = 0; i < array.length; i++) {
        if (fx(array[i])) {
            newArray.push(array[i]);
        }
    }
    return newArray;
}
console.log(filter
    (students, student => student.age === 25))