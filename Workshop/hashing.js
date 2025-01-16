// to run make sure cd to workshop folder then type - node hashing.js

const bcrypt = require('bcryptjs'); // Correct module name

let myPassword = 'letmein';

// Hashing the password using hashSync
console.time('Hashing');
let hashedPassword = bcrypt.hashSync(myPassword, 11); //when i change the amount of salt from 10 to 11 (work factor) the hashing time almost doubles
console.timeEnd('Hashing');

console.log('The hashed password is: ' + hashedPassword);


//in db
let savedPassword = '$2a$11$buPrEmGXb1x6ghPf7oPYIOh6epNl18pcVyORRy.ij2sretA8.hTuC';

//LOGIN

let isValid = bcrypt.compareSync(myPassword, savedPassword);
console.log(isValid);

// the hash is irreversible - $2a is the version and $11 means the amount of salt