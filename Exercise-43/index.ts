
type Car = {
    manufacturer: string, 
    model_name: string, 
    [feature: string]: string | number
}

function make_car(manufacturer: string, model_name: string, ...features: [string, string | number][]): Car {
    let car = {
        manufacturer, 
        model_name
    }

    if(features.length){
        features.forEach(([key, value]) =>{
            car[key] = value;
        })
    }
    return car;
}

console.log(make_car("Honda", "Civic"));
console.log(make_car("Honda", "Civic", ["color", "red"], ["transmition", "Auto"], ["Mileage", 150]));
