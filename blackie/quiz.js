
var done = document.getElementById("done");

done.addEventListener("click", function() {

	var q1 = document.quiz.one.value;
	var q2 = document.quiz.two.value;
	var q3 = document.quiz.three.value;
	var q4 = document.quiz.four.value;
	var q5 = document.quiz.five.value;
	var correct = 0;

	if(q1 == "California") {
		correct = correct + 1;
	}
	if(q2 == "T'Chaka") {
		correct = correct + 1;
	}
	if(q3 == "Dora") {
		correct = correct + 1;
	}
	if(q4 == "Bashenga") {
		correct = correct + 1;
	}
	if(q5 == "Freeze") {
		correct = correct + 1;
	}

	document.getElementById("hide").style.visibility = "visible";
	document.getElementById("result").innerHTML = "You got " + correct + " correct!";
});




