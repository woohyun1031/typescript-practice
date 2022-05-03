///////////////////////////////////////////////////////////////

interface Persons {
  name: string;
  age: number;
}

const p: Persons = {
  name: 'Mark',
  age: 35
};

function hellow(person: Persons): void {
  console.log(`안녕하세요! ${person.name} 입니다.`);
}


hellow(p); // 안녕하세요! Mark 입니다.