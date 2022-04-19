"use strict"

function calculate() {
	//variable
let radius= parseFloat(document.getElementById('radius').value);
	//calculation
let volume=4/3*Math.PI*radius**3
	//output
	document.getElementById("answer").innerHTML= "The volume of your sphere is " + volume.toFixed(2)+"cm³."
}