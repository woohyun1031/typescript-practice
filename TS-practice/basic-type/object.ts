// create by object literal
type personType = {
  name: string;
  age: number;
}

const person1: personType = {name: 'Mark', age: 39};

// person1 is not "object" type.
// person1 is "{name: string, age: number}" type.


// create by Object.create
const person2 = Object.create({name: 'Mark', age: 39});