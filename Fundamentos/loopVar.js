let itens = []
for (var i = 0; i < 10; i++) {
    itens.push(function () {
        console.log(i)
    }
    )
}
itens[0]