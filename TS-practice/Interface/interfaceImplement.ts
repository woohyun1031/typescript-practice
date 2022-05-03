interface IPerson {
  name: string;
  age?: number;
  hello(): void;
}

class Person implements IPerson {
  name: string;

  constructor(name: string) {
      this.name = name;
  }

  hello(): void {
      console.log(`안녕하세요! ${this.name} 입니다.`);
  }
}

const person = new Person('Mark');
person.hello(); // 안녕하세요! Mark 입니다.