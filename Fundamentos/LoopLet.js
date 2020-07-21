const itens = []
for (let i = 0; i < 10; i++) {
    itens.push(function () {
        console.log(i)
    }
    )
}


itens[0]()
itens[2]()
