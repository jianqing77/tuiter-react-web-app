// alert('Hello World!');

// console.log() to print
console.log("Hello World!");

// --------------------------------------------------------------------
// ---------------------- Variables and Constants ---------------------
// --------------------------------------------------------------------
console.log("Variables and Constants");
global1 = 10;
var functionScoped = 2;
let blockScoped = 5;
const constant1 = global1 + functionScoped - blockScoped;
console.log(global1);
console.log(functionScoped);
console.log(blockScoped);
console.log(constant1);

console.log("Variable types");
let numberVariable = 123;
let floatingPointNumber = 234.345;
let stringVariable = "Hello World!";
let booleanVariable = true;
let isNumber = typeof numberVariable;
let isString = typeof stringVariable;
let isBoolean = typeof booleanVariable;
console.log(numberVariable);
console.log(floatingPointNumber);
console.log(stringVariable);
console.log(isNumber);
console.log(isString);
console.log(isBoolean);

console.log("Boolean Variables");
let true1 = true;
let false1 = false;
let false2 = true1 && false1;
let true2 = true1 || false1;
let true3 = !false2;
let true4 = numberVariable === 123;
let true5 = floatingPointNumber !== 321.432;
let false3 = numberVariable < 100;
// == operator does the type conversion of the operands before comparison
let sortaTrue = "1" == 1;
let notTrue = "1" === 1;
console.log(true1);
console.log(false1);
console.log(false2);
console.log(true2);
console.log(true3);
console.log(true4);
console.log(true5);
console.log(false3);
console.log(sortaTrue);
console.log(notTrue);

// --------------------------------------------------------------------
// ---------------------- Conditionals --------------------------------
// --------------------------------------------------------------------
console.log("If else");
if (true1) {
    console.log(true);
}
if (!false1) {
    console.log("!false1");
} else {
    console.log("false1");
}

// Ternary conditional operator
console.log("Ternary conditional operator");
let loggedIn = true;
// condition ? exprIfTrue : exprIfFalse
const greeting = loggedIn ? "Welcome!" : "Please login";
console.log(greeting); // Welcome!

// --------------------------------------------------------------------
// ---------------------------- Functions -----------------------------
// --------------------------------------------------------------------
// Legacy ES5 function
// function <functionName> (<parameterList>) { <functionBody> }
console.log("Legacy ES5 function");
function add(a, b) {
    return a + b;
}
const twoPlusFour = add(2, 4);
console.log(twoPlusFour);

// ----------- New ES6 arrow functions -----------
console.log("New ES6 arrow functions");
const subtract = (a, b) => {
    return a - b;
};
const threeMinusOne = subtract(3, 1);
console.log(threeMinusOne);

// ----------- Implied returns -----------
// if the body of the function consists of just returning some value or expression,
// then the return statement is optional and can be replaced with just the value or expression
console.log("Implied return");
const multiply = (a, b) => a * b;
const fourTimesFive = multiply(4, 5);
console.log(fourTimesFive);

// ----------- Optional parenthesis and parameters -----------
// optional parameter parenthesis if functions have only one parameter
console.log("parenthesis and parameters");
const square = (a) => a * a; // optional parameter parenthesis
const plusOne = (a) => a + 1; // optional parameter parenthesis
const twoSquared = square(2);
const threePlusOne = plusOne(3);
console.log(twoSquared);
console.log(threePlusOne);

// --------------------------------------------------------------------
// ------------------------------ Arrays ------------------------------
// --------------------------------------------------------------------

// group together several values into a single variable
// number arrays, string arrays, and even a mix and match of datatypes
// in the same array.
console.log("Arrays");
let numberArray1 = [1, 2, 3, 4, 5];
let stringArray1 = ["string1", "string2"];
let variableArray1 = [functionScoped, blockScoped, constant1, numberArray1, stringArray1];
console.log(numberArray1); // (5) [1, 2, 3, 4, 5]
console.log(stringArray1); // (2) ["string1", "string2"]
console.log(variableArray1); // (5) [2, 5, 7, Array(5), Array(2)]

// ---------------------- Array index and length ------------------------
console.log("Array index and length");
const length1 = numberArray1.length;
const index1 = numberArray1.indexOf(3);
console.log(length1);
console.log(index1);

// --------------- Adding and Removing Data to/from Arrays ---------------
// push(): appends an element at the end of an array.
// splice(): can remove/add an element anywhere in the array
console.log("Add and remove data to arrays");
// adding new items
numberArray1.push(6);
stringArray1.push("string3");

numberArray1.splice(2, 1); // remove 1 item starting on index 2
stringArray1.splice(1, 1); // remove 1 item starting on index 1
console.log(numberArray1); // --  (5) [1, 2, 4, 5, 6]
console.log(stringArray1); // -- ["string1", "string3"]

// -----------------------------------------------------------------
// --------------------------- For Loop ----------------------------
// -----------------------------------------------------------------
console.log("For Loops");
for (let i = 0; i < stringArray1.length; i++) {
    const string1 = stringArray1[i];
    console.log(string1);
}

// -----------------------------------------------------------------
// ------------------------- Map Function -------------------------
// -----------------------------------------------------------------
// An array's map function can iterate over an array's values, apply a
// function to each value, and collate all the results in a new array.
console.log("Map Function");
const squares = numberArray1.map(square); // calls square func for each element
const cubes = numberArray1.map((a) => a * a * a);

// -----------------------------------------------------------------
// -------------------------- Find Function ------------------------
// -----------------------------------------------------------------
// search for an item in an array and return the element it finds
console.log("Find Function");
const four = numberArray1.find((a) => a === 4); // 4
const string3 = stringArray1.find((a) => a === "string3"); // string3

