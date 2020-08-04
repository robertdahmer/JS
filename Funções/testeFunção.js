const Caps = function(text) {
    const Ctext = text.toUpperCase()
    return Ctext
}

function print(texto) {
    return console.log(Caps(texto))
}

print('Olá, Mundo!')

const radius = function (altura, largura) {
    const area = altura * largura
    if (area > 20) {
        console.log(`Área (${area}) com o tamanho maior que o permitido (20)`)
        console.log(area)
    }
}

radius('5', 5, 2, 2, 2) // ignora os parâmetros depois do '5'
