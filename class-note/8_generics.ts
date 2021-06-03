// function logText(text) {
//     console.log(text);
//     return text;
// }
// logText('test');
// logText(1);
// logText(false);

function logText<T>(text: T): T {
    console.log(text);
    return text;
}
logText('하이');
logText<string>('하이');