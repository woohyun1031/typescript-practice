abstract class AbstractPerson {
  protected _name: string = 'Mark';

  abstract setName(name: string): void;
}

class Personn extends AbstractPerson {
  setName(name:string): void {
    this._name = name;
  }
}

const p24 = new Personn();
p24.setName("name");
//abstract 

//Animal 클래스가 분명 존재하지만, 단순히 '동물’을 만든다는 것은 조금 이상한 일이다. 
//동물은 추상적인 개념이기 때문에 Animal 객체를 생성하는 일이 있어서는 안 된다. 
//이럴 때 추상화(Abstraction)를 통해 new Animal(...);과 같은 명령을 미연에 방지할 수 있다. 
// Animal.js
class Animal {
  public name: string = "kim"
  constructor(name:string) {
      this.name = name;
  }
  
  getName() {
      return this.name;
  }
  
  // Abstract
  makeNoise() {
      throw new Error('makeNoise() must be implement.');
  }
}

export default Animal;
