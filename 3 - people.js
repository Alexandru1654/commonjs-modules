const createName = require('./1 - names');
const createHobbies = require('./2 - hobbies');

// Create a function
function createPerson() {
    const name = createName('Simone', 'Carmello');
    const hobbies = createHobbies('Reading', 'Traveling', 'Cooking');

    return {
        firstName: name.firstName,
        lastName: name.lastName,
        hobbies: hobbies.hobbies
    };
}

module.exports = createPerson;

const person = createPerson();
console.log(person);
