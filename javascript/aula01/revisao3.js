const ExibeMensagem = (msg) => {
    return (`A mensagem é: ${msg}`)
}

console.log(ExibeMensagem("Olá Amigos"))

let a = [0, 1, 1, 2, 3, 5, 8, 13]
console.log(typeof a)
console.log (a)
console.log (a[3])

a.forEach(element => {
    console.log(`elemento: ${element}`)
});