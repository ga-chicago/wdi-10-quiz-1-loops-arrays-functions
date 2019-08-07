/*
for (a = 0; a <= 10; a++) {
    let mul = a * 9;
   for (b = 1; b <= 10; b++) {
       let times = a * b;
       console.log(times);
   } 
}

<!-- My understanding of this question is that it wants me to create a function that will assign a letter grade based on the number imputed as the argument. -->


let grade = function (num) {
    if (num >= 90) {
        return "A";
    } else if (num >= 80) {
        return "B"

    } else if (num >= 70) {
        return "C"

    } else if (num >= 60) {
        return "D"

    } else return "F"
};

for (i =60; i <=100; i++) {
    console.log("You get a " + grade(i))
};

<!-- My understanding of this question is that it wants me to test the function with different arguments in the console. -->

let tellFortune = function (N, Z, Y, X) {
    console.log("You will be a "+ X + " in " + Y +", and married to "+ Z +" with "+ N + " kids.")
    
}


let content = [1,2,3,4,5];

let blah = function() {
    let ptOne = Math.max.apply( Math, content ) - 1;
    let ptTwo = Math.min.apply( Math, content ) + 1;
    console.log (ptTwo + " , " + ptOne)
}

*/
let local = [];

let longest = function (a,b,c,d,e) {
    
    local.push(a,b,c,d,e);
    let ptOne = Math.max.apply( Math, local.length );
// return ptOne;
    
    
    
}