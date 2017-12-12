console.log('Time And Relative Dimension In Space');

// Question 1
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