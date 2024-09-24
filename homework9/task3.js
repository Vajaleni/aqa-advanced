const car1 = {
    brand: "Opel",
    model: "Vectra",
    year: 2017

}

const car2= {
    brand: "Shkoda",
    model: "Octavia",
    owner: 2023

}

const car3 = {...car1, ...car2}
console.log (car3)