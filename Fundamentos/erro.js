function digitarNumero (numero) {
try{
    if (typeof(numero) === parseFloat || parseInt) {
    return `Você digitou o número ${numero}`
    }
    }    catch(erro){
    
    return 'Você não digitou um número, tente novamente!'
    
    }
}

console.log(digitarNumero(2))
