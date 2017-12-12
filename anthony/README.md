## wdi-10-chi

# Quiz 12/12/2017: Arrays, Loops, Functions


---

1\.  Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and print ("=console.log()") the result (e.g. "2 * 9 = 18"). Then use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). I don't care if the output lines up exactly right, but if you want it to, you could maybe try using `\t`.  (but maybe move on and come back to that :) )

2\.  Write a function named assignGrade that:
takes 1 argument, a number score (examle: 89 is B).
and gives a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works. For each call, you should be able to use it to assign the grade to a variable like so:
	
```javascript
	let grade1 = assignGrade(99)
	// grade1 is now "A"
	let grade2 = assignGrade(75)
	// grade2 is now "C"
	let grade3 = assignGrade(89)
	// grade2 is now "B"
```

#### Given the above example, does your function need to console.log() or return a value? 

3\. Print the results of assignGrade function from the previous exercise for every value from 60 to 100 - so your log should show: 

	.....`For 89, you get a B.`
	`For 90, you get an A."..... and so forth  `

(Don't overthink this one).

4\. Write a function named `tellFortune` that:
 * Takes 4 arguments: number of children, partner's name, geographic location, job title.
 * Outputs (meaning "prints" meaning "uses console.log() to print" meaning **not the same as returns**) your fortune to the screen like so: "You will be a X in Y, and married to Z with N kids."
Call that function 3 times with 3 different values for the arguments.  

5\. Write a JavaScript function which will take an array of numbers stored and **console.log but not return** the second lowest and second greatest numbers, respectively. 
Sample array: [1,2,3,4,5]
Expected Output: 2, 4 

6\. Write a JavaScript function (call it whatever you want but not func() or myFunc() or even countFunc() because those are vague names) that accepts two arguments, a string and a letter.  The function will count the number of occurrences of the specified letter within the string **and both console.log() and return the value**. 
		
	Sample arguments: 'Listen to the river sing sweet songs, 'o'
	Expected output : 2

7\.  Write a JavaScript function that accepts a list of country names as input and **returns but does not console.log** the longest country name as output. 

 * Sample function usage: `longestCountryName(["Australia", "Germany", "United States of America"]);`

 * Expected output: `"United States of America"`

8\.  Write a JavaScript function that takes a number as a parameter and reverses it.  You should be able to see the reversed number in the console **AND** assign the ouput of your function to a variable. 

 * Example: parameter is `32243`
 * Expected Output: `34223` 


