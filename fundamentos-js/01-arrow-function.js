/*Função tradicional com 1 parâmetro e 1 linha de corpo contendo return */

function quadrado(n){
    return n*n
}
console.log('Função Tradicional: ', quadrado(7))

/* Para executar o arquivo
Abrir o terminal ctrl + aspa simples
Digite cd nome da pasta
Digite o arquivo para ser executado node nome do arquivo 
Tecla TAB completa o nome da pasta e arquivo
SETA PARA CIMA relembra os últimos comando digitados*/

// Função equivalente no formato arrow function
const quadradoA = n => n*n  

console.log('Arrow Function: ', quadradoA(7))

/*Função tradicional com mais de 1 parâmentro e uma única linha de corpo contendo return */

function soma(a, b,c){
    return a+b+c
}
console.log('Soma Tradicional', soma(10, 15, 20))

//Arrow Function equivalente, quando há mais de 1 parâmetro, são necessários parênteses em volta deles

const somaA = (a, b, c) => a+b+c

console.log('Soma Arrow', somaA(10, 15, 20))

/*Função tradicional sem parâmetro e com uma única linha de return */

function aleatorio0a9(){
    //Retorna um número aleátorio entre 0 e 9
    //Math.random(): gera um número aleátorio funcionário entre 0 e 1
    //Math.floor(): retira as casas decimais de um número fracionário
    return Math.floor(Math.random()*10) 

}

console.log('Aleatório Tradicional', aleatorio0a9())

//Arrow function equivalente
//Os parênteses devem estar presentes, mesmo que não haja parâmetro

const aleatorio0a9A = () => Math.floor(Math.random()*10)

console.log('Aleatório Arrow', aleatorio0a9A())

/*Função tradicional com parâmetro e mais de uma linha no corpo */

function fatorial(n){
    let resultado = 1
    for(let i=n; i>1; i--) resultado *=i
    return resultado
}

console.log('Fatorial Tradicional:', fatorial(6))

//Arrow function equivalente
//Não há economia de linhas/código em relação ao corpo da função

const fatorialA = n => {
    let resultado = 1
    for(let i=n; i>1; i--) resultado *= i
    return resultado
}

console.log('Fatorial Arrow:', fatorialA(6))

/*Terminal para commitar
 cd .. -> volta para raiz
 git add .*/