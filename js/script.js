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
// -----------------------------------comparision using switch statement------------------------------------------
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




// ----------------------------------------Loop in javaScript-------------------------------------------------
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






// -------------------------------------------------IndexOf--------------------------------------------
/*
let para = "This is a paragraph. It contains multiple sentences. JavaScript is a versatile language.";

let result = para.indexOf("is", 10); // Start searching from index 10
console.log(result);
-*/








// --------------------------------------------LastIndexOf-----------------------------------------
/*
let para = "This is a paragraph. It contains multiple sentences. JavaScript is a versatile language.";

let result = para.lastIndexOf("is"); // Find the last occurrence of "is"
console.log(result);
*/











// -----------------------------------------Push and Pop----------------------------------------------
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







// ------------------------------------------------Array------------------------------------------------
/*
let age = [
    [10, 20, 30, 40, 50, 60, 70],
    [11, 21, 31, 41, 51, 61, 71],
    [12, 22, 32, 42, 52, 62, 72],
    [13, 23, 33, 43, 53, 63, 73]
]
*/

// console.log(age[0][1]);
// console.log(age[1]);
/*
let fName = ["Sahil", "Hussain", "Ayan"];
let lName = ["Khan", "pathan", "shaikh"];
let agee = [10, 20, 30];
*/
// let result = fName.concat(lName, agee); // This will concatenate the three arrays into one
// console.log(result);

// let fullName = fName + lName; // This will not work as expected, it will just concatenate the two arrays as strings
// console.log(fullName);
// let fulLen = fName.length();
// console.log(fulLen); // This will give the length of the fName array

/*
let a = ["a", "b", "c"];
let b = ["d", "e", "f"];
let result = b.concat(a);
document.writeln(result);*/ // This will concatenate the two arrays into one


// let book = ["math", "english", "science", "urdu"];

// book.length;
// console.log(book.length); // This will give the length of the book array

/*
let book2 = [
    ["math", "english", "science", "urdu"],
    ["history", "geography", "economics", "political science"],
    ["physics", "chemistry", "biology", "computer science"]
];
*/

// book2[0][1] = "english literature"; // This will change the value of the second element in the first array
// console.log(book2[0][1]); // This will print "english literature"

// let nn = book2[2][2];
// console.log(nn); // This will print "biology"
// let bookRes = book2[2][2]="ammi jaan"
// console.log(book2[2][2]); // This will print "ammi jaan"
// console.log(bookRes); // This will print "ammi jaan"




// ----------------------------------------------Loop------------------------------------------------

/*
let book = ["math", "english", "science", "urdu", "history", "geography", "economics", "political science", "physics", "chemistry", "biology", "computer science"];
let bookLen = book.length;
book.forEach(myFun);
for(i=0; i < bookLen; i++) {
    document.writeln(`Book ${i+1} : ${book[i]} <br>`);
}
*/


/*
let  book = ["math", "english", "science", "urdu"];

book.forEach(myFun);
function myFun(name) {
    console.log(name);
}
*/



 /*
let book = ["math", "english", "science", "urdu"];

book.forEach(myFun);
function myFun(value) {
    console.log(value);
}
*/

// ---------------------------------------------Functions--------------------------------------------------

/*
function name() {
    console.log("This is a function");
}

name();
name();
*/



/*
function fun() {
    for(i=1; i<=10; i++) {
        console.log(`2 x ${i} = ${2*i}`);
    }
}
fun();
fun();
fun();
*/



/*
function table(number) { // number is a parameter

    for(i=1; i<=10; i++) {
        console.log(`${number} x ${i} = ${number*i}`);
    }

}

table(5); // 5 is a argment
*/



/*
function multi(first, second, third) {
    console.log(first + second + third);
}

multi(9,2,3)
*/





/*
function add() {
    if(arguments.length === 0){
        console.log("No arguments passed");
    } else{
        let sum = 0;
        for(i=0; i<arguments.length; i++) {
            sum = sum + arguments[i];
        }
        console.log(sum);
    }

}

add(5,4,9,9,5,6,2,4,5)

let addNew = add;
addNew(5,4,9,9,5,6,2,44,5);
*/



/*
function age(a,b) {
    let c = a + b;
    return c;
}

let d = age(5,5);
console.log(d);
*/






