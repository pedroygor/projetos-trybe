const toDoContainer = document.getElementsByClassName('to-do-container')[0];
const itemList = document.getElementsByClassName('item-list');

function insertButton() {
  const btn = document.createElement('button');
  btn.setAttribute('id', 'criar-tarefa');
  btn.setAttribute('type', 'button');
  btn.innerText = 'Adicionar';
  toDoContainer.appendChild(btn);
}
function insertInput() {
  const input = document.createElement('input');
  input.setAttribute('type', 'text');
  input.setAttribute('name', 'texto');
  input.setAttribute('id', 'texto-tarefa');
  toDoContainer.appendChild(input);
}

function insertOrdenedList() {
  const ol = document.createElement('ol');
  ol.setAttribute('id', 'lista-tarefas');
  toDoContainer.appendChild(ol);
}

insertInput();
insertButton();
insertOrdenedList();

const btnToDo = document.getElementById('criar-tarefa');
const inputValue = document.getElementById('texto-tarefa');
const ol = document.getElementById('lista-tarefas');

function createLi() {
  const li = document.createElement('li');
  li.classList.add('item-list');
  return li;
}
const addClassSelected = (e) => {
  for (let i = 0; i < itemList.length; i += 1) {
    if (itemList[i] === e.target) e.target.classList.add('selected');
    else itemList[i].classList.remove('selected');
  }
};

function paintLi() {
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('click', addClassSelected);
  }
}

const teste = (e) => {
  e.target.classList.toggle('completed');
};

function taskCompleted() {
  for (let i = 0; i < itemList.length; i += 1) {
    itemList[i].addEventListener('dblclick', teste);
  }
}

function getItemListLocalStorage() {
  if (localStorage.length !== 0) {
    ol.innerHTML += localStorage.getItem('task');
    paintLi();
    taskCompleted();
  }
}
window.onload = getItemListLocalStorage;

const createToDo = () => {
  const text = inputValue.value.trim();
  if (!text) {
    alert('tarefa inválida');
  } else {
    const li = createLi();
    li.innerText = text;
    inputValue.value = '';
    ol.appendChild(li);
  }
  paintLi();
  taskCompleted();
};

function createButtonClearAll() {
  const button = document.createElement('button');
  button.setAttribute('id', 'apaga-tudo');
  button.innerText = 'Limpar Lista';
  toDoContainer.appendChild(button);
}

function createButtonClearCompleted() {
  const button = document.createElement('button');
  button.setAttribute('id', 'remover-finalizados');
  button.innerText = 'Limpar Completos';
  toDoContainer.appendChild(button);
}

function createButtonUpItem() {
  const button = document.createElement('button');
  button.setAttribute('id', 'mover-cima');
  button.innerText = '🔺';
  toDoContainer.appendChild(button);
}
function createButtonDownItem() {
  const button = document.createElement('button');
  button.setAttribute('id', 'mover-baixo');
  button.innerText = '🔻';
  toDoContainer.appendChild(button);
}
function createButtonRemoveSelected() {
  const button = document.createElement('button');
  button.setAttribute('id', 'remover-selecionado');
  button.innerText = 'Remover Selecionado';
  toDoContainer.appendChild(button);
}

function createButtonSaveTask() {
  const button = document.createElement('button');
  button.setAttribute('id', 'salvar-tarefas');
  button.innerText = 'Salvar tarefa';
  toDoContainer.appendChild(button);
}

createButtonDownItem();
createButtonUpItem();
createButtonRemoveSelected();
createButtonClearCompleted();
createButtonClearAll();
createButtonSaveTask();
const btnClearAll = document.getElementById('apaga-tudo');
const btnClearCompleted = document.getElementById('remover-finalizados');

btnToDo.addEventListener('click', createToDo);

const clearList = () => {
  ol.innerHTML = '';
};

const clearCompletedList = () => {
  const completed = document.querySelectorAll('.completed');
  for (let k = 0; k < completed.length; k += 1) {
    completed[k].remove();
  }
};

const upItem = () => {
  const item = document.querySelector('.selected');
  if (item === null) {
    return alert('Elemento não selecionado');
  }
  if (item.previousElementSibling !== null) {
    item.parentNode.insertBefore(item, item.previousElementSibling);
  }
};

const downItem = () => {
  const item = document.querySelector('.selected');
  if (item === null) {
    return alert('elemento não selecionado');
  }
  if (item.nextElementSibling !== null) {
    item.parentNode.insertBefore(item.nextElementSibling, item);
  }
};

const removeSelected = () => {
  const item = document.querySelector('.selected');
  if (item === null) {
    return alert('não tem classe selecionada');
  }
  item.remove();
};

const saveTask = () => {
  localStorage.setItem('task', ol.innerHTML);
};

const btnDown = document.getElementById('mover-baixo');
const btnUp = document.getElementById('mover-cima');
const btnRemoveSelected = document.getElementById('remover-selecionado');
const btnSaveTask = document.getElementById('salvar-tarefas');

btnUp.addEventListener('click', upItem);
btnDown.addEventListener('click', downItem);
btnRemoveSelected.addEventListener('click', removeSelected);
btnClearAll.addEventListener('click', clearList);
btnClearCompleted.addEventListener('click', clearCompletedList);
btnSaveTask.addEventListener('click', saveTask);
