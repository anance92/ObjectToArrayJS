// Create an object

// The keys are first, second, third...
// The values assigned to the keys are 'person1', 'person2', 'person3'...

const objectNames = {
    first: 'person1',
    second: 'person2',
    third: 'person3'
};

// Convert objectNames to an array of keys

const arrayNamesKeys = Object.keys(objectNames);

// This will output [ 'first', 'second', 'third' ]

console.log(arrayNamesKeys);

// Convert objectNames to an array of values

const arrayNamesValues = Object.values(objectNames);

// This will output [ 'person1', 'person2', 'person3' ]

console.log(arrayNamesValues);