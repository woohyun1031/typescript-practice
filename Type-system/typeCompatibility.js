"use strict";
//서브 타입 (1)
// sub1 타입은 sup1 타입의 서브 타입이다.
let sub1 = 1;
let sup1 = sub1;
sub1 = sup1; // error! Type 'number' is not assignable to type '1'.
// sub2 타입은 sup2 타입의 서브 타입이다.
let sub2 = [1];
let sup2 = sub2;
sub2 = sup2; // error! Type '{}' is missing the following properties 
//from type 'number[]': length, pop, push, concat, and 16 more.
// sub3 타입은 sup3 타입의 서브 타입이다.
let sub3 = [1, 2];
let sup3 = sub3;
sub3 = sup3; // error! Type 'number[]' is not assignable to type '[number, number]'. 
//Target requires 2 element(s) but source may have fewer.
//--------------------------------------------------------------------------------------------//
//서브 타입 (2)
// sub4 타입은 sup4 타입의 서브 타입이다.
let sub4 = 1;
let sup4 = sub4;
sub4 = sup4;
// sub5 타입은 sup5 타입의 서브 타입이다.
let sub5 = 0;
let sup5 = sub5;
sub5 = sup5; // error! Type 'number' is not assignable to type 'never'.
class Animal {
}
class Dog extends Animal {
    eat() { }
}
// sub6 타입은 sup6 타입의 서브 타입이다.
let sub6 = new Dog();
let sup6 = sub6;
sub6 = sup6; // error! Property 'eat' is missing in type 'SubAnimal' but required in type 'SubDog'.
//--------------------------------------------------------------------------------------------//
//1. 같거나 서브 타입인 경우, 할당이 가능하다. => 공변
// primitive type
let sub7 = '';
let sup7 = sub7;
// object - 각각의 프로퍼티가 대응하는 프로퍼티와 같거나 서브타입이어야 한다.
let sub8 = { a: '', b: 1 };
let sup8 = sub8;
// array - object 와 마찬가지
let sub9 = [{ a: '', b: 1 }];
let sup9 = sub8;
//--------------------------------------------------------------------------------------------//
//2. 함수의 매개변수 타입만 같거나 슈퍼타입인 경우, 할당이 가능하다. => 반병
class Person {
}
class Developer extends Person {
    coding() { }
}
class StartupDeveloper extends Developer {
    burning() { }
}
function tellme(f) { }
// Developer => Developer 에다가 Developer => Developer 를 할당하는 경우
tellme(function dToD(d) {
    return new Developer();
});
// Developer => Developer 에다가 Person => Developer 를 할당하는 경우
tellme(function pToD(d) {
    return new Developer();
});
// Developer => Developer 에다가 StartipDeveloper => Developer 를 할당하는 경우
tellme(function sToD(d) {
    return new Developer();
});
//--------------------------------------------------------------------------------------------//
