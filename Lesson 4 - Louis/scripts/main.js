/* Declare Output Variable */
var demo1;

/* Declare Button Function */
var clickEvent = function() {
	/* Declare Input Variables */
	var firstName = document.getElementById("firstName").value;
	var lastName = document.getElementById("lastName").value;
	var age = document.getElementById("age").value;
	var getAge = document.getElementById("getAge").value;
	var fam1 = document.getElementById("fam1").value;
	var fam2 = document.getElementById("fam2").value;
	var fam3 = document.getElementById("fam3").value;
	/* Populate Array */
	var famMbrs = [fam1, fam2, fam3];

	/* Test for Age < 50 */
	if (age < 50) {
		alert("The young do not know enough to be prudent, and therefore they attempt the impossible -- and achieve it, generation after generation.");
		document.getElementById("demo1").innerHTML = "Hello "+ firstName + " " + lastName + ", you are still young at " + age + " years of age. You will be " + (Number (age) + Number (getAge)) + " years old in " + getAge + " years. " + famMbrs[0] + ", " + famMbrs[1] + ", and " + famMbrs[2] + " are related to you.";
	}
	else {
		alert("Age is whatever you think it is. You are as old as you think you are.");
		document.getElementById("demo1").innerHTML = "Hello "+ firstName + " " + lastName + ", you are over the hill at " + age + " years old. You will be " + (Number (age) + Number (getAge)) + " years old in " + getAge + " years. " + famMbrs[0] + ", " + famMbrs[1] + ", and " + famMbrs[2] + " are related to you.";
	}
}
