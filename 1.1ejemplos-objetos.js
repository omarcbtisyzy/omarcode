// let nameu ="jhon";
// let age = 25;
// let isEnrolled = true;
// let subjects = ["Programacion","Base de datos","IA"];
// //ACCEDER LA INFORMACION
// console.log(typeof(nameu)); //muestra string
// console.log(typeof(age));
// console.log(typeof(isEnrolled));
// console.log(typeof(subjects));

// console.log(Array.isArray(subjects));

// console.log(subjects.map(function (s){return typeof(s); }));

// subjects.forEach(function (element){
//     console.log(element);
// })


let estudiante = {
    "name":"Jhon M",
    "age": 25,
    "isEnrolled": true,
    "materias": ["Programacion", "Base de datos", "IA"]
}


console.log(typeof(estudiante));
//accedemos a los datos especificos del objeto
console.log("El nombre del estudiante es:", estudiante.name);
console.log("Su edad es:", estudiante.age);
console.log("Esta inscrito:", estudiante.isEnrolled);
console.log("la primera materia es:", estudiante.materias[0]);

//mostramos el objeto completo
console.log("La cantidad de materias es:", estudiante.length);
console.table(estudiante);

