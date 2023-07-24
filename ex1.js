const pessoa = {
 nome: "Ricardo França",
 idade: "39",
 altura: 1.78,
 cnh: false,
 apelidos: ['Rick', 'Tatu']
}
if(pessoa.cnh){
    pessoa[`cnh`] = 'possui'
}else {
    pessoa[`cnh`] = 'não possui'
}

console.log(`${pessoa.nome} tem ${pessoa.idade} anos, ${pessoa.altura}m de altura,
${pessoa.cnh} CNH e os seguintes apelidos: 
- ${pessoa.apelidos.join("\n- ")} `)
