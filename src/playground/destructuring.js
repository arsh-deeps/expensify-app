// console.log('destructuring');

// const person = {
//     age: 12,
//     location: {
//         city: 'mukerian',
//         temp: 33
//     }
// }

// const {name = 'anonymous' , age} = person;

// console.log(`${name} is ${age}`);

// const {city,temp: temprature = 46}   = person.location;

// if(city && temprature) {
//     console.log(`It is ${temprature} in ${city}`);
// }


// const book ={
//     title: 'Fault in our stars',
//     author: 'andrew',
//     publisher: {
//         name: 'penguin'
//     }
// }

// const {name: publisherName = 'Self-published'} = book.publisher;

// console.log(publisherName);



// array destructuring

const address = ['1211 S alfj street','mukerian','punjab','india'];

const [street, , state, country,continent='asia'] = address;

console.log(street,state,country,continent);
