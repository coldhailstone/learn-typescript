let arr = [
    { gender: 'male', name: 'john' },
    { gender: 'female', name: 'sarah' },
    { gender: 'male', name: 'bone' },
]

const filtered = arr.filter(item => item.gender === 'female');
console.log(filtered);