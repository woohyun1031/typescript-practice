type HelloFunctionGeneric = <T>(message: T) => T;

const helloFunction: HelloFunctionGeneric = <T>(message: T): T => {
  return message;
};

interface HelloFunctionGeneric2 {
  <T>(message:T): TemplateStringsArray;
}

console.log(helloFunction<string>('Hello').length);

//
class Person<T> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person('Mark');
// new Person<string>(38); (X)

class Person7<T, K> {
  private _name: T;
  private _age: K;

  constructor(name: T, age: K) {
    this._name = name;
    this._age = age;
  }
}

new Person7('Mark', 38);