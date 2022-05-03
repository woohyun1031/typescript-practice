//접근 제어자에는 public, private, protected 가 있다.
//설정하지 않으면 public 이다.
//클래스 내부의 모든 곳에 (생성자, 프로퍼티, 메서드) 설정 가능하다.
//private 으로 설정하면 클래스 외부에서 접근할 수 없다.
//자바스크립트에서 private 지원하지 않아 오랜동안 프로퍼티나 메서드 이름 앞에 _ 를 붙여서 표현했다.
class Person4 {
  public constructor(public name:string, private age?:number) { //async 불가
  }
  public async init() {
    console.log("init");
  }
}

const pes1:Person4 = new Person4('3z9');
const pes2:Person4 = new Person4('20');
console.log(pes2); // Person1 {}
//ps2.age = 39; private로 인해 age호출 x
console.log(pes2.name); // undefined