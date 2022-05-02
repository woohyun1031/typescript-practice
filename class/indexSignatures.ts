//class => object
// {}mark :'male' , jade: 'male};
//{chloe: 'female', alex:'male'};

class Students {
  [index:string]: "male"|"female";
}

const a = new Students();
a.mark = 'male';
a.jade = 'male';

const b = new Students();
b.chloe = 'female';

//Javascript(및 Typescript)의 Object는 다른 Object의 참조를 유지하기 위해 문자열로 접근
let fooo:any = {};
fooo['Hello'] = 'World';
console.log(fooo['Hello']); // World
