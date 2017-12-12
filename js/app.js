// 1. 
// Need to output the 
for (i = 1; i <= 10; i++) {
	console.log(i*9);
	for (i = 1; i <= 10; i++) {
		console.log(i*1)
		console.log(i*2)
		console.log(i*3)
		console.log(i*4)
		console.log(i*5)
		console.log(i*6)
		console.log(i*7)
		console.log(i*8)
		console.log(i*9)
		console.log(i*10)
	}
}

// 2. 

let grader = function(percent) {
	
	if (percent > 100) {
		console.log("invalid percent given.");
		return false;
	} else if (percent >= 90) {
		console.log("A");
		return "A";
	} else if (percent >= 80) {
		console.log("B");
		return "B";
	} else if (percent >= 70) {
		console.log("C");
		return "C";
	} else if (percent >= 60) {
		console.log("D");
		return "D";
	} else if (percent >= 0) {
		console.log("F");
		return "F";
	} else if (typeof percent !== "number") {
		console.log("invalid: not a number");
		return false;
	}
}

// 3. 

for (i = 60; i <= 100; i++) {
	grader(i);
}

// 4. 

let tellFortune = function(numOfChildren, partnersName, jobTitle, location) {
	console.log("You will be a " + jobTitle + " in " + location + ", and married to " + partnersName + " with " + numOfChildren+ " kids.")
}

tellFortune(3, "Carrie", "Janitor", "Chicago");
tellFortune(4, "Mary", "Football coach", "Alaska");
tellFortune(0, "nobody, sadly", "Prisoner", "Florida");

// 5.

let secondHighLow = function(arr) {
	arr.sort(function(a, b){return a - b});
	console.log(arr[1]);
	console.log(arr[arr.length-2]);
}

// 6.

let searchForLetter = function(str,ltr) {
	let starter = str
	starter.split("")
}
//need to allow str to be what the split cuts at 
//then need to find the new number of strings and output the increase of 

// 7.

// need to first output each length of the items in the array 
//then need to write a for loop that cycles through all items in the array and compares the length and passes on the index of the largest
//then need to use that given index to consol.log(arr[i]) to print the largest 

// 8.

//need to use reverse() to assign a new variable (let rev= str.reverse) and console.log(rev)