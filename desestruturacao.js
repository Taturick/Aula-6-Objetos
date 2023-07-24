const pessoa = {
    nome: "Ricardo",
    idade: "39",
    altura: '1.79',
    cargo: 'Dev'
}
//const nome = pessoa.nome;
//const idade = pessoa.idade;
const {nome, idade, ...outros} = pessoa;
console.log(nome, idade)
console.log(outros)