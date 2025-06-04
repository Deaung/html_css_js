function requestBackend(isOk) {
    if (isOk) {
    return {status: 200,body: "정상적인 데이터 응답❗"};
    }
    return {status: 400, body: "❗❗❗❗❗❗❗❗오류 데이터 응답❗❗❗❗❗❗❗❗"};
}

const p1 = new Promise((resolve, reject) => {
    console.log("p1 프로미스 생성");
    const { status, body } = requestBackend(true);
    if (status === 200) {
        resolve(body);
    } else if (status === 400) {    
        reject(new Error(body));
    }
});

p1.then(responseBody => {
    console.log("p1", responseBody);
    return "p1 then에서 반환된 값";
}).then(result =>{
    console.log("p1-2:", result)
    return "p1-2 then에서 반환된 값";
}).then(result =>{
    console.log("p1-3:", result)
})
.catch(error => { 
    console.error("p1", error);
});


const p2 = new Promise((resolve, reject) => {
    console.log("p2 프로미스 생성");
    const { status, body } = requestBackend(false);
    if (status === 200) {
        resolve(body);
    } else if (status === 400) {    
        reject(new Error(body));
    }
});

p2.then(responseBody => {
    console.log("p2", responseBody);
}).catch(error => { 
    console.error("p2", error);
});

const p3 = new Promise((resolve, reject) => {
    console.log("p3 프로미스 생성");
    const { status, body } = requestBackend(true);
    if (status === 200) {
        resolve(body);
    } else if (status === 400) {    
        reject(new Error(body));
    }
});

p3.then(responseBody => {
    console.log("p3:", responseBody);
}).catch(error => { 
    console.error("p3:", error);
});

// 등록된 순서에 따라 실행됨
// .then() 이 .chatch() 보다 먼저 실행되는 이유는
// .then()은 프로미스가 성공적으로 완료되었을 때 실행되는 콜백 함수를 등록하는 반면,    
// .catch()는 프로미스가 실패했을 때 실행되는 콜백 함수를 등록하기 때문입니다.
// 따라서 프로미스가 성공적으로 완료되면 .then()이 먼저 실행되고,
// 프로미스가 실패하면 .catch()가 실행됩니다.
// 프로미스는 비동기 작업을 처리하기 위한 객체로, 비동기 작업의 성공 또는 실패를 나타냅니다.
