const inputText = document.getElementById('text-input');
const memeText = document.getElementById('meme-text');
const memeImgFile = document.getElementById('meme-insert');
const memeImg = document.getElementById('meme-image');
const container = document.getElementById('meme-image-container');
const fire = document.getElementById('fire');
const water = document.getElementById('water');
const earth = document.getElementById('earth');
const memes = document.getElementsByClassName('memes');

const getTextInput = () => {
  const inputEmpty = inputText.value.trim() !== '';
  if (inputEmpty) {
    memeText.innerText = inputText.value;
  }
};

const getImgInput = (e) => {
  memeImg.src = URL.createObjectURL(e.target.files[0]);
};

inputText.addEventListener('input', getTextInput);
memeImgFile.addEventListener('input', getImgInput);

const addContainerBorder = (size, style, color) => {
  container.style.border = `${size} ${style} ${color}`;
};

fire.addEventListener('click', () => {
  addContainerBorder('3px', 'dashed', 'rgb(255, 0, 0)');
});

water.addEventListener('click', () => {
  addContainerBorder('5px', 'double', 'rgb(0 , 0 , 255)');
});

earth.addEventListener('click', () => {
  addContainerBorder('6px', 'groove', 'rgb(0 , 128 , 0)');
});

const changeImgBackground = () => {
  for (let index = 0; index < memes.length; index += 1) {
    memes[index].addEventListener('click', (e) => {
      memeImg.src = e.target.src;
    });
  }
};

changeImgBackground();
