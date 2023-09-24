'use strict';

// Selecionando os elementos
const jogador0El = document.querySelector('.player--0');
const jogador1El = document.querySelector('.player--1');
const dadoEl = document.querySelector('.dice');
const btnNovo = document.querySelector('.btn--new');
const btnRolar = document.querySelector('.btn--roll');
const btnManter = document.querySelector('.btn--hold');

// Condições iniciais
let pontuacoes = [0, 0];
let pontuacaoAtual = 0;
let jogadorAtivo = 0;

const condicoesIniciais = function () {
  document
    .querySelector(`.player--${jogadorAtivo}`)
    .classList.remove('player--winner');
  document.getElementById('score--0').textContent = 0;
  document.getElementById('score--1').textContent = 0;
  dadoEl.classList.add('hidden');
  document.getElementById('current--0').textContent = 0;
  document.getElementById('current--1').textContent = 0;
  if (jogadorAtivo === 1) mudarJogador();
  pontuacoes = [0, 0];
  pontuacaoAtual = 0;
  jogadorAtivo = 0;
  btnRolar.style.display = 'block';
  btnManter.style.display = 'block';
};

const mudarJogador = function () {
  pontuacaoAtual = 0;
  document.getElementById(`current--${jogadorAtivo}`).textContent = 0;
  jogador0El.classList.toggle('player--active');
  jogador1El.classList.toggle('player--active');
  jogadorAtivo = jogadorAtivo ? 0 : 1;
};

const fimDeJogo = function () {
  document
    .querySelector(`.player--${jogadorAtivo}`)
    .classList.add('player--winner');
  btnRolar.style.display = 'none';
  btnManter.style.display = 'none';
};

condicoesIniciais();

btnManter.addEventListener('click', function () {
  if (pontuacaoAtual !== 0) {
    pontuacoes[jogadorAtivo] += pontuacaoAtual;
    document.getElementById(`score--${jogadorAtivo}`).textContent =
      pontuacoes[jogadorAtivo];
    if (pontuacoes[jogadorAtivo] < 100) {
      mudarJogador();
    } else {
      fimDeJogo();
    }
  }
});

btnRolar.addEventListener('click', function () {
  const valorDado = Math.floor(Math.random() * 6 + 1);
  dadoEl.setAttribute('src', `dice-${valorDado}.png`);
  dadoEl.classList.remove('hidden');
  if (valorDado !== 1) {
    pontuacaoAtual += valorDado;
    document.getElementById(`current--${jogadorAtivo}`).textContent =
      pontuacaoAtual;
  } else {
    mudarJogador();
  }
});

btnNovo.addEventListener('click', condicoesIniciais);