// -----------------------------------------------Return-------------------------------------------------
/*
function age(age, vote) {
    if(age > vote) {
        return "You are eligible to vote";

    } else if(age < vote) {
        return "You are not eligible to vote";  

    } else {
        return "same age";
    }
}
let result = age(12,12);

console.log(result);
*/





// ------------------------------------Global variable vs Local variable--------------------------------------
/*
let age = 18;  // this is Global variable

function result() {
    console.log(age);
}
result()


function name() {
    let counter = 10; // this is Local variable...
    console.log(counter);
}
name()
*/





// -------------------------------------------Anonymous Functions------------------------------------------------
/*
let result = function () {
    console.log("Hello");
}
result();
setTimeout(result,3000);



setTimeout(function () {
    console.log("anonymous functions")
},4000)
*/


// ------------------------------------------Immediately invoked functions--------------------------------------
/*
function () {     // this is a demo........
    console.log("heyyyyyyyyyyyyyyy")
}
*/

/*
(function () {
    console.log("heyyyyyyyyyyyyyyy")
}())
*/

/*
(function () {

    let msg = 123;
    function show() {
        console.log(msg)
    }
    show()
})();
*/




// -----------------------------------------------Object-------------------------------------------------------
/*
let name = {
    firstName : "sahil",
    lastName : "khan",
    age : 22,
    address : "sojat city"
}
name.state = "rajasthan";
let result = name.firstName;
console.log(result);

name.firstName = "hussain";
console.log(name.firstName);
console.log(name);

delete name.firstName;
console.log(name);

console.log("address" in name);


for (let key in name) {
    console.log(key + " " + name[key]);
}
*/








// ----------------------------------------------------Object in method------------------------------------------
/*
let name = {
    firstName : "sahil",
    lastName : "khan",
    age : 22,
    address : "sojat city",
    show : function () {
        console.log("prgm is successfully" + " " + names.car + " " +  names.lastName);
    }
}





let names = {
    car : "tata",
    lastName : "car",
    age : 22,
    address : "sojat city",
    show () {
        console.log("prgm is successfully");
    }
}
name.show();
*/







// ------------------------------------------------------Math mathods----------------------------------------------------
// console.log(Math.PI);
// console.log(Math.E);



/*
let x = Math.round(4.7);
let a = Math.round(4.1);
console.log(x);  // output 5
console.log(a);  // output 4
*/



/*
let s = Math.ceil(4.1);
console.log(s); // output 5
*/


/*
let y = Math.floor(4.10);
console.log(y); // output 4
*/


/*
let r = Math.trunc(5.6);
console.log(r); // output 5
*/


/*
let d = Math.pow(5,2);
console.log(d);  // output 25
*/


/*
let f = Math.sqrt(100,10);
console.log(f); // output 10
*/



/*
let a = Math.sqrt(49);
console.log(a); // output 7
*/

/*
let y = Math.min(7,8,5,4,62,4,7,50);
console.log(y); // output 4
*/


/*
let z = Math.max(7,8,5,4,62,4,7,50);
console.log(z); // output 62
*/



// --------------------------------------------------------Random Number---------------------------------------------
/*
let res = Math.floor(Math.random()*10 + 1);
console.log(res);
*/


/*
let t = Math.floor(Math.random() * 10 - 20);
console.log(t);
*/



/*
function randomNumber (min, max) {
    let x = Math.floor(Math.random() * (max - min + 1)) + min;
    return;
}
randomNumber(10, 1);
*/




// ------------------------------------------------------Date---------------------------------------------
/*
let x = new Date();
console.log(x);
console.log(x.getFullYear());
console.log(x.getMinutes());
console.log(x.getDay());
x.setFullYear(2030);
console.log(x.getFullYear());
console.log(new Date());
*/



/*
let x = new Date("october 13, 2024 11:12:13");
let y = new Date();

if (y > x) {
    console.log("x is past date")

} else if (x > y){
    console.log("x is future date")
} else {
    console.log("x is same date")
}
*/









// --------------------------------------------------New Keywords------------------------------------------------
/*
let person = new Object();
person.name = "ankit";
person.age = 25;
console.log(person.name);
console.log(person.age);
console.log(person);
*/






// --------------------------------------------------Property Getters and Setters------------------------------------------------

// let name = {
//     name : "vahid",
//     age : 22,

/*
    getname : function() {
        return this.name.toUpperCase();
    }
*/

    // get getname() {
    //     return this.name.toUpperCase();
    // }


