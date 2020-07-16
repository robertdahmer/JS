var a = ''
console.log((a))

if (!!! a) {
    console.log((!!a))
}

console.log(!! (a = false)) //mantém o valor final

// valores que são vistos como false pelo JS

/*
    0
    ''
    null
    NaN
    undefined
*/
