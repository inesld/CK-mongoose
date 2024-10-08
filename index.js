const express = require("express") // import express module 
const mongoose = require("mongoose")  // import mongoose module
require('dotenv').config() // for read .env file 
const Person = require('./src/models/person')

const app = express()  // instance de l'application express 

const MONGO_URL = process.env.MONGO_URL
const PORT = process.env.PORT

// connect to data base mongoDB cluster
mongoose.connect(MONGO_URL,{ useNewUrlParser:true, useUnifiedTopology: true})

//check if connection is succesfull 
const db = mongoose.connection
db.on('error', console.error.bind(console, 'MongoDB connection is faild')); 
db.once('open', ()=> {
   console.log('Connected to MongoDB');
})

// Person.deleteMany({ age: { $gt: 20 } })
//   .then(result => {
//     console.log(`${result.deletedCount} documents deleted`);
//   })
//   .catch(error => {
//     console.error('Error deleting documents:', error);
//   });

//************** */ Create new Person 
// const newPerson =  new Person ({
//     name: 'ijlel',
//     age:30,
//     favoriteFoods:['Pizza','Pasta'],
//     prenom:'boubaker'
// })
// newPerson.save()
// .then(personCreated => {
//     console.log('Person Saved', personCreated);
// })
// .catch(error => {
//     console.log('Error :', error);
// })


// ********** create More Person 
// const arrayOfPerson = [{name:"azyz", age:30, favoriteFoods:['Burger','Pasta'],},{name:'dali', age:30,  favoriteFoods:['Libanais','Pasta']},{name:'khaled', age:30,favoriteFoods:['salade','Pasta']}, {name:'ijlel', age:30, favoriteFoods:['Sauce']}]
// Person.create(arrayOfPerson)
// .then(personsCreated => {
//     console.log('Persons are Saved', personsCreated);
// })
// .catch(error => {
//     console.log('Error :', error);
// })

// *********** Find by name 

// const searchName = 'dali' 
// Person.find({name: searchName})
// .then(foundPerson => {
//     console.log('Person foundPerson', foundPerson);
// })
// .catch(error => {
//     console.log( ` Person with name : ${searchName} not found`, error);
// })

// const searcFood = 'Burger' 
// Person.find({favoriteFoods: searcFood})
// .then(foundPerson => {
//     console.log('Person foundPerson', foundPerson);
// })
// .catch(error => {
//     console.log( ` Person with name : ${searcFood} in favoriteFood not found`, error);
// })


// const personId = '66c4cd80d8c73ec77d816217'
// Person.findById(personId)
// .then(foundPerson => {
//     console.log('Person foundPerson', foundPerson);
// })
// .catch(error => {
//     console.log( ` Person with id : ${personId}  not found`, error);
// })


// const personId = '66c4cd80d8c73ec77d816211'
// Person.findById(personId)
// .then(foundPerson => {
//      if (!foundPerson) {
//         console.log( ` Person with id : ${personId}  not found`);
//         return;
//      }else {
//         foundPerson.favoriteFoods.push('Boissons')

//          console.log('Person foundPerson', foundPerson);
//          return foundPerson.save();
//      }
// })
// .catch(error => {
//     console.log( `Server Error : `, error);
// })


// const newName = 'Ijelel Boubaker'
// const exName = 'ijlel'

// Person.findOneAndUpdate( 
//  {name: exName},
//  {name: newName},
//  {new : true}  // this option return the updated document object
// )
// .then(foundPerson => {
//      if (!foundPerson) {
//         console.log( ` Person with name : ${exName}  not found`);
//         return;
//      }else {
//          console.log('Person foundPerson', foundPerson);
//          return foundPerson.save();
//      }
// })
// .catch(error => {
//     console.log( `Server Error : `, error);
// })


// const personId = '66c4cd80d8c73ec77d816215'
// Person.findByIdAndDelete(personId)
// .then(foundPerson => {
//      if (!foundPerson) {
//         console.log( ` Person with id : ${personId}  not found`);
//         return;
//      }else {
//          console.log('Person Deleted', foundPerson);
//          return foundPerson.save();
//      }
// })
// .catch(error => {
//     console.log( `Server Error : `, error);
// })


// // Chain search query helpers to find people who like burritos
// Person.find({ favoriteFoods: 'burritos' })
//   .sort('name')   // Sort the results by name
//   .limit(2)       // Limit the results to two documents
//   .select('-age') // Hide their age
//   .exec()
//   .then(data => {
//     console.log('People who like burritos:', data);
//   })
//   .catch(err => {
//     console.error(err);
//   })
//   .finally(() => {
//     mongoose.connection.close();
//   });


// demareer le serveur
app.listen(PORT, () => {
console.log(`Server is running on http:localhost:${PORT}`);
})

// mongodb+srv://irezgui:<password>@cluster0.denjqnp.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0