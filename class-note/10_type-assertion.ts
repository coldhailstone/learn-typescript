// 타입 단언 (type assertion)
let c;
c = 20;
c = 'a';
let b = c as string;

// DOM API 조작
// <div id='app'>hi</div>

let div = document.querySelector('div');
if (div) {
    div.innerText
}