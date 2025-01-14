// 인터페이스
interface Developer2 {
    name: string;
    skill: string;
}
interface Person2 {
    name: string;
}
let developer: Developer2;
let person: Person2;
// developer = person;
person = developer;

// 함수
var add = function(a: number) {
    console.log(a);
}
var sum = function(a: number, b: number) {
    return a + b;
}
// sum = add;
// add = sum;

// 제네릭
interface Empty<T> {

}
var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}
var notempty1: NotEmpty<string>;
var notempty2: NotEmpty<number>;
// notempty1 = notempty2;
// notempty2 = notempty1;