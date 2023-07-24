const pessoa = {
    nome: "Ricardo",
    idade: "39",
    altura: '1.79'
}
pessoa[`nome`] =  'Ricardo Galvão França'
console.log(`Meu nome é ${pessoa.nome}, tenho ${pessoa.idade} de idade e ${pessoa.altura}M de altura.`)