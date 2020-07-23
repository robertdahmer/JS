/*function gerarRandom ({max = 0, min = 0}) {
    const valor = Math.random(min, max)
    return Math.floor(valor)
}

console.log(gerarRandom({min:20, max:30}))

console.log(Math.random(10000))
*/

function getRandom ({min=0, max=0}) {
    const valor = Math.random() * (max - min) + min
    return Math.floor(valor)
}
console.log(getRandom({min: 0, max: 15}))
