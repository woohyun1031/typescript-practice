// class Person {}

// const p1 = new Person();

// console.log(p1);

class Person {
  name: string;

  constructor(name: string) { //밖에서
    this.name = name; //this는 생성된 object 그 자신
  }
}

const p1 = new Person('Mark');

console.log(p1);

//class 키워드를 이용하여 클래스를 만들 수 있다.
//class 이름은 보통 대문자를 이용한다.
//new 를 이용하여 class 를 통해 object 를 만들 수 있다.
//constructor 를 이용하여 object 를 생성하면서 값을 전달할 수 있다.
//this 를 이용해서 만들어진 object 를 가리킬 수 있다.
//JS 로 컴파일되면 es5 의 경우 function 으로 변경된다.