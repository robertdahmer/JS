console.log(('Oi Pedro').charAt(0))
const palavra = 'Oi Predo'
console.log(palavra.indexOf('2'))
var endereco = "Rua das Hortênsias.Número 120.Bairro Laranjeiras.CEP 44455-000";
var resultado = endereco.split(".")
console.log(resultado)


const endereço = "Rua Ivone Maria Pires. Número 22. CEP 88380000. Bairro: Centro"
const endereçoCompleto = endereço.split("w")
console.log(endereçoCompleto, typeof(endereçoCompleto))


var separar = caracteres => caracteres.toUpperCase()
console.log(`A separação de ${separar(endereço)} `)