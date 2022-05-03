class Person6 {
  public readonly name: string = "MARK";
  private readonly country: string ="Korea"

  public constructor(public _name:string, private age?:number) { //async 불가
    this.country ="Korea"; //초기화되는 영역에서는 가능
  }
  hello() {
    //this.country ="china"; set 불가

  }
}

const pes5:Person6 = new Person6('Mark',39);
console.log(pes5); // Person1 {}
//ps2.age = 39; private로 인해 age호출 x
console.log(pes5.name); //get
//pes5.name = "change"; //set 불가

////////////////////////////////////////////////////////////////////////
function foo(config: {
  readonly bar: number,
  readonly bas: number
}) {
  // ..
}

let config = { bar: 123, bas: 123 };
foo(config);
// `config`가 변경되지 않는다고 확신할 수 있음 🌹

//TypeScript의 타입 시스템은 인터페이스 속성을
//readonly (읽기 전용)으로 지정할 수 있게 해줍니다. 
//이를 통해 함수형 방식이 가능해집니다 (예상되지 않은 상태 변경은 나쁨):

//readonly는 interface와 type 정의에서 모두 사용할 수 있습니다
//클래스의 속성도 readonly로 선언할 수 있습니다. 
//이런 속성은 선언 시점에 초기화하거나 아래 보인 것처럼 생성자(constructor)에서 초기화할 수 있습니다:
