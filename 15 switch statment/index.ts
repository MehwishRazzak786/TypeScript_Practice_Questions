//# Make a typescript file and convert this code into switch statment. 


/*let num = 75;

if (num > 90) {
    console.log("Grade: A");
} else if (num > 80) {
    console.log("Grade: B");
} else if (num > 70) {
    console.log("Grade: C");
} else if (num > 60) {
    console.log("Grade: D");
} else if (num > 50) {
    console.log("Grade: E");
} else {
    console.log("Grade: F");
}*/
let num = 85;
let Grade: string;
switch(true){
    case (num > 90):
        Grade = "A";
        break;
    case (num > 80):
        Grade = "B";
        break;
    case (num > 70):
        Grade = "C";
        break;
    case (num > 60):
        Grade = "D";
        break;
    case (num > 50):
        Grade = "E";
        default:
        Grade = "F";
        break;                
}
console.log(`Grade: "${Grade}"`); // Grade: "C"

