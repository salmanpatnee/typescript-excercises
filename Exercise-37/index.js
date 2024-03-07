function city_country(city, country) {
    return "\"".concat(city, ", ").concat(country, "\"");
}
console.log(city_country("Newyork", "America"));
console.log(city_country("Istanbul", "Turkey"));
console.log(city_country("Karachi", "Pakistan"));
