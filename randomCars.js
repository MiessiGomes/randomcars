/*const cars = [
    "Aston Martin",
    "Audi",
    "Ferrari",
    "Lamborghini",
    "Volkswagen",
    "Porsche",
    "Volvo",
    "BMW",
    "Bugatti",
    "Mercedes-Benz",
]
*/

const cars = [1,2,3,4,5,6,7,8,9,10]

function randomItem(cars, quantity){
    const selected = [];

    for (let i = 0; i < quantity; i++){
        const indice = Math.floor(Math.random() * cars.length);
        selected.push(cars[indice]);
        cars.splice(indice, 1); //splice() altera conteúdo da lista, adicionando novos elementos enquanto remove elementos antigos.
    }
    return selected;
}

const selectedObjects = randomItem(cars, 4);
console.log(selectedObjects);