var altura = h = 1.58, sexo = 'M'

if(sexo == 'M'){
    peso = 72.7*h - 58;
}else{
    peso = 62.1*h - 44.7;
}

console.log('O peso ideal é de '+peso+" kg");

console.log(sexo == 'f' ? 62.1*h - 44.7 : 72.7*h - 58)