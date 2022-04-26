function helloString(message: string): string {
  return message;
}

function helloNumber(message: number): number {
  return message;
}

// 더 많은 반복된 함수들 ...

function hello(message: any): any {
  return message;
}

function helloGeneric<T>(message: T): T {
  return message;
}

console.log(hello('Mark').length);
console.log(hello(38).length); // undefined

console.log(helloGeneric('Mark').length);
// console.log(helloGeneric<number>('Mark').length); (X)
console.log(helloGeneric(38).toString());
// console.log(helloGeneric(36).length); (X)