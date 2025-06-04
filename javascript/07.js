// /**
//  * 비구조할당
//  */

// const student = {
//     name: '김대웅',
//     age: 25,
//     address : '서울시 강남구',
// };

// const studentName = student.name;
// const studentAge = student.age;

// const { name, age } = student;
// console.log(studentName)
// console.log(studentAge);
// console.log(name) ;
// console.log(age); 

// function printStudent({ name, address : addr, age }) {
    
// console.log(name) ;
// console.log(addr);
// console.log(age) ;
// }
// printStudent(student)

// /** 객체 구조분해시 주의 */
// // 객체의 속성명이 같으면 변수 이름 바꿔줘야함

// const s1 = {
//     name: '김대웅',
//     age: 25,
// };
// const s2 = {
//     name: '이영희',
//     age: 22,
// };

// const {name:n1 , age :a1} = s1; // s1의 name과 age를 구조분해 할당 
// const (name2:n2 ,name age: a2) = s2; // s2의 name과 age를 구조분해 할당

// // 비구조 할당
// const numbers = [1, 2, 3, 4, 5];
// const [num1, num2, num3] numbers;
// console.log(num1); // 1
// console.log(num2); // 2 
// console.log(num3); // 3

// const useState = (data) => {
//     const dataState= {
//         data:data,
//         student : (d) => console.log(d,'데이터 set')
//     }
//     return [dataState.data, dataState.student];
// }

// const [data, setData] = useState({username : '김대웅', age: 25});
// console.log(data); // { username: '김대웅', age: 25 }
// setData({username : '이영희', age: 22});
