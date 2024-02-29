"use strict";

let guests = ["John", "Mark", "Jane"];

console.log(`I am inviting ${guests.length} guests. Here is the list.`);

guests.forEach(guest => {
    console.log(`${guest}, I would like to invite you on a dinner.`);
});