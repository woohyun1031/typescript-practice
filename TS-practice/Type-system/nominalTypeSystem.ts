//typescript는 따르지 않는다
type PersonID = string & { readonly brand: unique symbol };

function PersonID(id: string): PersonID {
  return id as PersonID;
}

function getPersonById(id: PersonID) {}

getPersonById(PersonID('id-aaaaaa'));
//getPersonById('id-aaaaaa'); error

// error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonID'. 
//Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.