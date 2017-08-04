function toCelsius (inputTemp) {

	var convertedTemp = (inputTemp × 1.8) + 32;

// USING IF STATEMENTS
	// if (convertedTemp > 32 ) {
	// 	document.getElementById("retruendTemp").addClass(".hot");
	// } else if (convertedTemp < 0) {
	// 	document.getElementById("retruendTemp").addClass(".cold");
	// } else {
	// 	document.getElementById("retruendTemp").addClass(".fair");
	// }

//TOGGLING
	// div will always have class="fair" which is green until...
	h3.classList.toggle("hot", convertedTemp < 32 );
	h3.classList.toggle("cold", convertedTemp > 0 );
	
}

function toFahrenheit (inputTemp) {

	var convertedTemp = (inputTemp - 32) / 1.8;

// USING IF STATEMENTS
	// if (convertedTemp > 90 ) {
	// 	document.getElementById("retruendTemp").addClass(".hot");
	// } else if (convertedTemp < 32) {
	// 	document.getElementById("retruendTemp").addClass(".cold");
	// } else {
	// 	document.getElementById("retruendTemp").addClass(".fair");
	// }

//TOGGLING
	// div will always have class="fair" which is green until...
	h3.classList.toggle("hot", convertedTemp < 90 );
	h3.classList.toggle("cold", convertedTemp > 32 );
	
}

// Get a reference to the button element in the DOM
var button = document.getElementById("converter");

// Get a reference to the number input element in the DOM
var inputTemp = document.getElementById("inputTemp")

// This function should determine which conversion should
// happen based on which radio button is selected.
function determineConverter () {
  console.log("event", clickEvent);

	//grabs the value of the chosen radio button
	//and stores in convertionChoice
	var convertionChoice = document.getElementById("convertingButton").value;

	// runs given function based on choice
	if (convertChoice === celsius) {
		toCelsius(inputTemp);
	} else if (convertChoice === fahrenheit) {
		toFahrenheit(inputTemp);
	}
}

// Assign a function to be executed when the button is clicked
button.addEventListener("click", determineConverter);


function printToDom() {
	var domString = document.write()
}