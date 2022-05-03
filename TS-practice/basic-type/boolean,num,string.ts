let isDone: boolean = false;

isDone = true;
console.log(typeof isDone);

//let isNotOk: boolean = new Boolean(true);

///

//Number/number
//JS와 같이, TypeScript의 모든 숫자는 부동 소수점 값
let decimal:number = 6;
let hex: number = 0xf00d;
let binary:number = 0b1010;
let octal:number = 0o744;
let NotANumber: number = NaN;
let undersoreNum:number = 1_000_000;

//Template string
//행에 걸쳐 있거나, 표현식을 넣을 수 있는 문자열
//이 문자열은 backtick (= backquote) 기호에 둘러쌓여 있습니다.
//포함된 표현식은 `${ expr }` 와 같은 형태로 사용합니다.

let fullName: string = `Bob Bobbington`;
let age: number = 38;

let sentence1: string = `Hello, my name is ${ fullName }.
    I'll be ${ age + 1 } years old next month.`;

// template string 을 사용하지 않을 경우
let sentence2: string = "Hello, my name is " + fullName + ".\n\n" +
    "I'll be " + (age + 1) + " years old next month.";

