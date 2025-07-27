// let x = "Sahil";
// alert(`Hello ${x}`);

// document.writeln("Hello World!<br>");
// document.writeln("Welcome to JavaScript!");

/*let age = 13;
if (age >= 14) {
    console.log("you can vote = " + age)
} else {
    console.log("you cannot vote = " + age)
}

let age = 17;
let hasVoterCard = "yes";

if (age >= 18 && hasVoterCard === "yes") {
    alert("You Can Vote!");
    alert("You are eligible to vote");
    alert("Hey Brother");
} else if (age >= 18 && hasVoterCard === "no") {
    alert("get Your voter id card");
} else {
    alert("You CanNot Vote!");
}*/


/*let age = 17;
let hasVoterCard = "yes";

if (age >= 18) {

    if (hasVoterCard === "yes") {

        alert("you can vote");

    } else {

        alert("get your voter id card");

    }

} else {

    alert("you cannot vote");

}*/



/*
let isLoggeIn = 0;  // if 0 loggedout if 1 loggedin

if (isLoggeIn == 1) {
    document.writeln("Log In");

} else {
    document.writeln("Log Out");

}
*/



/*
let isLoggedin = 0;

let option = isLoggedin == 0 ? "LogOut" : "Log In";
// condition                    true         false
document.writeln(option);
*/


/*
let user;

// user = "Sehjad";

alert(user ?? "Guest User" );
// alert(user);
*/


// if input = 1, "y", "yes" output = coninue....
// if input = 0, "n", "no" output = end....


/*
let input;

input = "n";

if (input === 1) {
    document.writeln("Continue...");

} else if (input === "y") {
    document.writeln("Continue...");

} else if (input === "yes") {
    document.writeln("Continue...");

} else if (input === 0) {
    document.writeln("End...");

} else if (input === "n") {
    document.writeln("End...");

} else if (input === "no") {
    document.writeln("End...");

} else {
    document.writeln("wrong input, please try again...");
}
*/




/*
// comparision using switch statement
let input;
input = 10; // you can change this value to test different cases 

switch (input) {
    case 1:
        document.writeln("continue...");
        break;
    
    case "y":
        document.writeln("continue...");
        break;
    
    case "yes":
        document.writeln("continue...");
        break;
    
    case 0:
        document.writeln("end...");
        break;
    
    case "n":
        document.writeln("end...");
        break;
    
    case "no":
        document.writeln("end...");
        break;
    
    default:
        document.writeln("wrong input, please try again...");
        break;
}
*/




// Loop in javaScript
/*
let counter = 0;
while (counter <= 10) {
    document.writeln("While loop is successful <br>");
    counter++;
}
*/

/*
let counter = 0;
let sum = 0;

while (counter <= 100) {
    if (counter % 2 === 0) {
        sum = sum + counter;
    }
    counter++;
}
document.writeln(sum);
*/


/*
let counter = 11;
do {
    document.writeln("Do While loop is successful <br>");
    counter++;
}
while (counter <= 10);
*/


/*
for (let counter = 0; counter <= 10; counter++)  {
    document.writeln("For loop is successful <br>");
}
*/


/*
for (let counter = 0; counter <= 10; counter++) {
    if (counter === 5) {
        continue;
    }
    document.writeln(counter + "<br>");
}


let counter = 1;
while (counter <= 10) {
    if (counter == 5) {
        counter++;
        continue;
    }
    document.writeln(counter + "<br>");
    counter++;
}
    */





/*
for (let counter = 1; counter <= 10; counter++) {
    if (counter === 5) {
        counter++;
        break;
    }
    document.writeln(counter + "<br>");
}
*/


/*  this is succesful program.......
for (let counter = 1; counter <= 10; counter++) {
    if (counter === 5) {
        break;
    }
    document.writeln(counter + "<br>");
}
*/





/*
nested loop
*/




//  this is newww topic ? (alert, prompt, confirm)
/*
alert()
prompt()
confirm()
*/
/*
let msg = alert("Welcome !");
console.log(msg);
*/


/*
let name = prompt("Enter your name : " ,  "mahesh");
if (name != null) {
    document.writeln("your name is : " + name);
    
} else {
    document.writeln("You did not enter your name.");
}
*/




/*
let response = confirm("Are you sure you want to delete this file ?"); 
if (response) {
    document.writeln("File deleted successfully.");
} else {
    document.writeln("File deletion cancelled.");
}
*/


/*
let type = true * true;
console.log(type);
console.log(typeof type);
*/



// this is new topic maipulation
/*
type conversion 
let type = "10";
console.log(type);
console.log(typeof (type));
let sType = Number(type);
console.log(typeof (sType));
*/

// console.log("hey \t javascript")



/*
let name = "hussain \nis a machanic......";
console.log(name);
console.log(typeof (name));
let newNumber = Number(name);
console.log(typeof (newNumber));

console.log(name.length);
console.log(name.length);

let age = 19;
console.log(`your age is ${age}`);
*/

/*
let str = "Hello";
let str2 = "World";
let str3 = "learn javascript";
let str4 = "popular language";
let result = str.concat(" ",str2," ",str3,""," ",str4);
console.log(result);
*/
// console.log(str + str2);



/*
let str = "Hello World ";
let str2 = "this is javascript ";
let str3 = "is a popular language ";
let result = str + str2+str3;
console.log(result);    
*/



// let str = "this is javascript tutorial. It is a popular language.";

// let  result = str.substr(8, 19);

// console.log(result);


// let result = str.substring(8, 27);
// console.log(result);

/*
let para = "This is a paragraph. It contains multiple sentences. JavaScript is a versatile language.";

let result = para.indexOf("is", 10); // Start searching from index 10
console.log(result);
-*/


/*
let para = "This is a paragraph. It contains multiple sentences. JavaScript is a versatile language.";

let result = para.lastIndexOf("is"); // Find the last occurrence of "is"
console.log(result);
*/


/*
let age = [10,20,30,40,50,60,70];
console.log(age);
age.push(80);
console.log(age);
age.pop();
console.log(age);
age.unshift(5);
console.log(age);
age.shift();
console.log(age);   
age.splice(2, 3); // Remove 1 element at index 2 and add 25
console.log(age);
age.splice(2, 0, 25); // Insert 25 at index 2 without removing any elements
console.log(age);
age.splice(2, 1, 25); // Replace the element at index 2 with 25
console.log(age);
*/


let age = [
    [10, 20, 30, 40, 50, 60, 70],
    [11, 21, 31, 41, 51, 61, 71],
    [12, 22, 32, 42, 52, 62, 72],
    [13, 23, 33, 43, 53, 63, 73]
]

// console.log(age[0][1]);
// console.log(age[1]);

let fName = ["Sahil", "Hussain", "Ayan"];
let lName = ["Khan", "pathan", "shaikh"];
let agee = [10, 20, 30];

let result = fName.concat(lName, agee); // This will concatenate the three arrays into one
console.log(result);

// let fullName = fName + lName; // This will not work as expected, it will just concatenate the two arrays as strings
// console.log(fullName);
let fulLen = fName.length();
console.log(fulLen); // This will give the length of the fName array



























































