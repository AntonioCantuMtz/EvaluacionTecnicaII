let array1 = [{id: 1, name: "name1"}, {id: 2, name: "name2"}];
let array2cop;

array2cop = new Object(array1);

//Con esto se resolvia el ejercicio. ¡¡¡¡¡¡NOOOOOOOOOOOOOO!!!!!!
array2cop = JSON.parse(JSON.stringify(array1));

array1[0].name = "name1 nomb";

console.log("---------- Array1 ----------");
console.log(array1);

console.log("---------- Array2cop ----------");
console.log(array2cop);

console.log("---------- Array1 ----------");
console.log(array1);
