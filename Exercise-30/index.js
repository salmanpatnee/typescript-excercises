var current_users = ["Asim", "Salman", "Faraz", "Noman", "Hamza"];
var new_users = ["Naeem", "SALMAN", "Saif", "Zubair", "Hamza"];
new_users.map(function (new_user) {
    if (current_users.find(function (current_user) { return current_user.toLowerCase() == new_user.toLowerCase(); })) {
        console.log("Please select another username. ".concat(new_user, " is already taken."));
    }
    else {
        console.log("username: ".concat(new_user, " is available."));
    }
});
