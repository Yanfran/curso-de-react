
const personas = {
    nombre: "Yanfran",
    apellido: "Blanco",
    edad: 24,
    direccion: {
        ciudad: "New York",
        zip: 555566677,
        lat: 14.31423,
        lng: 86.132423,
    }
}

const personas2 = { ...personas };
personas2.nombre = "Cirianny";

console.log(personas);

// console.table({ personas });
console.log({ personas2 });