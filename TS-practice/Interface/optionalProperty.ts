interface Person3 {
  name: string;
  age?: number;
  [props: string]: any;
}

function helloProperty(person: Person3): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p4: Person3 = {
  name: 'Mark',
  age: 35,
};

const p5: Person3 = {
  name: 'Anna',
  systers: [
      'Sung',
      'Chan'
  ]
};

const p6: Person3 = {
  name: 'Bokdaengi',
  father: p1,
  mother: p2
};

helloProperty(p4); // 안녕하세요! Mark 입니다.
helloProperty(p5); // 안녕하세요! Anna 입니다.
helloProperty(p6); // 안녕하세요! Bokdaengi 입니다.