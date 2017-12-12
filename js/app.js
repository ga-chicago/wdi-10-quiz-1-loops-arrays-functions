/*
for (a = 0; a <= 10; a++) {
    let mul = a * 9;
   for (b = 1; b <= 10; b++) {
       let times = a * b;
       console.log(times);
   } 
}

<!-- My understanding of this question is that it wants me to create a function that will assign a letter grade based on the number imputed as the argument. -->
*/

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
