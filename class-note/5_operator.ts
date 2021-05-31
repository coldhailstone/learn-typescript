// function logMessage(value: any): void {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 유니온 타입 (하나 이상의 타입 사용)
let seho3: string | number | boolean;
function logMessage(value: string | number): void {
    if (typeof value === 'number')
        value.toLocaleString();
    else if (typeof value === 'string')
        value.toString();
    else
        throw new TypeError('value must be string or number');
}
logMessage('hello');
logMessage(100);

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
    age: number;
}

// 유니온
// function askSomeone(someone: Developer | Person) {
//     someone.name;
//     // someone.skill
//     // someone.age
// }
// 인터섹션
function askSomeone(someone: Developer & Person) {
    someone.name;
    someone.skill
    someone.age
}

// let seho4: string | number | boolean;
// let capt4: string & number & boolean;