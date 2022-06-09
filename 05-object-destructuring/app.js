// faster/easier way to access/unpack values from arrays

// for destructuring objects order matters
const bob = {
  first: 'bob',
  last: 'sanders',
  city: 'chicago',
  siblings: {
    sister: 'jane',
  },
};
const {
  first: firstName, // aliasing such that firstname becomes the new property name
  last,
  city,
  zip,
  siblings: { sister: favoriteSibling },
} = bob;
console.log(firstName, last, city, zip, favoriteSibling);

const first_Name = bob.first;
const lastName = bob.last;
const sister = bob.siblings.sister;

console.log(first_Name, lastName, sister);

function printPerson(person) {
  console.log(person.first);
}  // or we can destructure from the parameter list as an object

function ourPerson({ first, last, city, siblings: { sister } }) {
console.log(city,first,last,sister);
}

printPerson(bob);
ourPerson(bob);
