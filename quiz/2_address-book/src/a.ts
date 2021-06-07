// function fetchItems(): string[] {
//     let items = ['a', 'b', 'c'];
//     return items;
// }
// let result = fetchItems();
// console.log(result);

function fetchItems(): Promise<string[]> {
    let items: string[] = ['a', 'b', 'c'];
    return new Promise((resolve, reject) => {
        resolve(items);
    });
}
let result = fetchItems();
console.log(result);
