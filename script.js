//variáteis globais
const dec = document.getElementById('decimal');
const bin = document.getElementById('binario');
const hex = document.getElementById('hexadec');
const oct = document.getElementById('octal');

//limpa o conteudo do input
function limpar() {
    dec.value = '';
    bin.value = '';
    hex.value = '';
    oct.value = '';
}

//pega os valores digitados no input
function pegarValores(){
    let vet = [4];
    vet[0] = dec.value;
    vet[1] = bin.value;
    vet[2] = hex.value;
    vet[3] = oct.value;
    return vet;
}

//valida se tem somente um valor inserido 
function somenteUm(vet){
    var contador = 0;
    for(var i = 0; i < vet.length; i++){
        if (vet[i] != 0) {
            contador++;
        }
    }
    if(contador>1){
        alert("Insira o Número em Apenas um Campo!");
        limpar();
    }
}