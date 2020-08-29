const ingredients = [
  'Картошка',
  'Грибы',
  'Чеснок',
  'Помидоры',
  'Зелень',
  'Приправы',
];
const ingredOldRef = document.querySelector('.ingredients');

const list = document.createElement('ul');
for (const i in ingredients) {
  const li = document.createElement('li');
  li.textContent = ingredients[i];
  list.appendChild(li);
};

list.classList.add('ingred');
ingredOldRef.replaceWith(list);