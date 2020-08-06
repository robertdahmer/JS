// adicionando parâmetro padrão
function soma(a = 0, b = 0, c = 0) {
    /* a = a || 0
     b = b || 0
     c = c || 0
     */
    return a + b + c
}

console.log(soma())

function somar() {
    let soma = 0
    for (i in arguments) {

        soma += arguments[i]
    }
    return soma
}

console.log(somar(1, 2, 9))
