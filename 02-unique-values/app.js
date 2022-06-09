// Unique Values
const menu = [
  {
    name: 'pancakes',
    category: 'breakfast',
  },
  {
    name: 'burger',
    category: 'lunch',
  },
  {
    name: 'steak',
    category: 'dinner',
  },
  {
    name: 'chapat',
    category: 'breakfast',
  },
  {
    name: 'eggs',
    category: 'breakfast',
  },
  {
    name: 'pasta',
    category: 'dinner',
  },
];
// const categories = ['all', ...new Set(menu.map((item) => item.category))];
// map - get all instances
// new Set - narrow down instances
// ['all',...] - turn it back to array plus 'all' using spread operator


const categories = ['all', ...new Set(menu.map((item) => item.category))];
const result = document.querySelector('.result');
result.innerHTML = categories
  .map((category) => {
    return `<button>${category}</button>`;
  })
  .join('');
