const pessoa = {
    nome: "Ricardo",
    idade: "39",
    altura: '1.79',
    cargo: 'Dev'
};

const endereco = {
    rua:  "João Luchette",
    numero: 139,
    bairro: "Jardim Iguatemi"
};

const obejtoFundido = {
    ...pessoa,
    ...endereco,
};

console.log(obejtoFundido)