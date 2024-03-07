function order_sandwich() {
    var items = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        items[_i] = arguments[_i];
    }
    console.log('Sandwich includes:');
    items.forEach(function (item) { return console.log(item); });
    console.log("\n");
}
order_sandwich("Extra chicken", "Grilled mushroooms");
order_sandwich("Extra chicken", "Grilled mushroooms", "Extra cheese slice");
order_sandwich("Extra chicken", "Grilled mushroooms", "Extra cheese slice", "Thousand island sauce");
