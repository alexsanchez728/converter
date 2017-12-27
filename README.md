# NSS-Exercise: temperature-converter

## Project Description:
> Write a program that will convert a temperature from fahrenheit to celsius, or from celsius to fahrenheit.

## Project Requirements Included:
* Have one input field where someone can enter in a temperature
* Create a radio button group where Celsius or Fahrenheit can be selected
* Create a button that, when clicked, displays the converted temperature
* Create another button that, when clicked, clears any text in the input field
* Add an event handler to the input field that checks if the user pressed the enter key, and if that happens, perform the conversion
* If the temperature is greater than 90F/32C the color of the converted temperature should be red
* If the temperature is less than 32F/0C the color of the converted temperature should be blue
* For any other temperature, the color should be green


## Final Product

A simple web for converting any entered temperature that also shows the colors red, blue, or green depending on the temperature being hot, cold, or temperate, respectively.

This project was a practical exercise in using event listeners, conditional statements including ternary operators, and Javascript's arithmetic operators.

## How to Run it
Must have Node installed first
```
$ git clone https://github.com/alexsanchez728/converter.git
$ cd converter/
$ npm install http-server -g
$ http-server -p 8080
```
This will show up in your browser at:
`http://localhost:8080`
