var usernames = ["john", "alpine", "jack", "admin", "mark"];
usernames.map(function (username) {
    if (username != "admin") {
        console.log("Hello ".concat(username, ", thank you for logging in again"));
    }
    else {
        console.log('Hello admin, would you like to see a status report?');
    }
});
