// function logMessage(value: any): void {
//     console.log(value);
// }
// logMessage('hello');
// logMessage(100);
// logMessage(false);

// 유니온 타입 (하나 이상의 타입 사용)
function logMessage(value: string | number): void {
    console.log(value);
}
logMessage('hello');
logMessage(100);