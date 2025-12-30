let currentPlayer = 1;
let scores = { 1: 0, 2: 0 };

const values = ['coin', 'bomb', 'power'];
const emojiMap = {
  coin: '💰',
  bomb: '💣',
  power: '⚡'
};

const gameBoard = document.getElementById('gameBoard');
const turnIndicator = document.getElementById('turnIndicator');

function createTiles() {
  gameBoard.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.value = values[Math.floor(Math.random() * values.length)];
    tile.addEventListener('click', () => flipTile(tile));
    gameBoard.appendChild(tile);
  }
}

function flipTile(tile) {
  if (tile.classList.contains('flipped')) return;

  tile.classList.add('flipped');
  const value = tile.dataset.value;
  tile.textContent = emojiMap[value];

  if (value === 'coin') scores[currentPlayer] += 10;
  if (value === 'bomb') scores[currentPlayer] -= 5;
  if (value === 'power') scores[currentPlayer] += 20;

  document.getElementById(`score${currentPlayer}`).textContent =
    scores[currentPlayer];

  if (scores[currentPlayer] >= 100) {
    showWinner();
    return;
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updateTurn();
}

function updateTurn() {
  turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
}

function showWinner() {
  const winnerName =
    document.getElementById(`player${currentPlayer}Name`).value ||
    `Player ${currentPlayer}`;

  document.getElementById('winnerText').textContent =
    `🏆 ${winnerName} WON THE GAME!`;

  document.getElementById('winnerPopup').style.display = 'flex';
}

function resetGame() {
  scores = { 1: 0, 2: 0 };let currentPlayer = 1;
let scores = { 1: 0, 2: 0 };

const values = ['coin', 'bomb', 'power'];
const emojiMap = { coin: '💰', bomb: '💣', power: '⚡' };

const gameBoard = document.getElementById('gameBoard');
const turnIndicator = document.getElementById('turnIndicator');

function createTiles() {
  gameBoard.innerHTML = '';
  for (let i = 0; i < 16; i++) {
    const tile = document.createElement('div');
    tile.className = 'tile';
    tile.dataset.value = values[Math.floor(Math.random() * values.length)];
    tile.onclick = () => flipTile(tile);
    gameBoard.appendChild(tile);
  }
}

function flipTile(tile) {
  if (tile.classList.contains('flipped')) return;

  tile.classList.add('flipped');
  const value = tile.dataset.value;
  tile.textContent = emojiMap[value];

  if (value === 'coin') scores[currentPlayer] += 10;
  if (value === 'bomb') scores[currentPlayer] -= 5;
  if (value === 'power') scores[currentPlayer] += 20;

  document.getElementById(`score${currentPlayer}`).textContent =
    scores[currentPlayer];

  if (scores[currentPlayer] >= 100) {
    endGame();
    return;
  }

  currentPlayer = currentPlayer === 1 ? 2 : 1;
  updateTurn();
}

function updateTurn() {
  turnIndicator.textContent = `Player ${currentPlayer}'s Turn`;
}

function showWinnerPopup(message) {
  const popup = document.getElementById('popup');
  popup.textContent = message;
  popup.classList.add('show');

  setTimeout(() => {
    popup.classList.remove('show');
  }, 2500);
}

function endGame() {
  const winnerName =
    document.getElementById(`player${currentPlayer}Name`).value ||
    `Player ${currentPlayer}`;

  showWinnerPopup(`🏆 ${winnerName} WON THE GAME!`);

  setTimeout(() => {
    document.getElementById('winnerMessage').textContent =
      `🎉 Congratulations ${winnerName}!`;
    document.getElementById('endScreen').style.display = 'flex';
  }, 2200);
}

function resetGame() {
  scores = { 1: 0, 2: 0 };
  currentPlayer = 1;
  document.getElementById('score1').textContent = 0;
  document.getElementById('score2').textContent = 0;
  document.getElementById('endScreen').style.display = 'none';
  updateTurn();
  createTiles();
}

createTiles();
updateTurn();

  currentPlayer = 1;

  document.getElementById('score1').textContent = 0;
  document.getElementById('score2').textContent = 0;
  document.getElementById('winnerPopup').style.display = 'none';

  updateTurn();
  createTiles();
}

createTiles();
updateTurn();
