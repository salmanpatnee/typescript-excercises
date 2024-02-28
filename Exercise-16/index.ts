let locations: string[] = ['America', 'London', 'Madinah', 'Kashmir', 'Turkey'];

// Original structure
console.log(`Original: ${locations}`);

let locations_asc_sorted: string[] = [...locations].sort();

// Sorted in alphabetical order
console.log(`Alphabetical order:  ${locations_asc_sorted}`); 

// Original structure
console.log(`Original: ${locations}`);

// Sorted in reverse alphabetical order
let locations_desc_sorted: string[] = [...locations_asc_sorted].reverse();
console.log(`Reverse alphabetical order:  ${locations_desc_sorted}`); 

// Original structure
console.log(`Original: ${locations}`);

// Reverse
console.log(`Original reverse: ${locations.reverse()}`)

// Original structure
console.log(`Original: ${locations.reverse()}`)

// Sorted in alphabetical order
console.log(`Original alphabetical order: ${locations.sort()}`)

// Sorted in alphabetical order
console.log(`Original reverse alphabetical order: ${locations.reverse()}`)
