//JavaScript містить масив рядків.

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

// Напиши скрипт, який для кожного елемента масиву ingredients:

// Створить окремий елемент <li>. Обов'язково використовуй метод document.createElement().
// Додасть назву інгредієнта як його текстовий вміст.
// Додасть елементу клас item.
// Після чого, вставить усі <li> за одну операцію у список ul#ingredients.

const list = document.querySelector('#ingredients');

const elements = [];

for (let i = 0; i < ingredients.length; i += 1) {
    const newItemEl = document.createElement('li');
    newItemEl.classList.add('item');
    newItemEl.textContent = ingredients[i];
    elements.push(newItemEl);
}

list.append(...elements);
