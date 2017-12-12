// #1 
//

// #2
//ask reuben about the variable thing and then finish
function assignGrade(num){
  if(num >= 90){
    console.log("Your grade is an A");
  } else if(num >= 80 && num <=89){
      console.log("You earned a B");
  } else if(num >= 70 && num <= 79){
      console.log("You earned a C");
  } else if(num >= 60 && num <= 69){
      console.log("You earned a D");
  } else{ 
      console.log("You recived an F");
  }
}



//#3





//#4
function tellFortune(numChild, spouseName, location, job){
  console.log("You will be a " + job + " in " + location + " and married to " + spouseName + " with " + numChild + " kids")
}


//#5
// I will declare a function with the parameter arr
// I will run a for loop to iterate through our array
// I will put an if conditional that searches for the second smallest. in the same conditional ill use logical operator && to search for the second largest number
//I will then console log those numbers


//#6


//#7
//create a function called longestCountry with parameter arr 
//we run a for loop to iterate through the array
//with an if conditional we look for the element in the array that has the longest length
//we console.log the element with the longest name


//#8
function reverseNum(num){
  // first thing we do here is put a space between the numbers so we can use split
  num = num + "";
  //next we put the numbers into an array, then reverse the array and then turn it back into a number
  return num.split("").reverse().join("")
}



