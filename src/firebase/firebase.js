import * as firebase from 'firebase';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID,
    measurementId: process.env.FIREBASE_MEASUREMENT_ID
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);
//firebase.analytics();

const database = firebase.database();

export {firebase, database as default};
// const expenses = [
//     {
//         description: "Rent bill",
//         note: "FIrst rent bill",
//         amount: 67,
//         createdAt: 90
//     },
//     {
//         description: "Water bill",
//         note: "FIrst water bill",
//         amount: 6700,
//         createdAt: 1
//     },
//     {
//         description: "Phone",
//         note: "Got a new phone",
//         amount: 120000,
//         createdAt: 90
//     }
// ];

// database.ref('expenses').on('child_changed', (snapshot) => {
//     console.log(snapshot.key, snapshot.val());
// });

// database.ref('expenses').on('value', (snapshot) => {
//     const expenses = [];

//     snapshot.forEach((childSnapshot) => {
//         expenses.push({
//             id: childSnapshot.key,
//             ...childSnapshot.val()
//         })
//     });
//     console.log(expenses);
// });

//database.ref('expenses').push(expenses[0]);



// database.ref().on('value', (snapshot) => {
//     const data = snapshot.val();
//     console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`);
// }, (e) => {
//     console.log('Error fetching data', e)
// });

// database.ref('name').set("Paimo Emmanuel");

// const onValueChange = database.ref().on('value', (snapshot) => {
//     console.log(snapshot.val());
// }, (e) => {
//     console.log('Error with data fetching', e)
// });

// setTimeout(() => {
//     database.ref('age').set(20);
// }, 4000);
// setTimeout(() => {
//     database.ref().off(onValueChange);
// }, 8000);
// setTimeout(() => {
//     database.ref('age').set(29);
// }, 12000);

// database.ref('job/company').once('value').then((snapshot) => {
// console.log(snapshot.val());
// }).catch((e) => {
//     console.log('Error fetching data', e)
// });

// database.ref().set({
//     name: "Paimo Oluwagbenga",
//     age: 20,
//     stressLevel: 6,
//     job: {
//         title: "Software developer",
//         company: 'Google'
//     },
//     location: {
//         city: 'Lagos',
//         country: 'Nigeria'
//     }
// }).then(() => {
//     console.log('Data is saved');
// }).catch((error) => {
//     console.log('Error: ', error);
// });

// database.ref().update({
//     stressLevel: 9,
//     "job/company": 'Amazon',
//     'location/city': 'Abuja'
// });

// database.ref('isSingle').remove().then(() => {
//     console.log("Remove succeeded.")
//   }).catch((error) => {
//     console.log("Remove failed: " + error.message)
//   });

