//solution
function discribeCity(city, country) {
    if (country === void 0) { country = "unkonwn"; }
    console.log("".concat(city, " is  in ").concat(country));
}
// call the function for three different cities:
discribeCity("Karachi", "pakistan"); //city in the default country:
discribeCity("Tokyo", "japan"); //city not in the default country:
discribeCity("New York"); //city in the default country, country not specified:
