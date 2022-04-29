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