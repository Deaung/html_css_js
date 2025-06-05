
    let studentList = [];
function app() {


    const appInfo = {
        title: "component Study",
        date: new Date().toLocaleDateString,
        author : 'deaung',
    }
    return `
        <div>
            <h1>제목 :${appInfo.title}</h1> 
            <h1>작성일 :${appInfo.date}</h1> 
            <h1>작성자 :${appInfo.author}</h1> 
            ${studentRegister()}
        </div>`;
}