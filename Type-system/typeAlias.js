"use strict";
//타입 별칭 (별명)
const str = 'world';
let myStr = 'hello';
myStr = str;
/*

별 의미가 없다..

*/
//Aliasing Union Type
let person = 0;
person = 'Mark';
let another = 0;
another = 'Anna';
/*

1. 유니온 타입은 A 도 가능하고 B 도 가능한 타입
2. 길게 쓰는걸 짧게

*/
//Aliasing Tuple
let persons = ['Mark', 35];
let another2 = ['Anna', 24];
