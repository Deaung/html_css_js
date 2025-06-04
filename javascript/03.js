const student = {
    name: '김대웅',
    age: 25,
}

console.log(student); // { name: '김대웅', age: 25 };
console.log(student.name); // 김대웅
console.log(student.age); // 25
console.log(student['name']); // 김대웅
console.log(student['age']); // 25
const a = 'name';
const b = 'age';
console.log (student[a]);
console.log (student[b]);

student[a] = '이영희';

console.log(student); 
student.name = '김대웅';
student.printName = () => {
    console.log(student.name);
}
student.printName();

const loginButton = {
    text: '로그인',
    value: 'test',
    onclick : () => {console.log(loginButton.text)},
}

loginButton.onclick();
loginButton.onclick = () => {
    console.log('로그인 버튼 클릭')
};
loginButton.onclick(); // 로그인 버튼 클릭

console.log(Object.keys(loginButton));
console.log(typeof(loginButton))

const loginButtonKeys = Object.keys(loginButton);

for (let i = 0; i < loginButtonKeys.length; i++) {
    const key = loginButtonKeys[i];
    console.log(key, loginButton[key]);
}

const loginButtonValues = Object.values(loginButton);

for (let i = 0; i < loginButtonValues.length; i++) {
    console.log (loginButtonValues[i]);
    
}

const loginButtonEntries = Object.entries(loginButton);
console.log(loginButtonEntries);
for (let i = 0; i < loginButtonEntries.length; i++) {
    const entry = loginButtonEntries[i];
    const key = entry[0];
    const value = entry[1];
    console.log(key, value);
}

for (let entry of loginButtonEntries) {
    const key = entry[0];
    const value = entry[1];
    console.log(key, value);
}
