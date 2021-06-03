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
// function logTextLength<T>(text: T[]): T[] {
//     console.log(text.length);
//     text.forEach(text => {
//         console.log(text);
//     });
//     return text;
// }
// logTextLength<string>(['hi', 'abc']);

// 제네릭의 타입 제한2 - 정의된 타입 이용하기
interface LengthType {
    length: number;
}
function logTextLength<T extends LengthType>(text: T): T {
    console.log(text.length);
    return text;
}
logTextLength('abc');
// logTextLength(10);
logTextLength({ length: 10 });
// logTextLength({ test: 10 });

// 제네릭 타입 제한3 - keyof
interface ShoppingItem {
    name: string;
    price: number;
    stock: number;
}
function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}
// getShoppingItemOption<number>(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption('name');
