ES2015 (ES6)

function Person(name, age) {
    this.name = name;
    this.age = age;
}
const capt5 = new Person('캡틴', 100);

class Person {
    name;
    age;

    constructor(name, age) {
        console.log('생성 되었습니다.');

        this.name = name;
        this.age = age;
    }
}

const seho5 = new Person('세호', 30);
console.log(seho5);