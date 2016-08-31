// declare function
//declare var to be incremented
//begin for loop that increments up through 100
//if statement for if number is divisible by 3 and 5
//if else statemtent for if number is divisible by 3 but not 5
//if else statment for if number is divisible by 5 but not 3
//else just print number

function fizzBuzz() {
	var num = 0;
	for (num; num <= 100; num++) {
		if (num % 3 == 0 && num % 5 == 0) {
			createButton("FizzBuzz", "theFizzBuzz col-xs-3 col-sm-3 col-md-3 col-lg-3");
		}
		else if (num % 3 == 0 && num % 5 != 0) {
			createButton("Fizz", "theFizz col-xs-3 col-sm-3 col-md-3 col-lg-3");
		}
		else if (num % 5 == 0 && num % 3 != 0) {
			createButton("Buzz", "theBuzz col-xs-3 col-sm-3 col-md-3 col-lg-3");
		}
		else {
			createButton(num, "theNum col-xs-3 col-sm-3 col-md-3 col-lg-3");
		}
	}
	function createButton(message, styling){
		var makeElement = document.createElement('div');
		var grabID = document.getElementById('fillDiv');
		var makeChild = grabID.appendChild(makeElement);
		makeElement.innerHTML = message; 
		makeElement.className = styling; 
	}
}

fizzBuzz();