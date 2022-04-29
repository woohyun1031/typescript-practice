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
p24.setName();