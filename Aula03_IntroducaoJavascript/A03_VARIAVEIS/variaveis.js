/* 

var nome = "marcos";

function meuNome(nome){
   console.log("meu nome é: "+nome);
}

*/

var nome='marcos paulo', altura=1.58, peso=52, tipoSanguineo="B-"; //STRINGS: PALAVRAS (ASPAS)
eDoador = true;

//vetores(arrays): variáveis "compostas"
conhecimentos = ["java", "javascript", "html", "css", "react", "mysql", "postgresql","node","firebase","github",
"gitlab","spring","restapi"];

//objeto
rank = {"java": 5, "javascript": 4, "html": 7, "css": 2}

console.log("nome: "+nome);
console.log("altura: "+altura);
console.log("peso: "+peso);
console.log("tipo sanguíneo: "+tipoSanguineo);
console.log("é doador? " .concat(eDoador? "sim": "não"));
console.log(conhecimentos);
console.log(rank);