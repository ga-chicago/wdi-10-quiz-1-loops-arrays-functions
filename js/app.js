function multLoop() {
	for (let i = 0; i <= 100; i++) {
		// let temp = i * 9;
		// console.log(i + " * 9 = " + temp + ".");
	}
}

function assignGrade(score) {
	let grade = '';
	if (score > 89) {
		grade = 'A';
	}
	else if (score < 90 && score > 79) {
		grade = 'B';
	}
	else if (score < 80 && score > 69) {
		grade = 'C';
	}
	else if (score < 70 && score > 59) {
		grade = 'D';
	}
	else if (score < 60 && score > 49) {
		grade = 'F';
	}
	return grade;
}

function printGrade() {
	for (i = 60; i <= 100; i++) {
		console.log("For "+ i + ", you get an " + assignGrade(i));
	}
}

function tellFortune(children, spouse, location, job) {
	console.log("You will be a "+job+" living in "+location+", married to "+spouse+" with "+children+" kids.");
}

// tellFortune(2, 'Patrick', 'New York', 'Janitor');
// tellFortune(4, 'Mary', 'South Africa', 'Lawyer');
// tellFortune(0, 'nobody', 'nowhere', 'nothing');


function compareNumbers(a, b) {
  return a - b;
}

function arrayReturn(arr) {
	let sorted = arr.sort(compareNumbers());
	console.log(sorted[1]);
	console.log(sorted[sorted.length - 1]);
}

function characterOccurence(str, char) {
	let arr = str.toLowerCase().split('');
	let timesOcc = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i].includes(char)) {
			timesOcc++;
		}
	}
	console.log(char+" occurs "+timesOcc+" times in "+ str+".");
}

let countryNames = ['america', 'canada', 'australia', 'pakistan'];

function longestCountryName(arr) {
	let longest = '';
	let tempLength = 0;
	for (let i = 0; i <= arr.length - 1; i++) {
		if (arr[i].length > tempLength) {
			tempLength = arr[i].length;
			longest = arr[i];
		}
	}
	return longest;
}

// console.log(longestCountryName(countryNames));

function reverseNumber(num) {
	let arr = num.toString().trim().split('');
	let strTemp = '';
	for (let i = arr.length - 1; i >= 0; i--) {
		strTemp += arr[i];
	}
	let solution = parseInt(strTemp, 10);
	console.log("The number reversed is "+solution+".");
	return solution;
}













