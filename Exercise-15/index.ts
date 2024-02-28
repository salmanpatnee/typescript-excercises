// List of guests that I would like to invite them on the dinner.

let guests: string[] = ["John", "Mark", "Jane"];

function invitingGuests(guests: string[]): void {

    guests.forEach(guest => {
        console.log(`${guest}, I would like to invite you on a dinner.`);
    });
}

// Add an item to the end of the given array
function append(arr: any[], item: string): any[] {
    arr.push(item);
    return arr;
}

invitingGuests(guests);

// Name of the guest that can't make the dinner.
console.log(`${guests[2]} can't make the dinner.`);

// Replace the guest who can't make the dinner and inviting the new list of guest.
guests[2] = "Alina";

invitingGuests(guests);   

console.log("I just found a bigger table for the guests to be invited.")

// Add a guest to the beginning. 
guests.unshift("Adnan");

// Add a guest to the middle.
guests.splice(3,0,"Maya");

// Add a guest to the end.
append(guests, "Zohaib");

invitingGuests(guests);   

console.log("Sorry, but I can only invite two people for dinner.");

while (guests.length > 2) {
    let guest = guests.pop();
    console.log(`Sorry, ${guest} I can't invite you.`);
}

invitingGuests(guests);


while (guests.length >= 1) {
    guests.pop();
}

console.log(guests)


