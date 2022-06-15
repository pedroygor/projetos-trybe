const rgbColor = document.getElementById('rgb-color');
const color = document.getElementsByClassName('ball');
const containerColor = document.getElementsByClassName('container-color');
const answer = document.getElementById('answer');
const btnReset = document.getElementById('reset-game');
const score = document.getElementById('score');

const generateColorRGB = () => {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;
  const rgb = `(${parseInt(r, 10)}, ${parseInt(g, 10)}, ${parseInt(b, 10)})`;
  return rgb;
};

const getColorGuess = () => {
  const colorGuess = parseInt(Math.random() * 6, 10);
  return colorGuess;
};

const coloredBallGenerate = () => {
  const colorRandom = [];
  const colorGuess = getColorGuess();
  for (let index = 0; index < 6; index += 1) {
    colorRandom.push(generateColorRGB());
    color[index].style.backgroundColor = `rgb${colorRandom[index]}`;
    color[index].setAttribute('id', colorRandom[index]);
  }
  rgbColor.innerText = `${colorRandom[colorGuess]}`;
};

const updateScore = () => {
  let points = parseInt(score.textContent, 10);
  points += 3;
  score.innerText = `${points}`;
};

const checkColorClick = (e) => {
  if (e.target.id === rgbColor.textContent) {
    answer.innerText = 'Acertou!';
    updateScore();
  } else {
    answer.innerText = 'Errou! Tente novamente!';
  }
  coloredBallGenerate();
};

const eventClickColor = () => {
  for (let index = 0; index < containerColor.length; index += 1) {
    containerColor[index].addEventListener('click', checkColorClick);
  }
};

eventClickColor();

const resetGame = () => {
  coloredBallGenerate();
  answer.innerText = 'Escolha uma cor';
};

btnReset.addEventListener('click', resetGame);

window.onload = coloredBallGenerate;
