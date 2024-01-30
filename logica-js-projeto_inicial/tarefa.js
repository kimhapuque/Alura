alert("Boas vindas ao nosso site!");

var nome = "Lua";

var idade = 25;

var numeroDeVendas = 50;

var saldoDisponivel = 1000;

alert("Erro! Preencha todos os campos");

var mensagemDeErro = "Erro! Preencha todos os campos";

alert(mensagemDeErro);

nome = prompt("Digite seu nome:");

idade = prompt("Digite sua idade:");

idade = parseInt(idade);

if (idade >= 18) {
  alert("Pode tirar a habilitação!");
}