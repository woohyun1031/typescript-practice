//어떤 타입도 가지지 않는 빈 상태를 의미합니다.
//값은 없고 타입만 있습니다.
//소문자입니다.
//일반적으로 값을 반환하지 않는 함수의 리턴 타입으로 사용합니다.
//그 외에는 사용할 일이 거의 없습니다.
//할당이 가능한 값은 undefined 입니다.

function returnVoid(message:string): void {
    console.log(message);
}

returnVoid('리턴이 없다');

let unusable: void = undefined;