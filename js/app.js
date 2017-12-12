// 1. Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will 
// multiply the number by 9 and print ("=console.log()") the result (e.g. "2 * 9 = 18"). Then use a nested 
// for loop to show the tables for every multiplier from 1 to 10 (100 results total). I don't care if the output 
// 	lines up exactly right, but if you want it to, you could maybe try using \t. (but maybe move on and come back 
// 		to that :) )


// for(let i = 0; i <= 10; i++){
// 	// console.log(i * 9);
// 	for (let x = 0; x < i; x++) {
// 		console.log(i * x)
// 	};
// }

// 2.
// function assignGrade(score){
// 	if (score >= 90) {
// 		return "A"
// 	} else if (score >= 80){
// 		return "B"
// 	} else if (score >= 70){
// 		return "C"
// 	} else if (score >= 60){
// 		return "D"
// 	} else return "F"
// }

// let grade1 = assignGrade(99);
	// grade1 is now "A"
// let grade2 = assignGrade(75);
	// grade2 is now "C"
// let grade3 = assignGrade(89);
	// grade2 is now "B"

// 3.
// for (var i = 60; i <= 100; i++) {
// 	console.log("For " + i + ", you get a " + assignGrade(i));
// };

// .4
// function tellFortune(children, spouse, location, job){
// 	console.log("You will be a " + job + " in " +  location + ", and married to " + spouse + " with " + children +" kids.");
// }

// tellFortune(5,"elvia","Chicago","programmer");
// tellFortune(10,"emma","California","doctor");
// tellFortune(2,"jasmine","Florida","lawyer");

// 5.
// function lowHighArray(arr){
// 	let arr2 = arr.sort(function(a, b){return a-b});
// 	console.log(arr2[1]);
// 	console.log(arr2[arr2.length - 2]);
// }

// lowHighArray([1,2,3,4,5]);

// 6.
// function numOfChars(str,character){
// 	let bucket = 0;

// 	if (str.includes(character)) {
//         bucket += 1;
// 	}
// 	return bucket;
// }
 
// console.log(numOfChars("sergio", "o"))

// 7.
// function longCountry(arr){
// 	let longest = "";

// 	for (var i = 0; i < arr.length; i++) {
// 		if (longest.length < arr[i].length){
// 			longest = arr[i];
// 		}
// 		arr[i]
// 	};
// 	return longest;
// }

// console.log(longCountry(["gerthhhre", "rger", "ewfer", "sager"]))

// 8.
// function reverseNumber(num){
// 	let num2 = num.toString().split("");
// 	let output = "";

// 	for(let i = num2.length - 1 ; i >= 0 ; i--){
// 		output += num2[i];
// 		// console.log(num2[i]);
// 	}
// 	console.log(output);
// 	return output;
// }






























