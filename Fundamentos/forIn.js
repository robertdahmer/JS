const pessoa = {
    nome: 'Ana',
    idade: 24,
    peso: 57
}

for (indice in pessoa) {
    console.log(`${indice} == ${pessoa[indice]}`)
}