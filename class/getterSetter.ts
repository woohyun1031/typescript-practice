class Person5 {
  public constructor(public _name:string, private age?:number) { //async 불가
  }
  public async init() {
    console.log("init");
  }
  get name() {
    console.log("get")
    return this._name   
  }
  set name(n:string) {
    console.log("set")
    this._name = n;
  }
}

const pes3:Person5 = new Person5('3z9',39);
const pes4:Person5 = new Person5('20');
console.log(pes4); // Person1 {}
//ps2.age = 39; private로 인해 age호출 x
console.log(pes4.name); //get
pes3.name = "change"; //set