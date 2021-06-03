// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('test');
// logText(1);
// logText(false);

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
// logText('하이');
// logText<string>('하이');

// function logText(text: string) {
//     console.log(text);
//     return text;
// }
// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

// function logText(text: string | number) {
//     console.log(text);
//     return text;
// }
// const a = logText('test');
// logText(1);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
const str2 = logText<string>('a');
str.split('');
const login = logText<boolean>(true);

// 인터페이스에 제네릭을 선언하는 방법
// interface Dropdown {
//     value: string;
//     selected: boolean;
// }
interface Dropdown<T> {
    value: T;
    selected: boolean;
}
const obj2: Dropdown<number> = { value: 10, selected: false };

// 제네릭의 타입 제한
function logTextLength<T>(text: T[]): T[] {
    console.log(text.length);
    text.forEach(text => {
        console.log(text);
    });
    return text;
}
logTextLength<string>(['hi', 'abc']);