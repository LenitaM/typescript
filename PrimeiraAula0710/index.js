"use strict";
/**AULA DIA 07 DE OUT DE 2022: INTRODUÇÃO A TYPESCRIPT
 *
 * para o ts rodar no terminal é preciso transferir para js
 */
//TIPAGEM EM TYPESCRIPT
//Tipagem implícita (como a própria palavra já disse) = a linguagem tem um tipo porém não explícita o tipo dela
let username = "shaolin_matador_de_porco"; //não explcita mas é tipo string
username = "flaciodopneu"; /**
ao declarar tipos, a variavel, mesmo implicitamente, vai aceitar só o tipo primeiro que vc declarou. Se declarar primeiro um string o nome da variavel que recebeu string só aceita string.
Exemplo: let username = "lenita" username = 1997 (errado, pq a primeira foi string)
*/
/**Tipagem Explicita
 * variavel (let, const) nome : tipo (number, string, boolean) = valor
 * */
const pi = 3.14; //pode ser qualquer variavel. Errado: const pi string = 78
let logado = true; //se teantar qualquer outra vai da errado
//UNION TYPES: Variavel para guardar +1 valor ( | ) - avisa para o ts que vou usar dois ou mais tipos de valores 
let rg = 1234567; //pode adicionar mais de dois, mas precisa especificar todos os tipos para pode usar 
rg = "1234567";
//any = usado para colocar qualquer tipo de variável: usado para quando tiágem são muito grandes, quando não se conhece o tipo que vai receber (não é pra usar em tudo)
let generico = []; //colchetes é array
generico = {
    a: '',
    b: 8,
    c: true
}; //objeto
generico = 'Eu sou genérico';
generico = 9.89;
//MANEIRAS DE FAZER TIPAGEM DE ARRAY EM TS
const listaDeNome = ['João', "Maria", 'César'];
listaDeNome.push('Roberta');
const num = [1, 2, 3, 4, 5];
num.push(6); //se for outro tipo não vai pegar 
const outroBoleano = [true, false];
//FAZER ARRAYS COM 1 OU MAIS TIPOS (Array <string|number> ) * tem que ser A maísculo = Array *
const valores = ['lenita', '25'];
const numeros = ["lenita", 'ana', 'dengo'];
const boleana = [true, false];
/**
 * Vatangens de usar ts:
 * vc tem mais controle de acordo com a quantidade de variaveis, dá um tipo de variavel já diminui o risco de erro, valor de um tipo que não queira.
 * quando passa ts para js vc sabe que quando aquele código for passado para js já evita muito bug e vc tem um controle do que escreveu
 * vc tem controle, tipagem e segurança ao passar para js e evita bugs
 */ 
