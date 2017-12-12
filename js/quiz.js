console.log('Time And Relative Dimension In Space');

// // Question 1
// iterate through the loop, start at one and stop at 10
for (i = 0; i <= 10; i++) {
	// print the result of each iteration * 9
	console.log(i * 9);
};

// iterate through the loop 10 times
for (i = 0; i <= 10; i++) {
	// create a second loop that will run 10 time
	for(j = 0; j <= 10; j++) {
		// multiply the product of each loop and print the results to the console
		console.log(i * j);	
	}

};

// Question 2
function assignGrade(score) {
	if (score >= 90) {
		return "A";
	} else if (score >= 80) {
		return "B";
	} else if (score >= 70) {
		return "C";
	} else if (score >= 60) {
		return "D";
	} else if (score <=59) {
		return "F";
	}
	// default in case someone enters a letter and not a number
	return "Please enter number score"
}
// Because we're using return we're already getting the output we want and don't need to console.log anything.

// Question 3
function assignGrade(score) {
	if (score >= 90) {
		console.log("For " + score + " you get an A.");
	} else if (score >= 80) {
		console.log("For " + score + " you get a B.");
	} else if (score >= 70) {
		console.log("For " + score + " you get a C.");
	} else if (score >= 60) {
		console.log("For " + score + " you get a D.");
	} else if (score <=59) {
		console.log("For " + score + " you get an F.");
	}
	
}

// Question 4
function tellFortune(numChild, partName, city, job) {
	console.log("You will be a " + job + " in " + city + ", and married to " + partName + " with " + numChild + " kids.")
}

tellFortune(2, "Jon", "Chicago", "Web Developer")
tellFortune(3, "Michael", "Louisville", "Web Designer")
tellFortune(1, "David", "Pilsen", "Medieval History Research Assistant")
tellFortune(0, "Kyle", "Schaumburg", "Novelist")

// Question 5
function secondLowAndHigh(numArray) {
	// use a for loop to iterate throug the array
	for (i = 0; i < numArray.length; i++)
	// identify the second highest number
	// identify the second lowest number
	// print the second highest and second lowest to the console
	console.log();
}

// // Question 6

function letterInString(sentence, character) {
	// check to see if the character is included in the sentence
	sentence.includes(character)
	// if the character is inluded, count how many times
	// print and return the number of times the character occurs
	console.log();
	return
}

// Question 7
let countries = [];
function longestCountryName(countriesArray) {
	// use for loop to iterate through the array
	for(i = 0; i < countriesArray.length; i++) {
		// count the length of each of the country names
		// compare the lengths
		// return the longest country name, not the length
	}
}

// Question 8
function reverseNumber(number) {
	// use .reverse to reverse the number
	number.toString().split().reverse().join()
	// print the numer to the console
	// able to add to variable???
}
