// strictPropertyInitialization : false
class Person2 {
  name!: string;
  age: number;

  constructor(age?:number) { //async 불가
    if (age ===undefined) {
      this.age = 20;
    }else {
      this.age = age;
    }
  }
}

const p2 = new Person2(39);
const p3 = new Person2(20);
console.log(p2); // Person1 {}
p2.age = 39;
console.log(p2.name); // undefined

//생성자 함수가 없으면, 디폴트 생성자가 불린다.
//프로그래머가 만든 생성자가 하나라도 있으면, 디폴트 생성자는 사라진다.
//strict 모드에서는 프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당해야 한다.
//프로퍼티를 선언하는 곳 또는 생성자에서 값을 할당하지 않는 경우에는 ! 를 붙여서 위험을 표현한다.
//클래스의 프로퍼티가 정의되어 있지만, 값을 대입하지 않으면 undefined 이다.
//생성자에는 async 를 설정할 수 없다.