// -----------------------------------------------------------------
// ----------------------- Find Index Function ---------------------
// -----------------------------------------------------------------
console.log("Find Index");
const fourIndex = numberArray1.findIndex((a) => a === 4); // [1, 2, 4, 5, 6] -- 2
const string3Index = stringArray1.findIndex((a) => a === "string3"); // 1

// -----------------------------------------------------------------
// ----------------------- Filter Function -------------------------
// -----------------------------------------------------------------
console.log("Filter Function");
const numbersGreaterThan2 = numberArray1.filter((a) => a > 2);
const evenNumbers = numberArray1.filter((a) => a % 2 === 0);
const oddNumbers = numberArray1.filter((a) => a % 2 !== 0);

// -----------------------------------------------------------------
// ---------------------- Template Strings -------------------------
// -----------------------------------------------------------------
console.log("Template Strings");
const five = 2 + 3;
const result1 = "2 + 3 = " + five;
console.log(result1); // 2 + 3 = 5

const result2 = `2 + 3 = ${2 + 3}`;
console.log(result2); // 2 + 3 = 5

const username = "alice";
const greeting1 = `Welcome home ${username}`;
console.log(greeting1); //  Welcome home alice

loggedIn = false;
const greeting2 = `Logged in: ${loggedIn ? "Yes" : "No"}`;
console.log(greeting2); // loggedIn: No

// -----------------------------------------------------------------
// -------------------- Writing to the DOM -------------------------
// -----------------------------------------------------------------
// DOM (Document Object Model)
// JavaScript can manipulate the DOM, the browser's in memory
// representation of an HTML document

// -----------------------------------------------------------------
// ------------------- Loading jQuery library ---------------------
// -----------------------------------------------------------------
// console.log("Find Index");

// -----------------------------------------------------------------
// ----------------- Executing jQuery scripts ----------------------
// -----------------------------------------------------------------
// The jQuery function can manipulate the DOM in many different ways,
// but a common practice is to pass it an initialization function
console.log("Executing jQuery scripts");
const init = () => {
    console.log("Hello world from jQuery");
    /* do the rest of the lab work here */
    // ------------- Binding to the DOM --------------------
    const bindById = $("#bind-by-id");
    const bindByClass = $(".bind-by-class");
    console.log("Binding to DOM");
    console.log(bindById);
    console.log(bindByClass);

    // --------- Changing Style Programmatically -----------
    const changeStyle = $("#change-style");
    const changeStyle2 = $(".change-style");
    changeStyle.css("color", "red");
    changeStyle2.css("color", "blue");

    // --------- Getting and Setting attributes ------------
    // Get Attributes
    console.log("Get and set attributes");
    const getIdAttr = $("#get-id-attr");
    const id = getIdAttr.attr("id");
    console.log(id);

    // Set Attributes
    const setClassAttr = $("#set-class-attr");
    setClassAttr.attr("class", "class-0");

    // ----------- Adding and removing classes -------------
    // Add Class
    const addClass1Example = $("#add-class-1");
    addClass1Example.addClass("class-1");

    // remove class
    const removeClass1Example = $("#remove-class-1");
    removeClass1Example.removeClass("class-2");

    // ----------- Hiding and showing content --------------
    // hide
    const hideMe = $("#hide-me");
    hideMe.hide();
    // show
    const showMe = $("#show-me");
    showMe.show();

    // ------------ Creating new elements -------------------
    // Creating the elements does not automatically add them to the DOM
    const newLineItem = $("<li>Line item 1</li>");
    const anotherLineItem = $("<li>Line item 2</li>");

    // ------------ Appending new elements -------------------
    // To actually add new content to the DOM use functions such as append
    const ul = $("#append-new-elements");
    ul.append(newLineItem);
    ul.append(anotherLineItem);
    // console.log("Appending new elements");
    // $("h1").append(" World!");
    // $("#hello").html("Hello World!");

    // --------- Removing and emptying content ---------------
    const removeLi = $("#remove-this");
    const emptyUl = $("#empty-this");
    removeLi.remove();
    emptyUl.empty();

    // ------------ Changing content ------------------------
    const changeThisText = $("#change-this-text");
    const changeThisHtml = $("#change-this-html");
    changeThisText.html("New text");
    changeThisHtml.html(`<li>Line item A</li>
                        <li>Line item B</li>
                        <li>Line item C</li>`);

    // ------- Navigating up and down the DOM tree -----------
    const child2 = $("#child-2");
    const parent1 = child2.parents("#parent");
    parent1.css("background-color", "red").css("color", "white");

    const parent = $("#parent");
    const child = parent.find("#child-2");
    child.css("background-color", "blue");

    // ------------- Handling click events -------------------
    const handleClick = () => console.log("Handle click");
    const clickable = $(".clickable");
    clickable.click(handleClick);

    // ------------------ Event target ------------------------
    // determine the UI element that a user clicked on.
    // This is available in the target attribute of the event generated by the user.
    const handleEventTarget = (event) => {
        const target = event.target;
        console.log(target);
        $(target).css("background-color", "blue").css("color", "white");
    };
    const eventTarget = $("#event-target");
    eventTarget.click(handleEventTarget);

    // ------------- Hiding and showing content ---------------
    let hideBtn, showBtn, hideShowHeader;
    hideBtn = $("#hide");
    showBtn = $("#show");
    hideShowHeader = $("#hide-show");
    const hideHandler = () => {
        hideShowHeader.hide();
    };
    const showHandler = () => {
        hideShowHeader.show();
    };
    hideBtn.click(hideHandler);
    showBtn.click(showHandler);
};
$(init);
