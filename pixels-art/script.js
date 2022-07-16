// Variáveis Globais
const pixelBoard = document.getElementById('pixel-board');
const boardSize = document.getElementById('board-size');
const colorPalette = document.getElementById('color-palette');

// Gerador de Cores RGB Aleatórias
function generateColorRGB() {
  const r = Math.random() * 255;
  const g = Math.random() * 255;
  const b = Math.random() * 255;

  return `rgb(${r}, ${g}, ${b}`;
}

// Criando DIVs da Paleta de Cores e adicionando cores aleatórias
// eslint-disable-next-line max-lines-per-function
function generateDiv() {
  const div = document.createElement('div');
  const div1 = document.createElement('div');
  const div2 = document.createElement('div');
  const div3 = document.createElement('div');

  div.classList.add('color', 'selected');
  div1.classList.add('color');
  div2.classList.add('color');
  div3.classList.add('color');

  div.style.backgroundColor = 'black';
  div1.style.backgroundColor = generateColorRGB();
  div2.style.backgroundColor = generateColorRGB();
  div3.style.backgroundColor = generateColorRGB();

  colorPalette.appendChild(div);
  colorPalette.appendChild(div1);
  colorPalette.appendChild(div2);
  colorPalette.appendChild(div3);
}

generateDiv();

// Criando Pixels ao carregar a página pela primeira vez
function inicio() {
  for (let i = 0; i < 25; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}

inicio();

// Removendo Pixels
function removePixel() {
  const pixel = document.querySelectorAll('.pixel');
  for (let i = 0; i < pixel.length; i += 1) {
    pixel[i].remove();
  }
}

// Adicionando Pixels ao clicar no botão VQV
function addPixel(valor) {
  removePixel();
  pixelBoard.style.gridTemplateColumns = `repeat(${valor}, 30px)`;
  const qtdPixels = valor * valor;
  for (let i = 0; i < qtdPixels; i += 1) {
    const div = document.createElement('div');
    div.classList.add('pixel');
    pixelBoard.appendChild(div);
  }
}

// Checando o valor do input
function checkPixel() {
  if (boardSize.value === '') {
    alert('Board inválido!');
  } else if (boardSize.value > 20) {
    boardSize.value = 20;
  } else if (boardSize.value < 5) {
    boardSize.value = 5;
  }
  return boardSize.value;
}

// Quantidade de Pixels que deve ser inserida
function pixelQuantity() {
  const btnGenerate = document.getElementById('generate-board');
  btnGenerate.addEventListener('click', () => {
    const valor = checkPixel();
    addPixel(valor);
    boardSize.value = '';
  });
}

pixelQuantity();

// Selecionando Cor que terá a classe selected para pintar os pixels
function selectColor() {
  const color = document.querySelectorAll('.color');
  colorPalette.addEventListener('click', (e) => {
    // eslint-disable-next-line no-restricted-syntax
    for (const iterator of color) {
      if (iterator.classList.contains('selected')) {
        iterator.classList.remove('selected');
      }
    }
    e.target.classList.add('selected');
  });
}

selectColor();

// Adicionando cor aos Pixels
function addColor() {
  pixelBoard.addEventListener('click', (e) => {
    const color = document.querySelectorAll('.color');
    for (let i = 0; i < color.length; i += 1) {
      if (color[i].classList.contains('selected') 
      && e.target.classList.contains('pixel')) {
        e.target.style.backgroundColor = color[i].style.backgroundColor;
      }
    }
  });
}

addColor();

// Limpando Pixels coloridos do board
function clearBtn() {
  const btn = document.querySelector('#clear-board');
  btn.addEventListener('click', () => {
    const color = document.querySelectorAll('.pixel');
    for (let i = 0; i < color.length; i += 1) {
      color[i].style.backgroundColor = '#fff';
    }
  });
}

clearBtn();


boardSize.addEventListener('keyup', (e) => {
  if(e.key === 'Enter') {
    const valor = boardSize.value.trim();
    addPixel(valor);
    boardSize.value = '';
  }
});