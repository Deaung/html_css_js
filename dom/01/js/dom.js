// const name = '김대웅';
// const age = 25;
// const person = {
//     "name": name,
//     "age": age
// }
// const person2 = {
//     name,
//     age,
//     address : "부산진구",
// }
// console.log({person, person2});


// const title1 = document.getElementById("title")
// console.log({title1});

// const titles = document.getElementsByClassName("title")
// console.log({titles});

// const h3s = document.getElementsByTagName("h3")
// console.log({h3s});

// const d1 = document.getElementById("d1");
// const d2 = document.getElementById("d2");

// console.log(document);

// const title1q = document.querySelector("#title");
// const titlesq = document.querySelectorAll(".title");
// consolekog({title1q, titlesq});
// const h3sq = document.querySelectorAll("h3");
// const d1q = document.querySelector("#d1");
// const d2q = d1q.querySelector("#d2"); 

// const d23 = document.querySelector("#d2");
// console.log({d23})

// d23.innerHTML = "<p>innerText</p>";

const students = [
    {
        name: "김대웅",
        age: 25,
        address: "부산진구"
    },
    {
        name: "이영희",
        age: 30,
        address: "서울시 강남구"
    },
    {
        name: "박철수",
        age: 28,
        address: "대전광역시 유성구"
    },
];

const studentTableBody = document.querySelector(".student-table > tbody");

const studentTrs = students.map((s,index) => {
    return `<tr>
        <td> ${index+1} </td>
        <td> ${s.name}  </td>
        <td> ${s.age} </td>
        <td> ${s.address} </td>
        </tr>`
})

console.log(studentTrs);
console.log(studentTrs.join(""));

studentTableBody.innerHTML = studentTrs.join("");

const tdList = studentTableBody.querySelectorAll("td");
// tdList.forEach(td => {
//     td.setAttribute("style", "border: 1px solid #000;")
// })
tdList.forEach(td => 
    td.style = "border: 1px solid #000;"
)

const studentTable = document.querySelector(".student-table")

studentTable.classList.add("table-border")