class Person2 {
    private name: string;
    public age: number;
    readonly log: string;
    
    constructor(name: string, age: number) {
        this.name = name;
        this.age = age;
    }
}

// 리액트 예전 문법 - 클래스 기반 코드
class App extends React.Component {

}

// 리액트 최신 문법 - 리액트 훅 기반의 함수형 코드
function App() {
    return <div>Hello World</div>
}

// 뷰
new Vue({
    el: '',
    setup() {

    }
});