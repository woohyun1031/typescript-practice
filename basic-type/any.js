"use strict";
//어떤 타입이어도 상관없는 타입입니다.
//이걸 최대한 쓰지 않는게 핵심입니다.
//왜냐면 컴파일 타임에 타입 체크가 정상적으로 이뤄지지 않기 때문입니다.
//그래서 컴파일 옵션 중에는 any 를 써야하는데 쓰지 않으면 오류를 뱉도록 하는 옵션도 있습니다.
//noImplicitAny
function returnAny(message) {
    console.log(message);
}
const any1 = returnAny('리턴은 아무거나');
any1.toString();
//The any will continue to propagate through your objects:
//any 는 계속해서 개체를 통해 전파됩니다.
//After all, remember that all the convenience of any comes at the cost of losing type safety.
//결국, 모든 편의는 타입 안전성을 잃는 대가로 온다는 것을 기억하십시오.
//Type safety is one of the main motivations for using TypeScript and you should try to avoid using any when not necessary.
//타입 안전성은 TypeScript 를 사용하는 주요 동기 중 하나이며 필요하지 않은 경우에는 any 를 사용하지 않도록 해야합니다.
let looselyTyped = {};
let d = looselyTyped.a.b.c.d;
//  ^ = let d: any
function leakingAny(obj) {
    const a = obj.num;
    const b = a + 1;
    return b;
}
const c = leakingAny({ num: 0 });
c.indexof("0");
