const pessoa = {
    nome: "Ricardo França",
    idade: "39",
    altura: 1.78,
    cnh: false,
    apelidos: ['Rick', 'Tatu']
}
const textoCNH = (pessoa.cnh ? 'possui' : 'não possui')

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura,
   ${pessoa.cnh} CNH e os seguintes apelidos:\n  
${pessoa.apelidos.join("\n- ")} `)
