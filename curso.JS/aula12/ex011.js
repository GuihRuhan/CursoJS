var idade = 67
console.log(`Você tem ${idade}`)
if (idade < 16){
console.log(`Sua idade é ${idade}, logo, você é não vota`)
} else if (idade < 18 || idade > 65) {
    console.log('Você possui a idade necessária para votar, mas não é obrigado')
} else {
        console.log('Você é obrigado a votar') //serve como um "print" no python
}