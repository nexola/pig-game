'use strict';

// Selecionando os elementos
const pontuacao1El = document.getElementById('score--1');
const dadoEl = document.querySelector('.dice');

const btnNovo = document.querySelector('.btn--new');
const btnRolar = document.querySelector('.btn--roll');
const btnManter = document.querySelector('.btn--hold');

const jogadores = document.querySelectorAll('.player');

const valorAtual1 = document.getElementById('current--1');

const pontuacaoAtual1El = document.getElementById('current--1');

// Player 1
const player1 = {
  secao: document.querySelector('.player--0'),
  nome: document.getElementById('name--0'),
  pontuacaoTotalEl: document.getElementById('score--0'),
  pontuacaoAtualEl: document.getElementById('current--0'),
  ativo: true,
};

// Player 2
const player2 = {
  secao: document.querySelector('.player--1'),
  nome: document.getElementById('name--1'),
  pontuacaoTotalEl: document.getElementById('score--1'),
  pontuacaoAtualEl: document.getElementById('current--1'),
  ativo: false,
};

const mudarJogador = function (jogadorAtual, proximoJogador) {
  jogadores.forEach(jogador => {
    jogador.classList.add('player--active');
  });
  jogadorAtual.secao.classList.remove('player--active');
  proximoJogador.ativo = true;
  jogadorAtual.ativo = false;
};

// Condições iniciais
player1.pontuacaoTotalEl.textContent = 0;
pontuacao1El.textContent = 0;
dadoEl.classList.add('hidden');

let pontuacaoAtual = 0;

const rolarDado = function () {
  const valorDado = Math.floor(Math.random() * 6 + 1);
  dadoEl.setAttribute('src', `dice-${valorDado}.png`);
  dadoEl.classList.remove('hidden');
  console.log(valorDado);
  if (valorDado !== 1) {
    pontuacaoAtual += valorDado;
  } else {
    mudarJogador(
      player1.ativo ? player1 : player2,
      player2.ativo ? player2 : player1
    );
  }
};

btnRolar.addEventListener('click', rolarDado);
