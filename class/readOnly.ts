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