let pessoa = {
    nome: 'Robert',
    idade: 16,
    endereço: {
        logradouro: 'Rua Ivone Maria Pires',
        numero: 22
    }
}

let {idade, nome} = pessoa
let {logradouro, numero} = pessoa.endereço
let {sobrenome = 'Dahmer', tamanhoDoPau = '17cm'} = pessoa
/*console.log(idade, nome, logradouro, numero)
console.log(`Oi meu nome é ${nome} ${sobrenome}! Tenho ${idade} anos e ${tamanhoDoPau} de pau. Moro na ${logradouro}, que tem o número ${numero}`)*/

let {nome: n, idade: i} = pessoa
console.log(i, n)
if (pessoa.nome === n || n === nome) {
    console.log('É identico essas porra')
}