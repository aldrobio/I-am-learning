// asset/js/my_javascript.js

// variable example
var your_name = "Meher";
var age = 20;
document.getElementById("p_name").innerHTML = "Hello " + your_name + "<br>Age : " + age;

// string to number conversion
document.write("<br>" + "2 +  Number('3.4') = ", 2 + Number('3.4'), "<br>");

// int conversion
document.write("<br>", "2 + parseInt('3.4') = ", 2 + parseInt('3.4'), "<br>"); // string to int
document.write("<br>", "2 + parseInt(3.4) = ", 2 + parseInt(3.4), "<br>"); // float to int

// Convert "parseFloat or Number" to float
document.write("<br>", "2 + parseFloat('3.4') = ", 2 + parseFloat("3.4"), "<br>"); // parseFloat

//math
document.write("<br> Math ")
document.write("<br>", "pi =  ", Math.PI, "<br>");
document.write("e =  ", Math.E, "<br>");
document.write("similarly we can use 'abs', 'floor', 'ceil' and 'round' etc. <br>")
document.write("random number : ", Math.ceil(Math.random() * 20), "<br>"); // enter random number
document.write("<br>");

// string
document.write("<br>", "meher".toUpperCase(), "<br>") // uppercase
w = "Krishna"
document.write(w.toLowerCase(), "<br>") // lowercase
document.write(w.small(), "<br>") // small
document.write(w.bold(), "<br>") // bold
document.write(w.strike(), "<br>") // strike
document.write(w.fontsize("5em"), "<br>") // strike
document.write(w.link("http://pythondsp.readthedocs.io"), "<br>") // link
document.write(w.fontcolor("red").fontsize("12em"), "<br>") // multiple
document.write("<br>");
document.write("<br>");

// arrays
arr = [15, 30, "Meher"]
for (a in arr)
    document.write(arr[a], " ");
document.write("<br>");
document.write("lenght of array: ", arr.length, "<br>");

document.write(arr.pop(), "<br>"); // remove last element
arr.push("Krishna"); // add element to end
document.write(arr.pop(), "<br>");
document.write("lenght of array: ", arr.length, "<br>");
document.write("<br>");


// Control structure, loops and functions - // if-else
document.write("  If-else function".toUpperCase(), "<br>", );
age = 10;
if (age > 3 && age < 6) {
    document.write("Age : " + age + "<b> go to kindergarten</b>");
} else if (age >= 6 && age < 18) {
    document.write("Age : " + age + "<b> go to school</b>");
} else {
    document.write("Age : " + age + "<b> go to college</b>");
}
document.write("<br>");
document.write("<br>");



// switch-case
var grade = 'A';
document.write(" Grade " + grade + " : ");
switch (grade) {
    case 'A':
        document.write("Very good grade!");
        break;
    case 'B':
        document.write("Good grade!");
        break;
    default: // if grade is neither 'A' nor 'B'
        document.write("Enter correct grade");
}
document.write("<br>");
document.write("<br>");

// For loop
for (i = 5; i >= 0; i--) {
    document.write(i + " ");
}
document.write("<br>");
document.write("<br>");

// While loop
x = 0;
while (x < 5) {
    document.write(x + " ");
    x++;
}
document.write("<br>");
document.write("<br>");

// do-while
x = 0;
do {
    document.write(x + " ");
    x++;
} while (x < 3);
document.write("<br>");
document.write("<br>");

// for-in loop
arr = [10, 12, 31];
for (a in arr) {
    document.write(arr[a] + " ");
}
document.write("<br>");
document.write("<br>");

// continue
for (i = 5; i >= 0; i--) {
    if (i == 3) { // skip 3
        continue;
    }
    document.write(i + " ");
}
document.write("<br>");
document.write("<br>");

// break
for (i = 5; i >= 0; i--) {
    if (i == 3) { // exit loop when i=3
        break;
    }
    document.write(i + " ");
}
document.write("<br>");
document.write("<br>");

// add2Num function
function add2Num(num1, num2) {
    return num1 + num2;
}
sum = add2Num(2, 3); // function call
document.write("2 + 3 = " + sum);
document.write("<br>");
document.write("<br>");

//Event Handling
document.write(" <b> Event Handling".fontsize(20));
function alertMessage(message) {
    alert(message)
}