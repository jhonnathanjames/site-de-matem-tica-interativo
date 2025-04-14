// Variáveis principais do jogo
let respostaCorreta;
let pontuacao = 0;
let modoAtual = 'basico';

// Função que inicia o jogo com o modo escolhido
function iniciarJogo(modo) {
modoAtual = modo;
document.getElementById("area-jogo").style.display = "block";
novaPergunta();
}

// Função que gera nova pergunta e mostra na tela
function novaPergunta() {
const numeros = gerarNumeros(modoAtual);
const operacao = escolherOperacao();
const perguntaTexto = `${numeros.num1} ${operacao} ${numeros.num2}`;

respostaCorreta = calcularResposta(numeros.num1, numeros.num2, operacao);

document.getElementById("pergunta").innerText = perguntaTexto;
document.getElementById("resposta").value = "";
document.getElementById("resultado").innerText = "";
}

// Gera números aleatórios, maiores no modo desafio
function gerarNumeros(modo) {
let num1 = Math.floor(Math.random() * 10) + 1;
let num2 = Math.floor(Math.random() * 10) + 1;

if (modo === 'desafio') {
num1 *= 2;
num2 *= 3;
}

return { num1, num2 };
}

// Escolhe aleatoriamente uma operação: +, - ou *
function escolherOperacao() {
const operacoes = ['+', '-', '*'];
return operacoes[Math.floor(Math.random() * operacoes.length)];
}

// Calcula o resultado com base nos números e operação
function calcularResposta(n1, n2, op) {
switch (op) {
case '+': return n1 + n2;
case '-': return n1 - n2;
case '*': return n1 * n2;
}
}

// Verifica se a resposta do usuário está correta
function verificarResposta() {
const respostaUsuario = parseInt(document.getElementById("resposta").value);

if (respostaUsuario === respostaCorreta) {
document.getElementById("resultado").innerText = "✅ Resposta Correta!";
pontuacao += 10;
} else {
document.getElementById("resultado").innerText = `❌ Errado! A resposta era ${respostaCorreta}`;
pontuacao -= 5;
}

document.getElementById("pontuacao").innerText = pontuacao;
}

