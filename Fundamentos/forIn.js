const pessoa = {
    nome: 'Ana',
    idade: 24,
    peso: 57
}

for (let indice in pessoa) {
    console.log(`${indice} == ${pessoa[indice]}`)
}

console.log(typeof(pessoa))
