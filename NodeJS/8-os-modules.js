// OS Module
// Interacting with operating system as well as the server

const os = require('os')

// info about current user

os
const user = os.userInfo();

console.log(user);

// method returns the system uptime in seconds

console.log(`The System UpTime Is ${os.uptime()} seconds`);


const currentOS = {
    name: os.type(),
    release: os.release(),
    totalMemory: os.totalmem(),
    freeMemory: os.freemem()
}

console.log(currentOS)