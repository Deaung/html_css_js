const student = {
    name: '김대웅',
    age: 25,
    address: '서울시 강남구',
    phone: '010-1234-5678',
}

const {name,address} = student;
console.log(name, address); // 김대웅

// rest 연산자
const {age, phone, ...rest} = student;
console.log(age, phone, rest)

const numbers = [1, 2, 3, 4, 5];
const[n1, n2, ...ns] = numbers;
console.log(n1, n2,ns); // 1 2

//spread 연산자
const newStudent = {
    ...student
}
console.log(newStudent); // { name: '김대웅', age: 25, address: '서울시 강남구', phone: '010-1234-5678' }

const newNumbers = [...numbers, 6, 7, 8];
console.log(newNumbers); // [ 1, 2, 3, 4, 5, 6, 7, 8 ]

let names =[];
function addName(name) {
    names.push(name);
}

let obj = {
    data1: 'data1',
    data2: 'data2',
}
function addProps(props){
    obj ={
        ...obj,
        ...props
    }
}