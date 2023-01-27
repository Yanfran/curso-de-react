import { getHeroesById } from "./bases/08-import-export";

// const promesa = new Promise ((resolve, reject) => {
//     setTimeout(() => {
//         const heroe = getHeroesById(2);
//         // console.log(heroe);
//         resolve(heroe);
//         // reject('No se pudo encotrar el héroe')
//     }, 2000 )
// });

// promesa.then((heroe) => {
//     console.log('Then de la promesa', heroe);
// }).catch( err => console.warn(err) );



const getHeroesByIdAsync = (id) => {

    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            const heroe = getHeroesById(id);
            if (heroe) {
                resolve(heroe);   
            } else {            
                reject('No se pudo encotrar el héroe');
            }
        }, 2000 )
    });

}

getHeroesByIdAsync(44).then( console.log)
.catch( console.warn );