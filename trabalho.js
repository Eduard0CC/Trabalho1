//Trabalho feito em dupla: Eduardo Fofonka e Nicolas Nunes

//declaração das variaveis
//id, nome e idade para facilitar o programa
    const ID = 0
    const NOME = 1
    const IDADE = 2
//modúlo do prof para ter entrada de dados no terminal
    const prompt = require('utils/prompt');
//Array que será ordenada ao longo do cód
    var pearsons = [
        [1, "Isaac Newton", 28],
        [2, "Friedrich Gauss", 33],
        [3, "Marie Curie", 29],
        [4, "Hedy Lamarr", 23],
        [5, "Albert Einstein", 39],
        [6, "Nicolau Copernico", 30],
        [7, "Galileu Galilei", 25],
        [8, "Alexander Volta", 36],
        [9, "André-Marie Ampère", 23],
        [10, "James Clerk Maxwell", 25],
        [11, "James Prescott Joule", 33],
        [12, "James Watt", 23],
        [13, "Archimedes de Siracusa", 39],
        [14, "Simom Ohm", 35]
]
//Funções
//Selection sort para ordenar array
function SelSor (tabela, coluna){
    for (var i = 0; i <= tabela.length - 2; i++){
        var eleito = tabela [i]
        var menor = tabela [i+1]
        var pos = i + 1
        for (var j = i + 2; j<= tabela.length - 1; j++){
            if (tabela[j] [coluna] < menor [coluna]) {
                menor = tabela [j]
                pos = j
            }
        }
        if (menor [coluna]< eleito [coluna]){
            tabela [i]= tabela [pos]
            tabela [pos]= eleito
        }
    }
}
//Função para exibir o menu
function Menu (){
    console.log('------------------------------');
    console.log('MENU - escolha uma das opções');
    console.log('1- Ordenar Lista por nome');
    console.log('2- Ordenar lista por idade');
    console.log('3- Ordenar lista por ID');
    console.log('4- Sair do programa');
    console.log('------------------------------');
}

// MAIN
//estrutura para destinar a saída correta para opção escolhida
var menucontr = false; //váriavel de controle do while
console.log('Essa é a lista a ser ordenada: ')
console.log(pearsons);
//estrutura para repetir o menu até que a opção sair seja escolhida
while (!menucontr){
    Menu ();
    var option = prompt ('Digite o número corresponde a opção que deseja: ', 'number'); // entrada da opção do menu
    switch (option){
        case 1:
            console.clear();
            console.log('Essa é a lista ordenada por nome: ');
            SelSor (pearsons, NOME);
            console.log(pearsons);
            break
        case 2:
            console.clear();
            console.log('Essa é a lista ordenada por idade: ');
            SelSor (pearsons, IDADE);
            console.log(pearsons);
            break
        case 3:
            console.clear();
            console.log('Essa é a lista ordenada por ID: ');
            SelSor (pearsons, ID);
            console.log(pearsons);
            break
        case 4:
            menucontr = true;
            console.clear();
            console.log ('Você saiu do programa.');
            break
        default:
            console.clear();
            console.log('Você não digitou uma opção válida!!');
            console.log('Tente Novamente');
            break;
    }
}