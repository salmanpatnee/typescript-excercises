"use strict";

let guests = ["John", "Mark", "Jane"];

function invitingGuests(guests) {
  guests.forEach((guest) => {
    console.log(`${guest}, I would like to invite you on a dinner.`);
  });
}

function append(arr, item) {
  arr.push(item);
  return arr;
}

invitingGuests(guests);

console.log(`${guests[2]} can't make the dinner.`);

guests[2] = "Alina";

invitingGuests(guests);

console.log("I just found a bigger table for the guests to be invited.");

// Add a guest to the beginning.
guests.unshift("Adnan");
// Add a guest to the middle.
guests.splice(3, 0, "Maya");
// Add a guest to the end.
append(guests, "Zohaib");

invitingGuests(guests);
