// laço de repetição para vetores e listas (engloba as três partes - variável, condição de parada, implementador - numa só )

for (var x = 1; x<10; x++){
    console.log('Olá');
}

for(var x=2; x<=100; x+=2){  //listar numeros pares de 1 a 100
    console.log(x);
}

for(var x=1; x<=100; x+=2){  //listar numeros impares de 1 a 100
    console.log(x);
}

var sala = ["cecilia", "lucas", "danielle", "paulo", "andré", "raissa"];
for (var y=0; y<sala.length; y++){
    console.log(sala[y]);
}