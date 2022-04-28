//접근 제어자에는 public, private, protected 가 있다.
//설정하지 않으면 public 이다.
//클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
//private 으로 설정하면 클래스 외부에서 접근할 수 없다.
//자바스크립트에서 private 지원하지 않아 오랜동안 프로퍼티나 메서드 이름 앞에 _ 를 붙여서 표현했다.
class Person3 {
  public name!: string;
  public age: number;

  public constructor(age?:number) { //async 불가
    if (age ===undefined) {
      this.age = 20;
    }else {
      this.age = age;
    }
  }
  public async init() {
    console.log("init");
  }
}

const ps1:Person3 = new Person3(39);
const ps2:Person3 = new Person3(20);
console.log(ps2); // Person1 {}
ps2.age = 39;
console.log(ps2.name); // undefined