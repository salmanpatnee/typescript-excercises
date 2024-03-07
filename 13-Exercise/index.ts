// List of guests that I would like to invite them on the dinner.

let guests: string[] = ["John", "Mark", "Jane"];

function invitingGuests(guests: string[]): void {

    guests.forEach(guest => {
        console.log(`${guest}, I would like to invite you on a dinner.`);
    });
}

invitingGuests(guests);

// Name of the guest that can't make the dinner.
console.log(`${guests[2]} can't make the dinner.`);

// Replace the guest who can't make the dinner and inviting the new list of guest.
guests[2] = "Alina";

invitingGuests(guests);   