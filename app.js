const db = require('./models');

db.user.create({
    firstName: 'Shayan',
    lastName: 'Gagan',
    age: 23, 
    email: 'gaganshayan@gmail.com'
});