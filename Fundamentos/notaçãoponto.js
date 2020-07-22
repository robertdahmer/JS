const pessoa = {
    nome: 'Robert',
    idade: 16,
    endereço: {
        logradouro: 'Rua Ivone Maria Pires',
        numero: 22
    }
}

const {idade, nome} = pessoa
const {logradouro, numero} = pessoa.endereço
console.log(idade, nome, logradouro, numero)
console.log(`Oi meu nome é ${nome}! Tenho ${idade} anos e moro na ${logradouro}, que tem o número ${numero}`)