//     set setname(n) {
//         this.name = n.toUpperCase();
//     }
// }

// name.setname = "ajit";

// console.log(name.name);




// ------------------------------------------------Object Constructor Function---------------------------------------------
/*
function Student (first, last, age, cls) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.cls = cls;
}


let student1 = new Student("Sahil", "Khan", 22, "BCA");
// console.log(student1);

Student.state = "rajasthan";
console.log(Student.state);


student1.name = function() {
    return this.firstName + " " + this.lastName;
}
console.log(student1.name())
*/












// ---------------------------------------------Prototypes------------------------------------------






















// ------------------------------------------------Nested Object------------------------------------------
/*
let user = {
    id : 101,
    email : "abcd@gmail.com",
    persnolInfo : {
        fiirstName : "javed",
        lastName : "khan",
        age : 25,

        address : {
            city : "sojat",
            state : "rajasthan",
            country : "india",

            pincode : {
                code : 306104,
                area : "sojat city"
            }
        }
    }
}

console.log(user.persnolInfo.address.pincode);
*/






// -------------------------------------------------------Hoisting------------------------------------------
/*
hellow()
function hellow(){
    console.log("Hello World");
}
*/









// ---------------------------------------------------Document Object Model[DOM]------------------------------------------

















// ---------------------------------------------------Select an element by "ID"------------------------------------------------
/*
let second = document.getElementById("second");
second.innerHTML = "<p> This is <br> the second <br> list item </p>";
second.style.color = "red";
second.style.mar
console.log(second);
second.style.listStyle = "none";
*/









// ---------------------------------------------------Select an element by "Class Name"------------------------------------------------
/*
let cls = document.getElementsByClassName("list-items");
console.log(cls.length);


for(let i = 0; i <cls.length; i++) {
    cls[i].style.color = "red";
    cls[i].style.fontSize = "30px";
    cls[i].style.fontWeight = "bold";
    */
/*
    cls[i].style.listStyle = "none";
    cls[i].style.backgroundColor = "yellow";
    cls[i].style.padding = "10px";
    cls[i].style.margin = "5px";
    cls[i].style.border = "2px solid black";
    cls[i].style.borderRadius = "5px";
    cls[i].style.textAlign = "center";
    cls[i].style.boxShadow = "2px 2px 5px rgba(0, 0, 0, 0.1)";
    cls[i].style.transition = "all 0.3s ease";
    cls[i].addEventListener("mouseover", function() {
        cls[i].style.backgroundColor = "lightblue";
    }
    );
    cls[i].addEventListener("mouseout", function() {
        cls[i].style.backgroundColor = "yellow";
    }
    );
*/

/*
    cls[i].innerHTML = "hello world";
}
*/










// ---------------------------------------------------Tag Name select------------------------------------------------
/*
let h2 = document.getElementsByTagName("h2");
for(let i = 0; i<h2.length; i++) {
    h2[i].innerHTML = "Hello World";
}
*/

/*
let div1 = document.getElementById("div1");
let h2 = div1.getElementsByTagName("h2");
let para = div1.getElementsByTagName("p");




for(let i = 0; i < h2.length; i++) {
    h2[i].innerHTML = "Hello World";
    h2[i].style.color = "blue";
    h2[i].style.fontSize = "30px";
    h2[i].style.fontWeight = "bold";
}


for(let i = 0; i < para.length; i++) {
    para[i].innerHTML = "this is a paragraph";
}
*/









// ---------------------------------------------------Query Selector [Is A Most Powerfull]------------------------------------------------
/*
let elm = document.querySelectorAll("p.intro");
for (let i = 0; i < elm.length; i++) {
    elm[i].innerHTML = "newwwwwww";
}
*/









// ---------------------------------------------------Traversing Elements------------------------------------------------------------------
/*
let elm = document.getElementById("intro");
let listItems = document.getElementById("list-items");
// let prt = elm.parentElement;
// console.log(prt);
// prt.innerHTML = "This is a parent element";


let fir = listItems.firststElementChild;
let last = listItems.lastElementChild;
console.log(fir);
let all = listItems.children;
console.log(all);


let cccc = elm.nextElementSibling;
console.log(cccc);


let sys = document.getElementById("sys");
let ssssss = sys.nextElementSibling;
console.log(ssssss);
*/














// ---------------------------------------------------innerHTML--------------------------------------------------------------------
// let elm = document.getElementById("intro");
// let res = elm.innerHTML;
// console.log(res);

