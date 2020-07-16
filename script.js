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