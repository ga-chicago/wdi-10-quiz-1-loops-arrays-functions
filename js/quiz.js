console.log('Time And Relative Dimension In Space');

// // Question 1
// // iterate through the loop, start at one and stop at 10
// for (i = 0; i <= 10; i++) {
// 	// print the result of each iteration * 9
// 	console.log(i * 9);
// };

// // iterate through the loop 10 times
// for (i = 0; i <= 10; i++) {
// 	// create a second loop that will run 10 time
// 	for(j = 0; j <= 10; j++) {
// 		// multiply the product of each loop and print the results to the console
// 		console.log(i * j);	
// 	}

// };

// Question 2
// function assignGrade(score) {
// 	if (score >= 90) {
// 		return "A";
// 	} else if (score >= 80) {
// 		return "B";
// 	} else if (score >= 70) {
// 		return "C";
// 	} else if (score >= 60) {
// 		return "D";
// 	} else if (score <=59) {
// 		return "F";
// 	}
// 	// default in case someone enters a letter and not a number
// 	return "Please enter number score"
// }
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


















