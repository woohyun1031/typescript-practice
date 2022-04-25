//never
//리턴에 사용됩니다.
//리턴에 사용되는 경우, 아래 3가지 정도의 경우가 대부분입니다.

// Function returning never must have unreachable end point
function error(message: string): never {
    throw new Error(message);
}

// Inferred return type is never
function fail() {
    return error("Something failed");
}

// Function returning never must have unreachable end point
function infiniteLoop(): never {
    while (true) {
    }
}

//never 타입은 모든 타입의 subtype 이며, 모든 타입에 할당 할 수 있습니다.
//하지만, never 에는 그 어떤 것도 할당할 수 없습니다.
//any 조차도 never 에게 할당 할 수 없습니다.
//잘못된 타입을 넣는 실수를 막고자 할 때 사용하기도 합니다.

let a: string = 'hello';

if (typeof a !== 'string') {
    let b: never = a;
}

type Indexable<T> = T extends string ? T & { [index: string]: any } : never;