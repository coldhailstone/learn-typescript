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