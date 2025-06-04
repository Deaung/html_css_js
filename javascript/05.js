/**
 *  javascript class
 */
class Student {
    name;
    age;

    constructor(name, age){
        this.name = name;
        this.age = age;
    }
}

const newStudent1 = new Student('김대웅', 25);
console.log(newStudent1); // Student { name: '김대웅', age: 25 }
console.log(newStudent1.name)