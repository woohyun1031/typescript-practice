"use strict";
function PersonID(id) {
    return id;
}
function getPersonById(id) { }
getPersonById(PersonID('id-aaaaaa'));
//getPersonById('id-aaaaaa'); error
// error TS2345: Argument of type 'string' is not assignable to parameter of type 'PersonID'. 
//Type 'string' is not assignable to type '{ readonly brand: unique symbol; }'.
