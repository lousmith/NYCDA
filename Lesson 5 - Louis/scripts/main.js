/*Define Variables*/
var states;
var statesort
states = ['Virginia', 'New Jersey', 'Pennsylvania', 'New Hampshire', 'New York'];
statesort = states;
alert(states);
statesort.sort();
alert(statesort);
alert("I have been to " + statesort.length +" states.");
alert("The second state in my arry is " + statesort[1]);
alert("The first two states I have been to are " + statesort[0] + " and " + statesort[1] + ".");
statesort.push("Vermont");
alert(statesort);
statesort.sort().reverse();
alert(statesort);

var tothesecondpower = function(number) {
	return(number * number);
}

alert(tothesecondpower(3));

/*function varFunction() {
	l = 6;
	w = 8;
	h = 4;
	a = l * w * h;
	debugger;
	document.getElementById("demo1").innerHTML = "(A)rea = (L)ength x (W)idth x (H)eight";
	document.getElementById("demo2").innerHTML = "L="+l+",  W="+w+",  H="+h;
	document.getElementById("demo3").innerHTML = "A = "+l+" x "+w+" x "+h;
	document.getElementById("demo4").innerHTML = "A = "+l*w*h;
}

function debFunction() {
	document.getElementById("demo1").innerHTML = "";
	document.getElementById("demo2").innerHTML = "";
	document.getElementById("demo3").innerHTML = "";
	document.getElementById("demo4").innerHTML = "";
	alert("Hello!!!\nI think I got this.");

}


function datFunction() {
	document.getElementById("demo1").innerHTML = "var length = 16;              // Number";
	document.getElementById("demo2").innerHTML = "var lastName = "+"Johnson"+";                      // String";
	document.getElementById("demo3").innerHTML = "var cars = ["+"Saab"+", "+"Volvo"+", "+"BMW"+"];           // Array";
	document.getElementById("demo4").innerHTML = "var x = {firstName:"+"John"+", lastName:"+"Doe"+"};    // Object";
}
*/

