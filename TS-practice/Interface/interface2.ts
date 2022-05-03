interface Person2 {
  name: string;
  age?: number;
  [props: string]: any;
}

function hello2(person: Person2): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}

const p1: Person2 = {
  name: 'Mark',
  age: 35,
};

const p2: Person2 = {
  name: 'Anna',
  systers: [
      'Sung',
      'Chan'
  ]
};

const p3: Person2 = {
  name: 'Bokdaengi',
  father: p1,
  mother: p2
};

hello2(p1); // 안녕하세요! Mark 입니다.
hello2(p2); // 안녕하세요! Anna 입니다.
hello2(p3); // 안녕하세요! Bokdaengi 입니다.