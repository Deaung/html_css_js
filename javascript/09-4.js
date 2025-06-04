/**
 *  async( 비동기 함수 정의 키워드 ), await(비동기 함수 동기)
 * await은 async 함수 내에서만 사용가능(전역호출 가능)
 */
async function fx(isOk) {
    console.log("fx1 호출")
    if (isOk) throw new Error("❗❗❗❗❗❗❗❗오류 데이터 응답❗❗❗❗❗❗❗❗");
    return "정상 리턴"
}

const fx2 = async (isOk) => {
    console.log("fx2 호출");
    if (isOk) throw new Error("❗❗❗❗❗❗❗❗오류 데이터 응답❗❗❗❗❗❗❗❗");
    return "정상 리턴";
}

async function main() {
    let r1 = null; 
    fx(false)
    .then(result => r1 = result)
    .then(() => console.log(r1))
    .catch(error => console.error(error));

    try{
        let r2 = await fx2(false)
        console.log("r2:", r2);
    } catch(error) {
        console.error(error);
    }
}

main();