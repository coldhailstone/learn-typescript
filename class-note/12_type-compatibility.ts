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