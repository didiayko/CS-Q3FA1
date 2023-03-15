alert("Hi! Please tkae the time to fill out this form. \nIt's very important.")
let nickname = prompt("Please enter your nickname");
let Height = prompt("Please enter your height in inches");
let Weight = prompt("Please enter your weight in kilograms");
let fname = prompt("First name?");
let sname = prompt("Last name?");
let year = prompt("And your birth year?");

alert("Perfect! Thank you again!")
var consent = confirm("Do you consent to sharing your personal information?")

if(consent==true){
	alert("Thank you for your trust :)")
	}else{
	alert("Perfectly fine!")
    ;
    }


let cage = yeartoage(year);
let cheight = inchestofeet(Height);
let cweight = kgtolbs(Weight);


document.getElementById("fullname").innerHTML = fname + " " + sname;
document.getElementById("nickname").innerHTML = nickname;
document.getElementById("birthyear").innerHTML = year;
document.getElementById("age").innerHTML = cage;
document.getElementById("height").innerHTML = cheight + " feet";
document.getElementById("weight").innerHTML = cweight + " pounds";
document.getElementById("hidden").style.display = 'none';
;

function yeartoage(year){
    return 2023 - year;
}
function inchestofeet(Height){
    return Height/12;
}
function kgtolbs(Weight){
    return Weight*2.205;
}