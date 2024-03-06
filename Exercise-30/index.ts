let current_users: string[] = ["Asim", "Salman", "Faraz", "Noman", "Hamza"];
let new_users: string[] = ["Naeem", "SALMAN", "Saif", "Zubair", "Hamza"];

new_users.map(new_user => {
    if(current_users.find(current_user => current_user.toLowerCase() == new_user.toLowerCase())) {
        console.log(`Please select another username. ${new_user} is already taken.` );
    } else {
        console.log(`username: ${new_user} is available.`);

    }
})

