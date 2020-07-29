function qualfoiPorra(nota) {
    nota = Math.floor(nota)
    switch (nota) {
        case 10:
        case 9:
            console.log(nota, `Você tirou ${nota}!`)
            break
        default:
            console.log('Oq q tu digitou porra?')
    }
}

qualfoiPorra(123)
