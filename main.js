var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");
var returnTemp = document.getElementById("returnTemp")
var domString;
var tempValues = { fHot: 90, fCold: 32, cHot: 32, cCold: 0 };

function toCelsius (tempInput) {
    var tempInput = parseInt(tempInput.value);
    var celsius = (tempInput - 32) / 1.8;
    returnTemp.innerHTML = "That's " + (celsius.toFixed(2)) + " degrees Celsius!";
    colorResult(celsius, tempValues.cHot, tempValues.cCold)
}

function toFahrenheit (tempInput) {
    var tempInput = parseInt(tempInput.value);
    var fahrenheit = (tempInput * 1.8) + 32;
    returnTemp.innerHTML = "That's " + (fahrenheit.toFixed(2)) + " degrees Fahrenheit!";
    colorResult(fahrenheit, tempValues.fHot, tempValues.fCold);

}

function determineConverter () {
    if (radioCelsius.checked) {
        returnTemp = toCelsius(tempInput);
    } else if (radioFahrenheit.checked) {
        returnTemp = toFahrenheit(tempInput);
    } else if (radioCelsius === false && radioFahrenheit === false){
        alert ("Select Celsius or Fahrenheit to convert your temperture.");
    }
}

document.getElementById("determineConverter").addEventListener("click", determineConverter);

// document.getElementById("determineConverter")
//     .addEventListener("keyup", function(event) {
//     event.preventDefault();
//     if (event.keyCode == 13) {
//         document.getElementById("determineConverter").click(determineConverter);
//     }
// });


function colorResult(convertingTo, high, low) {
    convertingTo > high ? returnTemp.style.color = "red" : (convertingTo < low ? returnTemp.style.color = "blue" : returnTemp.style.color = "green");
}