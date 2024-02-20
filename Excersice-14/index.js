"use strict";

let guests = ["John", "Mark", "Jane"];
function invitingGuests(guests) {
    guests.forEach(guest => {
        console.log(`${guest}, I would like to invite you on a dinner.`);
    });
}
invitingGuests(guests);

console.log(`${guests[2]} can't make the dinner.`);

guests[2] = "Alina";
invitingGuests(guests);

console.log("Dear guests, I just found a bigger table for dinner, so I am going to invite more people.");

guests.unshift("Hina");

guests.splice(3, 0, "Mr. Middle");

guests.push("Zack");

invitingGuests(guests);
