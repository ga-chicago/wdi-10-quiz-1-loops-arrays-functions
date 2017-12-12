/*
1\.  Write a for loop that will iterate from 0 to 10. For each iteration of the for loop, it will multiply the number by 9 and print ("=console.log()") the result (e.g. "2 * 9 = 18"). Then use a nested for loop to show the tables for every multiplier from 1 to 10 (100 results total). I don't care if the output lines up exactly right, but if you want it to, you could maybe try using `\t`.  (but maybe move on and come back to that :) )
*/

for(let i = 1; i<10; i++){
  console.log(i*9);
}

for(let i = 1; i<10; i++){
  var product = 1;
  for(let j = 0;j<10; j++)
  {
   product = (i * j);
  console.log(i+ " times "+ j +" equals " + product + ".");
  }
}
/*
2\.  Write a function named assignGrade that:
takes 1 argument, a number score (examle: 89 is B).
and gives a grade for the score, either "A", "B", "C", "D", or "F".
Call that function for a few different scores and log the result to make sure it works. For each call, you should be able to use it to assign the grade to a variable like so:

```javascript
	let grade1 = assignGrade(99)
	// grade is now "A"
	let grade2 = assignGrade(75)
	// grade is now "C"
	let grade3 = assignGrade(89)
	// grade is now "B"
```

#### Given the above example, does your function need to console.log() or return a value?
*/
// function needs to console.log to display what is the example output but can also return value
function assignGrade(num)
{
  var grade = "X";


  if (num>90){
    grade = "A"
    console.log("grade is " + grade);
    return grade;
  }  else if(num>80){
    grade = "B";
    console.log("grade is " + grade);
    return grade;
  } else if(num>70){
    grade = "C";
    console.log("grade is " + grade);
    return grade;
  } else if(num>60){
    grade = "D";
    console.log("grade is " + grade);
    return grade;
  } else {
    grade = "F";
    console.log("grade is " + grade);
    return grade;
  }
}



// I don't know how to console log the variable for the individual grades and the value for the letter grades on one line in one single function. I can do it with two functions.
//I will assume the question mean not to dispay the variable for the individual grades. (grade1, grade2, grade3) but a string for variable "grade", which is what Julian said was so.

// It doesn't need to return a value, but if you want to use the variables later:


let grade1 = assignGrade(99);
let grade2 = assignGrade(75);
let grade3 = assignGrade(89);
