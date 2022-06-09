const person = ['hello', 'great'];

const testPerson = person.map(function (item) {
  console.log(item);
  return item;
});

console.log(testPerson);
const newPerson = person.map(function (item) {
  if (item === 'hello') {
    return item.toUpperCase();
  }
  return item;
});
console.log(newPerson);
// using the square bracket key notation to dynamically change an object
const state = {
  loading: true,
  name: '',
  job: ''
};
function updateState(key, value) {
  state[key] = value;
}
updateState('name','hassan')
updateState('job','developer')
updateState('loading',false) // changed value
updateState('Products',['JS','TS'])



console.log(state);