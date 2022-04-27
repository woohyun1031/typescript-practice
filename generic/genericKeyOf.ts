interface Person8 {
  name: string;
  age: number;
}

const person8: Person8 = {
  name: 'Mark',
  age: 36
};

type Keys = keyof Person8;
//어떤 개체에 keyof을 붙이면 그 결과물이 type으로 나오는 데 그 결과물은 uniontype으로 만들어짐

const keys: Keys = "age"; 

function getProperty<T, K extends keyof T>(obj: T, key: K): T[K] {
  return obj[key];
}

function setProperty<T, K extends keyof T>(obj: T, key: K, value: T[K]): void {
  obj[key] = value;
}


console.log(getProperty(person8, 'name'));
// console.log(getProperty(person8, 'fullname'));
setProperty(person8, 'name', 'Anna');
// setProperty(person8, 'name', 27); (X)