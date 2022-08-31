//OPERADOR TERNÁRIO: se(condição)?[primeiro bloco]:[segundo bloco]

var numero = 87;

console.log(numero % 2 == 0?"número par":"número ímpar");


//var condicao = nota = 9;

/*
if (condicao >= 0 && nota>=7 && nota <=10){
    console.log("O aluno foi aprovado.");
}else{
    console.log("O aluno não foi aprovado");
}
console.log(nota>=7 ? "O aluno foi aprovado.":"O aluno não foi aprovado");

*/

// var notaValida = nota >= 0 && nota <= 10;


// if(notaValida && nota < 3){
//    console.log("O aluno foi reprovado.");
//}else if(notaValida && nota < 7){
//    console.log("O aluno está de recuperação e fará avaliação final");
//}else{
//    console.log("O aluno está aprovado!")
//}

notaValida = nota = 6;
if(notaValida && nota >= 7){
    console.log("O aluno foi aprovado.")
}else if(notaValida && nota >= 3){
    console.log("O aluno está de recuperação e fará avaliação final")
    nota = 4;
    if(notaValida && nota >= 5){
        console.log("O aluno está aprovado.");
    }else if(notaValida){
        console.log("O aluno está reprovado.");
    }else{
        console.log("Nota inválida.");
    }
}else if(notaValida){
    console.log("O aluno foi reprovado.");
}else{
    console.log("Nota inválida.")
}

