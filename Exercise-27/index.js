var favorite_fruits = ["Mango", "Lychee", "Orange"];
if (favorite_fruits.find(function (favorite_fruit) { return favorite_fruit === "Mango"; })) {
    console.log("You really like Mango");
}
if (favorite_fruits.find(function (favorite_fruit) { return favorite_fruit === "Lychee"; })) {
    console.log("You really like Lychee");
}
if (favorite_fruits.find(function (favorite_fruit) { return favorite_fruit === "Orange"; })) {
    console.log("You really like Orange");
}