// elm.innerHTML="<h3>this is a para</h3>";












// ---------------------------------------------------Create And Append Element--------------------------------------------------------------------
/*
let elm = document.getElementById("intro");

let h3 = document.createElement("h3");
console.log(h3);


elm.appendChild(h3);
h3.innerHTML = "This is a new heading";

h3.id = "newHeading";
h3.className = "newClass";




document.body.appendChild(h3);
h3.style.fontSize = "30px";

h3.innerHTML="cccccccccccc";
h3.textContent="aaaaaaaaaaaaaaa";
console.log(h3.textContent);



let list = document.getElementById("list");
let item = document.createElement("li");

list.appendChild(item);
item.innerHTML = "item4";
*/













// ---------------------------------------------------Insert Before Function--------------------------------------------------------------------
/*
let list1 = document.getElementById("list");

let item = document.createElement("li");
item.textContent = "5";

let pos = list1.firstElementChild;


list1.insertBefore(item, pos)
*/




/*
let parent = document.body;

let elm = document.createElement("h2");
elm.textContent="this is new element";

let list = document.getElementById("list");

parent.insertBefore(elm, list);
*/











// ---------------------------------------------------Remove Child Element--------------------------------------------------------------------
// let para = document.getElementById("menu");

// let elm = para.firstElementChild;
// let elm = para.firstElementChild.nextElementSibling;

// para.removeChild(elm);

// document.body.removeChild(para);











// ---------------------------------------------------Clone Element--------------------------------------------------------------------
/*
let menu = document.getElementById("menu");

let elm = menu.cloneNode(true);

document.body.appendChild(elm);

elm.id = "new menu"

console.log(menu)
*/










// ---------------------------------------------------Replace Element--------------------------------------------------------------------
/*
let para = document.getElementById("menu");

let item = document.createElement("li");
item.textContent="services";

let replace = para.firstElementChild.nextElementSibling;

para.replaceChild(item, replace)
*/














// ---------------------------------------------------Insert AdjacentHTML--------------------------------------------------------------------
/*
let elm = document.getElementById("intro");
let html = "<h2>this is a heading 2</h2>";
 elm.insertAdjacentHTML("afterbegin", html)
 elm.insertAdjacentHTML("afterend", html)
 elm.insertAdjacentHTML("beforebegin", html)
 elm.insertAdjacentHTML("beforeend", html)
*/













// ---------------------------------------------------Change Attribute--------------------------------------------------
// let btn = document.getElementById("btn");


// btn.setAttribute("name", "name") // set attribute
// btn.setAttribute("class", "newBtn")
// let vlu = btn.getAttribute("name"); // get attribute
// let vlu = btn.removeAttribute("name"); 
// let vlu = btn.hasAttribute("name"); 
// console.log(vlu);












// ---------------------------------------------------Inline Style--------------------------------------------------
// let btn = document.getElementById("btn");
// btn.style.cssText = "background-color: red; color: black; "
// btn.setAttribute("style", "background-color: red; color: black;");
// btn.style.color="red";















// ---------------------------------------------------Get Computed CSS--------------------------------------------------
/*
let btn = document.getElementById("btn");
let css = getComputedStyle(btn);
console.log(css.color);
*/














// ---------------------------------------------------CSS Classes--------------------------------------------------
/*
let box = document.getElementById("box");
console.log(box.className);
box.className +=" dim";   // add class
console.log(box.classList);

for(let css of box.classList) {
    console.log(css);
}

box.classList.add("newClass"); // add class
box.classList.remove("newClass"); // remove class
box.classList.replace("dim", "newDim"); // replace class
let res = box.classList.contains("newDim"); // check class
console.log(res); // true or false
*/











// ---------------------------------------------------Width and Height of an Element--------------------------------------------------
// let box = document.getElementById("box");
// let width = box.offsetWidth; 
// let height = box.offsetHeight;
// let width = box.clientWidth;  
// let height = box.clientHeight;
// console.log(width);
// console.log(height);













// ----------------------------------------------------DOM Events--------------------------------------------------
/* 1st way
let btn = document.getElementById("btn");
function sayHello() {
    alert("btn was clicked 1st  way");
}
btn.addEventListener("click",sayHello);
*/


/* 2nd way 
let btn = document.getElementById("btn");
btn.addEventListener("click",function() {
    alert("btn was clicked 2nd way");
})
*/









