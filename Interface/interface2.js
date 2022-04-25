"use strict";
function hello(person) {
    console.log(`안녕하세요! ${person.name} 입니다.`);
}
const p1 = {
    name: 'Mark',
    age: 35,
};
const p2 = {
    name: 'Anna',
    systers: [
        'Sung',
        'Chan'
    ]
};
const p3 = {
    name: 'Bokdaengi',
    father: p1,
    mother: p2
};
hello(p1); // 안녕하세요! Mark 입니다.
hello(p2); // 안녕하세요! Anna 입니다
function hello2(person) {
    console.log(`안녕하세요 ${person.name} 입니다`);
}
