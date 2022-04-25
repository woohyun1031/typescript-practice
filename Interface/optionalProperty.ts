interface Person {
  name: string;
  age?: number;
  [props: string]: any;
}

function helloProperty(person: Person): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person = {
  name: 'Mark',
  age: 35,
};

const p2: Person = {
  name: 'Anna',
  systers: [
      'Sung',
      'Chan'
  ]
};

const p3: Person = {
  name: 'Bokdaengi',
  father: p1,
  mother: p2
};

helloProperty(p1); // 안녕하세요! Mark 입니다.
helloProperty(p2); // 안녕하세요! Anna 입니다.
helloProperty(p3); // 안녕하세요! Bokdaengi 입니다.