// setTimeout(() => console.log(1),3000);
// setTimeout(() => console.log(2),2000); 
// setTimeout(() => console.log(3),1000);

// const p = new Promise((resolve)=> {
//     console.log('promise 실행');
//     resolve();
// }).then(() => 
//     console.log('promise then 실행')
// ).then(() => {
//     console.log('promise then2 실행')
// });

// new Promise((resolve) => {
//     console.log('promise2 실행');
//     resolve();
// }).then(() => {
//     console.log('promise2 then 실행')
// });

/**
 * *  Promise
 * *  Promise는 비동기 작업을 처리하기 위한 객체로, 비동기 작업의 성공 또는 실패를 나타냅니다.
 */
function thenFx1(result) {
    console.log(3);
    console.log("thenFx1(result)", result);
    return 200;
}

function thenFx2(result) {
    console.log(4);
    console.log("thenFx2(result)", result);
}

function promiseFx(resolve, reject) {
    console.log(2);
    // resolve(100);
    reject(new Error("❗❗❗❗❗❗❗❗❗에러 발생❗❗❗❗❗❗❗❗❗"))
}

console.log(1);
const p1 = new Promise(promiseFx);
console.log("--1--")
const p2 = p1.then(thenFx1);
console.log("--2--")
const p3 = p2.then(thenFx2);
console.log("--3--")
const e1 = p3.catch(error => console.error(error))
const p4 = new Promise(promiseFx);
console.log("--4--")
const p5 = p4.then(thenFx1);
console.log("--5--")
const p6 = p5.then(thenFx2);
console.log("--6--")
const e2 = p6.catch(error => console.error(error))