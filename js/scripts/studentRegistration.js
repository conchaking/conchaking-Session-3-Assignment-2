function addStudent(){
    var product = prompt("Please Enter Product");
    var quanity = Number (prompt("Please Enter Quanity of Purchase"));
    var price = 100;
    var tax = .08;
    

    
    var total = (quanity*price);
    var taxTotal = (total*tax);
    var subTotal = (total+taxTotal)
    console.log (product, quanity, taxTotal, subTotal);
    //get from the prompt student name
    //get from the prompt 101 grade
    //get from the prompt 102 grade
    document.getElementById("students").innerHTML+=`<li>${product}</li> 
    <li> quanity ${quanity}</li> 
    <li> price ${price}</li> 
    <li> Tax ${taxTotal}</li> 
    <li> SubTotal ${subTotal}</li>  
    <li> Total ${total}</li>`;
    //display on the console the values
}