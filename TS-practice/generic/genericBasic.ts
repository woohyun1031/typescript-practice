//Generic 타입을 쓰지 않으면, T 를 추론

//Generic 타입을 쓰면, T 를 검증

function helloBasic<T>(message: T): T {
  return message;
}

console.log(helloBasic<string>('Mark'));
const age = helloBasic(38);
// helloBasic<number>('38'); (X)

//generic array & tuple

function helloArray<T>(messages: T[]): T {
  return messages[0];
}

function helloTuple<T, K>(messages: [T, K]): T {
  return messages[0];
}

console.log(helloArray(['Hello', 'World'])); // string[]
console.log(helloArray(['Hello', 1])); // Array<string | number>

console.log(helloTuple(['Hello', 'World'])); // [string, string]
console.log(helloTuple(['Hello', 1])); // [string, number]
// console.log(helloTuple(['Hello', 'world', 1])); // Error