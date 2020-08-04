const Caps = function(text) {
    const Ctext = text.toUpperCase()
    return Ctext
}

function print(texto) {
    return console.log(Caps(texto))
}

print('Olá, Mundo!')
