const pessoa = {
    nome: 'Robert',
    idade: 16,
    endereço: {
        logradouro: 'Rua Ivone Maria Pires',
        numero: 22
    }
}

const {idade, nome, endereço} = pessoa
console.log(typeof(idade))