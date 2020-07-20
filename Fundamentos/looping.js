function sleep(delay) {
    var start = new Date().getTime();
    while (new Date().getTime() < start + delay);
}


var andarDesejado = 5
for (var elevador = 1; elevador != andarDesejado +1 || elevador < andarDesejado; elevador = elevador + 1) {
    sleep(2000)
    var AndarAtual = console.log(`Você está no andar ${elevador}`)
}

