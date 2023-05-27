console.log("Linked");
var student1 =prompt("Enter Student Name");//declaration and assign
var age = prompt("Age of Student"); //assign
var gender = prompt("Gender of Student");
var gpa = prompt("Grade Point Average");
var num1 = 10;
var num2 = 5;

var student2 = "Marquice"; //declaration and assign
var age2 = 26; //assign
var gender2 = "Male";
var gpa2 = 3.9;

document.write(`
<div class="error">
    <p>Name: ${student1} </p>
    <p>Age: ${age} </p>
    <p>Gender: ${gender} </p>
    <p>GPA: ${gpa} </p>
</div>
`);

document.write(`
<div class="error">
    <p>Name: ${student2} </p>
    <p>Age: ${age2} </p>
    <p>Gender: ${gender2} </p>
    <p>GPA: ${gpa2} </p>
</div>
`);

var jobTitle=prompt("Enter job title:");
var geoLocation = "Italy";
var partnerName = "Robert"; 
var numberChildren = 1;

document.write(`
<p> You will be a ${jobTitle} in ${geoLocation} , and married to ${partnerName} with ${numberChildren} kids.
</p>
`);

function sayHello(){
    console.log("Hello");
}