// import {heroes} from './data/heroes'
import heroes, { owners } from '../data/heroes'
// console.log(heroes);
// console.log(owners); /**Exportaciones individuales */

// const getHeroesById = (id) => {
//     return heroes.find( ( heroe ) => {
//         if (heroe.id === id) {
//             return true;
//         } else {
//             return false;
//         }
//     });
// }
// console.log(getHeroesById(2));

const getHeroesById = (id) =>  heroes.find( ( heroe ) => heroe.id === id  );

// console.log(getHeroesById(2));

// find?, filter
const getHeroesByOwner = ( owner ) => heroes.filter((heroe) => heroe.owner === owner);
// console.log(getHeroesByOwner('DC'));

export {getHeroesById};