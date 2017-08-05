var tempInput = document.getElementById("tempInput");
var radioCelsius = document.getElementById("radioCelsius");
var radioFahrenheit = document.getElementById("radioFahrenheit");
var returnTemp = document.getElementById("returnTemp")
var domString;
var tempValues = { fHot: 90, fCold: 32, cHot: 32, cCold: 0 };

function toCelsius (tempInput) {
    var tempInput = parseInt(tempInput.value);
    var celsius = (tempInput - 32) / 1.8;
    returnTemp.innerHTML = (celsius.toFixed(2));

colorResult(celsius, tempValues.cHot, tempValues.cCold)
}

function toFahrenheit (tempInput) {
    var tempInput = parseInt(tempInput.value);
    var fahrenheit = (tempInput * 1.8) + 32;
    returnTemp.innerHTML = (fahrenheit.toFixed(2));
    returnTemp.innerHTML = fahrenheit;

colorResult(fahrenheit, tempValues.fHot, tempValues.fCold);

}

function determineConverter () {
    if (radioCelsius.checked) {
        returnTemp = toCelsius(tempInput);
    } else if (radioFahrenheit.checked) {
        returnTemp = toFahrenheit(tempInput);
        domString += '<h2 id="returnTemp">' + returnTemp + '</h2>';
    } else if (radioCelsius === false && radioFahrenheit === false){
        alert ("Select Celsius or Fahrenheit to convert your temperture.");
    }
    console.log("this is the convert temp function");
}
function resetForm() {
    document.getElementById("tempForm").reset();
    document.getElementById("returnTemp").reset(clear);
}

document.getElementById("determineConverter").addEventListener("click", determineConverter);

function colorResult(convertingTo, high, low) {
    convertingTo > high ? returnTemp.style.color = "red"
   	: (convertingTo < low ? returnTemp.style.color = "blue"
 		: returnTemp.style.color = "green");
}

