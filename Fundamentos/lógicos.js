function trabalho (trabalho1=Boolean, trabalho2=Boolean) {
    const comprarTv50 = trabalho1 && trabalho2
    const comprarSorvete = trabalho1 || trabalho2
    const comprarTv32 = trabalho1 != trabalho2
    const manterSaudavel = !comprarSorvete

    return {comprarTv50, comprarTv32, comprarSorvete, manterSaudavel} // neste caso não precisa usar o padrão de key and value pois o js simplifica isso se colocar apenas o nome do elemento possuindo um valor, tanto undefined quanto NaN
}

console.log(trabalho(true, false))

let n1 = 1

let n2 = 2

console.log(++n1 === n2--)



