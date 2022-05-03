interface Person {
  name: string;
  age: number;
  hello(): void;
}

const person1: Person = {
  name: 'Mark',
  age: 35,
  hello: function (): void {
      console.log(this);
      console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

const person2: Person = {
  name: 'Mark',
  age: 35,
  hello(): void {
      console.log(this);
      console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};

const person3: Person = {
  name: 'Mark',
  age: 35,
  hello: (): void => {
      console.log(this);
      console.log(`안녕하세요! ${this.name} 입니다.`);
  }
};
//arrow func에서 this는 객체를 가리키지 않는다.


person1.hello(); // 안녕하세요! Mark 입니다.
person2.hello(); // 안녕하세요! Mark 입니다.
person3.hello(); // 안녕하세요! 입니다.