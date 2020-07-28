function status(nota) {
    if (typeof (nota) != Number) {
        console.log('Você não digitou um número, tente novamente!')
        if (typeof (nota) == Number && nota >= 7) {
            console.log('Aprovado')
        }
        if (nota < 7) {
            console.log('Reprovado')
        }
    }

}






status('bah')
