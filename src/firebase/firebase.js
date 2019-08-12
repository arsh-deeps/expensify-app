import * as firebase from 'firebase';

const firebaseConfig = {
    apiKey: "AIzaSyB7wWjR2tK1nHZmWWtSE7ypLm7ZTpY-d5U",
    authDomain: "expensify-arsh.firebaseapp.com",
    databaseURL: "https://expensify-arsh.firebaseio.com",
    projectId: "expensify-arsh",
    storageBucket: "",
    messagingSenderId: "422167446830",
    appId: "1:422167446830:web:0989ac4c4c79e07d"
};

firebase.initializeApp(firebaseConfig);

const database = firebase.database();

export { firebase, database as default }; 

// database.ref().set({
//     name: "Arsh",
//     age: 20,
//     location: {
//         city: "jalandhar",
//         country: "india"
//     }
// }).then(()=>{
//     console.log('Data is saved');
// }).catch((e)=>{
//     console.log('Failed. ',e);
// })

// database.ref('age').remove().then(()=>{
//     console.log('removed');
// })

// database.ref().update({
//     age:21,
//     'location/city': "mukerian"
// })

// database.ref().once('value').then((snapshot)=>{
//     console.log(snapshot.val());
// })

// database.ref().on('value',(snapshot)=>{
//     console.log(snapshot.val());
// })

// database.ref().off();

// database.ref('expenses').push({
//     description: 'one',
//     note: '',
//     amount: 12300,
//     createdAt: 984796516434
// });
