// Desusestructuración
// Asignación Desestructurante

const persona = {
    nombre: 'Tony',
    edad: 45,
    clave: 'Iroman',
    rango: 'Soldado', /**Si viene vacio muestra Capitán */
};

// const { nombre, edad, clave } = persona;

// Desestructuración
// console.log(nombre);
// console.log(edad);
// console.log(clave);
// Desestructuración

// Normal
// console.log(persona.nombre);
// console.log(persona.edad);
// console.log(persona.clave);
// Normal

const useContext = ({ clave, nombre, edad, rango = 'Capitán'  }) => {
    // console.log(nombre, edad, rango);
    return{
        nombreClave: clave,
        anios: edad,
        latlng: {
            lat: 14.12234,
            lng: -12.3242
        }
    }
}

const { nombreClave, anios, latlng: { lat, lng }  } = useContext( persona );
console.log( nombreClave, anios );
console.log( lat, lng );

