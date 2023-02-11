const inputText = document.getElementById('carta-texto');
const btnCreateCard = document.getElementById('criar-carta');
const cards = document.getElementById('carta-gerada');
const spanCard = document.getElementsByTagName('span');
const wordCount = document.getElementById('carta-contador');

const createSpan = () => {
  const span = document.createElement('span');
  return span;
};

const generateRandomNumbers = (size) => {
  const numberRandom = parseInt(Math.random() * size, 10);
  return numberRandom;
};

const generateStyleRandom = (elemento, arrayOfClass) => {
  const style = arrayOfClass[generateRandomNumbers(arrayOfClass.length)];
  elemento.classList.add(style);
};

const createStyles = (elemento) => {
  const styles = ['newspaper', 'magazine1', 'magazine2'];
  const size = ['medium', 'big', 'reallybig'];
  const rotation = ['rotateleft', 'rotateright'];
  const slope = ['skewleft', 'skewright'];
  generateStyleRandom(elemento, styles);
  generateStyleRandom(elemento, size);
  generateStyleRandom(elemento, rotation);
  generateStyleRandom(elemento, slope);
};

const changeStyleCard = () => {
  for (let index = 0; index < spanCard.length; index += 1) {
    spanCard[index].addEventListener('click', (e) => {
      e.target.classList = '';
      createStyles(e.target);
    });
  }
};

const splitStrings = () => {
  const arrayStrings = inputText.value.trim().split(' ');
  cards.innerText = '';
  for (let index = 0; index < arrayStrings.length; index += 1) {
    const span = createSpan();
    span.innerText = arrayStrings[index];
    createStyles(span);
    cards.appendChild(span);
  }
  wordCount.innerText = `${arrayStrings.length}`;
};

const createCards = () => {
  const emptyInput = inputText.value.trim() === '';
  if (!emptyInput) {
    splitStrings();
    changeStyleCard();
  } else {
    cards.innerText = 'Por favor, digite o conteúdo da carta.';
    wordCount.innerText = '0';
  }
};

btnCreateCard.addEventListener('click', createCards);
