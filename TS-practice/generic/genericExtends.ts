class Person6<T extends string | number> {
  private _name: T;

  constructor(name: T) {
    this._name = name;
  }
}

new Person6('Mark');
new Person6(38);
// new Person6(true); // T 가 string 또는 number 를 상속받기 때문에 boolean 은 X