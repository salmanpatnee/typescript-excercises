function make_car(manufacturer, model_name) {
    var features = [];
    for (var _i = 2; _i < arguments.length; _i++) {
        features[_i - 2] = arguments[_i];
    }
    var car = {
        manufacturer: manufacturer,
        model_name: model_name
    };
    if (features.length) {
        features.forEach(function (_a) {
            var key = _a[0], value = _a[1];
            car[key] = value;
        });
    }
    return car;
}
console.log(make_car("Honda", "Civic"));
console.log(make_car("Honda", "Civic", ["color", "red"], ["transmition", "Auto"], ["Mileage", 150]));
