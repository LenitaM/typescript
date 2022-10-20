/**AULA 10 DE OUT DE 2022: CLASSES
 * Classes são representações de seres e objetos. Classe é uma estrutura que descreve estados e comportamentos de um determinado objeto
 */
class Cachorro {
    //elementos criado dentro da classe são chamados de atributos ou propriedades
   /*  nome: string   //'Luna' formação nome: string = 'Luna
    raca: string  //'vira-lata'
    idade: number // 0.8
    pelagem: string  //'branca'
    peso: number  //15
    sexo: string //'femea'
    vacinado: boolean  //true
    pedigree: boolean // false
    altura: number // 0.50 */

    //OUTRA FORMA DE CRIAR ATRIBUTOS QUE DIMINUA CÓDIGOS
    constructor(
        //PRIVATE = que apenas a propriedade nome (px) pertence a classe cachorro 
        public nome: string, //criando a propriedade e a parametro ao mesmo tempo
        public raca: string,  
        public idade: number,
        public pelagem: string,
        public peso: number,
        public sexo: string, 
        public vacinado: boolean,  
        public pedigree: boolean, 
        public altura: number, 
        ) {
        /**
         * this faz referência a própria classe dentro dela mesmo
         */
        /*this.nome = nome;
        this.raca = raca;
        this.sexo = sexo;
        this.idade = idade;
        this.altura = altura;
        this.pedigree = pedigree;
        this.pelagem = pelagem;
        this.peso = peso; */
    } //função ou método (mesma coisa) pode ter parametros
    
    
    /**FUNÇÕES NO TS */

    somar (a: number, b: number): number {
        return a + b //se por string vai da errado pq o retorno ta declarado como number
    } //retornar um valor numerico, pode retornar qualquer tipo Array <>, boolean, string 
};

/**Objeto é uma instância de uma classe */
let c = new Cachorro ('Mc Poze', 'Pitbull'); // Luna criando um objeto em uma classe

console.log(c);


console.log (c.nome); //Luna
console.log(c2.nome); //Luna são criações de novos cachorros, porém a base de dados sempre aparece luna pq ela foi o padrão estabelecido para nome, por exemplo.

c2.nome = 'Cora' //nome do terceiro cachorro vai ser Cora
console.log(c2.nome); //Cora

/**
 * c.raca = 'Perdigeiro'
    c2.altura = 1.50
 */



/*FUNÇÕES E MÉTODOS CONSTRUTORES DE CLASSES
*
Serve para ao criar um novo objeto da classe, possamos receber valores para que a classe utilize-os

Se o programador não criar o método construtor, a propria linguagem irá gerar um método construtor padrão

No JS e no TS, se pode ter um único método constructor
base formação 
constructor () {}
*/
