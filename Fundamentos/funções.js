function printSoma(a=0, b=0) {
    if (a || b == Number) {
        return (a + b)
    }
    else {
        return ('Por favor, insira apenas números')
    }
}

console.log(printSoma(8))


const maiusculo = (a) => a.toUpperCase()
console.log(maiusculo('Vatomanocu'))

const printar = texto => console.log(texto)
printar('Olá, Mundo')
