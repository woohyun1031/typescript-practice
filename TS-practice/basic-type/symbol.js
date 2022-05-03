"use strict";
//Symbol
//프리미티브 타입의 값을 담아서 사용합니다.
//고유하고 수정불가능한 값으로 만들어줍니다.
//그래서 주로 접근을 제어하는데 쓰는 경우가 많았습니다.
let sym = Symbol();
let obj = {
    [sym]: "value"
};
console.log(obj[sym]); // "value"
