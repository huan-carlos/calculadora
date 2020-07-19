const vet = [4];
const dec = document.getElementById("decimal");
const bin = document.getElementById("binario");
const hex = document.getElementById("hexadec");
const oct = document.getElementById("octal");
const botaoConverter = document.getElementById("converter");
const botaoLimpar = document.getElementById("limpar");

// limpa o conteudo do input
function limpar() {
  dec.value = "";
  bin.value = "";
  hex.value = "";
  oct.value = "";
}

// pega os valores digitados no input
function pegarValores() {
  vet[0] = dec.value;
  vet[1] = bin.value;
  vet[2] = hex.value;
  vet[3] = oct.value;
  return vet;
}

// tratamento de erro
function error(mensagem) {
  const p = document.getElementsByTagName("p");
  p[0].innerHTML = mensagem;
  setTimeout(function Esperando() {
    p[0].innerHTML = "";
    limpar();
  }, 2000);
}

// valida se tem somente um valor inserido
function somenteUm() {
  let contador = 0;
  for (let i = 0; i < vet.length; i += 1) {
    if (vet[i] !== "") {
      contador += 1;
    }
  }

  if (contador > 1) {
    error("Insira o Número em Apenas um Campo!");
  }
}

// execulta a função limpar, que remove os valores dos inputs
botaoLimpar.onclick = function limpando() {
  limpar();
};

// valida se o input binario está recebendo 0 ou 1
bin.onkeypress = function validandoBin() {
  // eslint-disable-next-line no-restricted-globals
  const aux = event.which;
  if (aux === 48 || aux === 49) {
    return true;
  }
  error("Somente Binário!");
  return false;
};

// MAIN
botaoConverter.onclick = function convertendo() {
  somenteUm(pegarValores());
  if (vet[0] !== "") {
    bin.value = (+vet[0]).toString(2);
    hex.value = (+vet[0]).toString(16).toUpperCase();
    oct.value = (+vet[0]).toString(8);
  } else if (vet[1] !== "") {
    dec.value = parseInt(vet[1], 2);
    hex.value = (+parseInt(vet[1], 2)).toString(16).toUpperCase();
    oct.value = (+parseInt(vet[1], 2)).toString(8);
  } else if (vet[2] !== "") {
    dec.value = parseInt(vet[2], 16);
    bin.value = (+parseInt(vet[2], 16)).toString(2);
    oct.value = (+parseInt(vet[2], 16)).toString(8);
  } else if (vet[3] !== "") {
    dec.value = parseInt(vet[3], 8);
    bin.value = (+parseInt(vet[3], 8)).toString(2);
    hex.value = (+parseInt(vet[3], 8)).toString(16).toUpperCase();
  }
};
