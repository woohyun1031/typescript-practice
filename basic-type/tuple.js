"use strict";
let x;
x = ["hello", 39]; //(o)
x = [10, 'Mark'];
x[3] = 'world';
//Tuple type '[string, number]' of length '2' has no element at index '3
const person = ["mark", 39];
const [first, second, third] = person;
//Tuple type '[string, number]' of length '2' has no element at index '2'
