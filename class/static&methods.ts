class Persons {
  private static CITY = "Seoul";

  public static hello() {
    console.log('hihi',Persons.CITY);
  }
}

Persons.hello();
const person1 = new Persons();
const person2 = new Persons();