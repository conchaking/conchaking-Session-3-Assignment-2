
let yourName = "Adam";
const uName3 = "Marquize";

//if(confirm("Are you "+ yourName + "?")){
//console.log("Hello " + yourName);
//}else{
//    console.log("Then what is your name?");
//}

console.log("1" == 1); // true
console.log("1" === 1); //false

let number = 99;
if(number == 99){
	console.log("The number is correct");
}else{
    console.log("The number is incorrect");
}

//let num1 = 1;
//let num2 = 2;

//if(num1 < num2){
//	console.log("num1 is smaller than num2");
//}else if(num1>num2){
//    console.log("num1 is greater than num2");
//}else{
//    console.log("num1 is equal to num2:");
//}

////let num1 = 1;
////let num2 = 2;
////let num3 = 3;
////let notTrue = false;

////if(num1<num2 && num3>num2){
////	console.log("num1 is smaller than num2 AND num3 is larger than num2");
////}

////if(num1 == 1 || num2 == 1 || num3 == 1){
//	console.log("num1 is 1 OR num2 is 1 OR num3 is 1");
////}

////if(!notTrue){
//	console.log("not not true is true!");
////}
function login(){
//simulating Database
//let uNameDB = "adamyoung@sandiego.edu";
//let uPassDB = "1234";

////////////////////////////////////////

//getting the two values
let uName = document.getElementById("txtUser").value; 
let uPass = document.getElementById("txtPass").value;
console.log(uName,uPass);

//comparison of the entering values and data base values

if(uName === uNameDB && uPass === uPassDB){
    document.write("Welcome to the system");
}else{
    document.write("Invalid credentials");
    }
}

let myArray = [1, 2, 3];
let theSameArray = new Array(1, 2, 3);
console.log(myArray[1]);// prints out 2
let myArray2 = ["string", 10, false];

myArray2[1]=100;

console.table(myArray2);

let myArray3 = ["What is the meaning of life", 42, true];

const numbers=[10,20,30,40,50];
console.table(numbers);

const months=["Jan","Feb","Mar","Apr", "May"];
console.table(months);

//access to the values in the array
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);

// Array dimension
console.log(numbers.length); 

numbers.push(60,70,80);
numbers.unshift(-10,-20,-30);

console.table(numbers);

months.pop(); // deleting the last element
months.shift(); // deleting the first element

months.splice(2,1); //deleting specific element
console.table(months);

let i;
for(i=0;i<=500;i++){
	console.log(i);
}

//adding a new element in my array
let myArray4 = ["Brandon", "Adam", "Marquice"];//creating the array

function register(){
    let newStudent = document.getElementById("txtNewStudent").value; //getting the new student name
    myArray4.push(newStudent); // pushing the new student
    displayStudents();
}

function displayStudents(){
    for(let i=0; i < myArray4.length; i++){
        document.write("Student name:" + myArrary4[i]); //displaying students
        document.getElementById("students")

    }
}