// Funciones en 

// const saludar = function (nombre){
//     return `Hola, ${nombre}`;
// }

// const saludar2 = (nombre) => {
//     return `Hola, ${nombre}`;
// }

const saludar3 = (nombre) => `Hola, ${nombre}`;
const saludar4 = () => `Hola Mundo`;


// console.log( saludar("Yanfran") );
// console.log(saludar2("Cirianny"));
console.log(saludar3("Angelo"));
console.log(saludar4());


const getUser = () => ({
    uid: '1',
    username: 'Yanfran'
});

const user = getUser();
console.log(user);

// Tarea
// 1. Transformar a una función de flecha
// 2. Tiene que retornar una objecto implícito
// 3.Probar
const getUsuarioActivo = (nombre) => ({ uid: 'ABC567', username:  nombre  });


const usuarioActivo = getUsuarioActivo('Pedro');
console.log(usuarioActivo);






