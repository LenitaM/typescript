"use strict";
/**AULA 10 DE OUT DE 2022
 * INTERFACES = É uma forma de assegurar que os dados processados são padronizados
 */
/*let pessoa = {
    nome: "Pietro",
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidade: ['react', 'angular', 'typescript', 'node.js', 'springboot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 1234,
        estado: 'CE',
        complemento: 'Sem complemento'
        cep:'123000-000',
    },
}
let pessoa2 = {
    nome: "Carol",
    idade: 22,
    altura: 1.8,
    cpf: '111.111.111-11',
    solteiro: false,
    habilidade: ['react', 'angular', 'typescript', 'node.js', 'springboot'],
    endereco: {
        rua: 'Rua Feliz',
        numero: 1234,
        estado: 'CE',
        complemento: 'Sem complemento'
        cep:'123000-000',
    },
    rg: 800.200-12
}*/
//padrão para criar interface: interface + nome que quiser + 
//sempre que for criar uma pessoa tem que ter essas informações, obriga as variaveis a preencher todos os requisitos. interface é parecido required do HTML
const p = {
    altura: 1.9,
    nome: 'Faustão',
    idade: 12,
    cpf: '222.222.222-22',
    solteiro: true,
    habilidades: ['HTML'],
    endereco: {
        rua: 'Rua Santo Amaro',
        numero: 140,
        estado: 'SE',
        complemento: 'sem complemento',
        cep: '123000-000',
    },
    rg: '998.987-12',
    cumprimentar() {
        console.log('Saudações, meu nome é ' + this.nome); //referência o objeto dentro dele mesmo
    },
};
const p2 = {
    nome: 'Paula',
    altura: 1.70,
    idade: 34,
    cpf: '222.222.222-22',
    solteiro: false,
    habilidades: ['HTML, CSS'],
    endereco: {
        rua: 'Rua Santo Amaro',
        numero: 140,
        estado: 'SE',
        complemento: 'sem complemento',
        cep: '123000-000',
    },
    rg: '234.456.56',
    cumprimentar() {
        console.log('Olá para todos! Prazer em conhece-los');
    },
};
