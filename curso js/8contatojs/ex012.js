var  nome = 'João'
var idade = 45
console.log(`O ${nome} tem ${idade} anos.`)
if (idade <= 16) {
    console.log('Não vota.')
} else if (idade < 18 || idade > 65) {
    console.log('Voto opcional.')
} else {
    console.log('Voto obrigatório.')
}

