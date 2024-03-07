let usernames: string[] = ["john", "alpine", "jack", "admin", "mark"];

usernames.map((username) => {
    if(username != "admin") {
        console.log(`Hello ${username}, thank you for logging in again`);
    } else {
        console.log('Hello admin, would you like to see a status report?');
    }
    
})