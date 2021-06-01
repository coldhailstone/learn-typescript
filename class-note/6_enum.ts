enum Shoes {
    Nike = 10,
    Adidas
}

const myShoes = Shoes.Nike;
console.log(myShoes);   // 0

enum Shoes2 {
    Nike = '나이키',
    Adidas = '아디다스'
}

const myShoes2 = Shoes2.Nike;
console.log(myShoes2);   // 나이키

// 예제
enum Answer {
    Yes = 'Y',
    No = 'N'
}

function askQuestion(answer: Answer): void {
    if (answer === Answer.Yes)
        console.log('정답입니다.');
    if (answer === Answer.No)
        console.log('오답입니다.');
}

askQuestion(Answer.Yes);
// askQuestion('예스');
// askQuestion('y');
// askQuestion('yes');