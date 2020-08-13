const pessoa = {
    saudação: 'Bom dia!',
    falar() {
        console.log(this.saudação)
    }
}

pessoa.falar()
const falarDePessoa = pessoa.falar.bind(pessoa) // conflito entre paradigmas: funcional e orientada a objeto.
falarDePessoa()