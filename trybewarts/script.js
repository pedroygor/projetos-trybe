const inputEmail = document.getElementById('email');
const inputPassword = document.getElementById('password');
const btnLogin = document.getElementById('btn-login');
const btnAgree = document.getElementById('agreement');
const btnSubmit = document.getElementById('submit-btn');
const counterArea = document.getElementById('textarea');
const counterElement = document.getElementById('counter');
const info = document.getElementById('form-data');
const form = document.querySelector('.form-container');

function displayBtn() {
  if (btnAgree.checked === true) {
    btnSubmit.disabled = false;
  } else {
    btnSubmit.disabled = true;
  }
}

btnAgree.addEventListener('click', displayBtn);

function checkInputLogin() {
  const emptyEmail = inputEmail.value.trim() === 'tryber@teste.com';
  const emptyPassword = inputPassword.value.trim() === '123456';
  if (emptyEmail && emptyPassword) {
    alert('Olá, Tryber!');
  } else {
    alert('Email ou senha inválidos.');
  }
}

btnLogin.addEventListener('click', checkInputLogin);

const counterTextArea = () => {
  const areaLength = counterArea.value.length;
  const valor = 500 - areaLength;
  counterElement.innerText = valor;
};

counterArea.addEventListener('input', counterTextArea);

const showFullName = () => {
  const nome = document.querySelector('#input-name').value;
  const sobrenome = document.querySelector('#input-lastname').value;
  const p = document.createElement('p');
  p.innerText = `Nome: ${nome} ${sobrenome}`;
  info.appendChild(p);
};

const showEmail = () => {
  const email = document.querySelector('#input-email').value;
  const p = document.createElement('p');
  p.innerText = `Email: ${email}`;
  info.appendChild(p);
};

const showHouse = () => {
  const casa = document.querySelector('#house').value;
  const p = document.createElement('p');
  p.innerText = `Casa: ${casa}`;
  info.appendChild(p);
};

const showFamily = () => {
  const family = document.getElementsByName('family');
  const p = document.createElement('p');
  for (let index = 0; index < family.length; index += 1) {
    if (family[index].checked === true) {
      p.innerText = `Família: ${family[index].value}`;
    }
  }
  info.appendChild(p);
};

const showSubjects = () => {
  const subject = document.getElementsByName('materias');
  const p = document.createElement('p');
  const arrSubject = [];
  for (let index = 0; index < subject.length; index += 1) {
    if (subject[index].checked === true) {
      arrSubject.push(subject[index].value);
    }
  }
  const aux = arrSubject.join(', ');
  p.innerText = `Matérias: ${aux}`;
  info.appendChild(p);
};

const showExams = () => {
  const exam = document.querySelector('input[name="rate"]:checked').value;
  const p = document.createElement('p');
  p.innerText = `Avaliação: ${exam}`;
  info.appendChild(p);
};

const showComments = () => {
  const comments = document.getElementById('textarea').value;
  const p = document.createElement('p');
  p.innerText = `Observações: ${comments}`;
  info.appendChild(p);
};

const showInfo = (e) => {
  e.preventDefault();
  form.style.display = 'none';
  info.style.display = 'block';
  window.scrollTo(0,0);
  showFullName();
  showEmail();
  showHouse();
  showFamily();
  showSubjects();
  showExams();
  showComments();
};

btnSubmit.addEventListener('click', showInfo);

