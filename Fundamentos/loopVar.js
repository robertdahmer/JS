const itens = []
for (var i = 0; i < 10; i++) {
    itens.push(function () {
        console.log(i)
    }
    )
}
itens[0]()
itens[1]()
itens[2]()
itens[3]()
itens[4]()
itens[5]()
itens[6]()
itens[7]()
itens[8]()
itens[9]()
