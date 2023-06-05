const personOne = {
  name: {
    first: 'Timmy',
    last: 'Timtim'
  },
  age: 30,
  location: {
    city: 'New York',
    state: 'New York',
    zip: 10001
  }
};

const personTwo = {
  name: {
    first: 'Julie',
    last: 'July'
  },
  age: 28,
  location: {
    city: 'Albany',
    state: 'New York',
    zip: 12201
  }
};

function moveLocation(person, nLoc) {
  person.location = nLoc;
}

const nLoc = {
    city: 'Rochester',
    state: 'New York',
    zip: 14604
}

moveLocation(personTwo, nLoc);

nLoc.city = 'Buffalo';
nLoc.zip = 14201;

console.log(personTwo.location.city);

const nLoc2 = {
    city: 'Mountain View',
    state: 'California',
    zip: 94035
}

moveLocation(personOne, nLoc2);

const personThree = {
  name: {
    first: 'Keanu',
    last: personOne.name.last + '-' + personTwo.name.last
  },
  age: 0,
  location: personOne.location
};

function incrementAges() {
  personOne.age += 300;
  personTwo.age += 300;
  personThree.age += 300;
}

moveLocation(personThree, { city: 'Phoenix', state: 'Arizona', zip: 85008 });
incrementAges();

const personFour = clonePerson(personThree);
const personFive = clonePerson(personThree);

function clonePerson(person) {
  return JSON.parse(JSON.stringify(person));
}

moveLocation(personFour, { city: 'Las Vegas', state: 'Nevada', zip: 89109 });
moveLocation(personFive, { city: 'Tuscon', state: 'Arizona', zip: 85701 });

console.log(personOne.name);    
console.log(personTwo.name);    
console.log(personThree.name);  
console.log(personFour.name);   
console.log(personFive.name);   

console.log(personOne.location);    
console.log(personTwo.location);    
console.log(personThree.location);  
console.log(personFour.location);   
console.log(personFive.location);   

console.log(personOne.age);    
console.log(personTwo.age);    
console.log(personThree.age);  
console.log(personFour.age);   
console.log(personFive.age);   

const thoughts = { property: 'value' };
personOne.thoughts = thoughts;
personTwo.thoughts = thoughts;
personThree.thoughts = thoughts;
personFour.thoughts = thoughts;
personFive.thoughts = thoughts;

thoughts.property = 'HIVE MIND THOUGHTS';

console.log(personOne.thoughts);    
console.log(personTwo.thoughts);     
console.log(personThree.thoughts);   
console.log(personFour.thoughts);    
console.log(personFive.thoughts);     