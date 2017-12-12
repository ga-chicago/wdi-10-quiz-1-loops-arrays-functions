console.log("works");

// 1,
for(i=0; i <= 10; i++){
    console.log(i + " * 9 = " + (i * 9));
    for(x=0; x <= 10; x++ ){
        console.log(i + " * " +  x  + " = " + (i * x));
    }
}
// 2.
function assignGrade (num){
    if(num >= 90){
        let grade1 = num;
        console.log("You got an A")
    }
    else if(num > 75  && num <= 89){
        let grade2 = num;
        console.log("You got a B")
    }
    else if(num >= 69 && num <= 75) {
        let grade3 = num;
        console.log("You got a C")
    }
    else if(num > 55 && num <= 69){
        let grade4 = num;
        console.log("You got a D")
    }
    else if (num >= 1 && num <= 55){
        let grade5 = num;
        console.log("You got a F")
    }
}
console.log(assignGrade(55));

// 3.
for(i=60; i <= 100; i++){
    console.log(assignGrade(i));
}

//4.
function tellFortune (kid, pname, location, jobTitle){

}
tellFortune();