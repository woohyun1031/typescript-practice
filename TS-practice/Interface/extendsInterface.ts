interface IPerson2 {
  name: string;
  age?: number;
}

interface Korean extends IPerson2 {
  city: string;
}

const k: Korean = {
  name: '이웅재',
  city: '서울'
}