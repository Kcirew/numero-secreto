function olaMundo(){
    console.log("Olá, Mundo!");
}

olaMundo();

function olaNome(nome){
    console.log(`Olá, ${nome}!`)
}

olaNome("Werick");

function calcularDobro(numero){
    return numero * 2;
}

var resultadoDobro = calcularDobro(6);
console.log(resultadoDobro);

function calcularMedia(a, b, c) {
    return (a + b + c) / 3;
}

var media = calcularMedia(6, 10, 18);
console.log(media);

function calcularMaior(a, b) {
    return a > b ? a : b;
}

var numeroMaior = calcularMaior(17, 28)
console.log(numeroMaior);

function calcularMultiplicacao(numero){
    return numero * numero;
}

var multiplicacao = calcularMultiplicacao(5);
console.log(multiplicacao);