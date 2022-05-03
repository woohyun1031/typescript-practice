//undefined & null are subtypes of all other types.
//설정을 하지 않으면 그렇습니다.
//number 에 null 또는 undefined 를 할당할 수 있다는 의미입니다.
//하지만, 컴파일 옵션에서 `--strictNullChecks`사용하면, null 과 undefined 는 void 나 자기 자신들에게만 할당할 수 있습니다.
//이 경우, null 과 undefined 를 할당할 수 있게 하려면, union type 을 이용해야 합니다.

let naming: string| null  = null;
// strictNullChecks => true
// Type 'null' is not assignable to type 'string'.
//let names: string | null = null; //(X)

// null => null || void, undefined => undefined |                                                                                                                                                                    | void
// Type 'null' is not assignable to type 'undefined'.
//let u: undefined = null; // (X)

let v: void = undefined; // (O)

let union: string | null | undefined = 'str';