const db = require('./models');

db.user.create({
    firstName: 'Shayan',
    lastName: 'Gagan',
    age: 23, 
    email: 'gaganshayan@gmail.com'
}).then(data => {
    console.log(data);
});

// searching by ID
db.user.findOne({
    where: { id: 1 }
}).then(user => {
    console.log('==== user 1 ===');
    console.log(user.dataValues);
});

// searching by name
db.user.findOne({
    where: { firstName: 'Shayan'}
}).then(user => {
    console.log('==== user 2 ===');
    console.log(user.dataValues);
});

// searching by email
db.user.findOne({
    where: { email: 'gaganshayan@gmail.com'}
}).then(user => {
    console.log('==== user 1 ===');
    console.log(user.dataValues);
});

// Find Or Create
db.user.findOrCreate({
    where: {
        firstName: 'Kevin',
        lastName: 'Malone',
    },
    defaults: { age: 40, email: 'kmalone@dundermifflin.com'}
}).then(([user, created]) => {
    console.log(`This was created on ${created}`);
    console.log(user.dataValues);
});

let queryOne = {
    where: {
        firstName: 'John',
        lastName: 'Krasinksi',
    },
    defaults: { age: 25, email: 'john@officestaff.com'}
};

db.user.findOrCreate(queryOne)
.then(([user, created]) => {
    console.log(created);
    console.log(user.dataValues);
});

// Find All
db.user.findAll()
.then(users => {
    console.log(users);

    for (let i = 0; i < users.length; i++) {
        let eachUser = users[i].dataValues;
        // console.log(eachUser);
        let firstName = eachUser.firstName;
        console.log(firstName);
    }
});