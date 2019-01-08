// SELECT HAMBURGER IN VARIABLE
var hamburgerIcon = document.querySelector(".hamburgerIcon");

// DECLARE VARIABEL CONTAINING STUFF TO BE HIDDEN/SHOWN
var dropdownItems = document.querySelector(".dropdownItems");

// SELECT MAIN WRAPPER AND SAVE TO VARIABEL
var contentWrapper = document.querySelector(".contentWrapper");

// SELECT BODY
var body = document.querySelector("body");

// ADD EVENT LISTENER FOR CLICKS ON HAMBURGER
hamburgerIcon.addEventListener("click", function () {
    // IF THE MENU ISN'T SHOWN, THEN SHOW
    if (!(dropdownItems.style.display == "block")) {
        console.log("dropdown shown");
        dropdownItems.style.display = "block";
        contentWrapper.style.display = "none";

        // ADD CLASS "gradientBody" TO BODY
        body.classList.add("gradientBody");
    } else { // IF MENU SHOWN THEN HIDE
        console.log("dropdown hidden");
        dropdownItems.style.display = "none";
        contentWrapper.style.display = "block";

        // REMOVE CLASS "gradientBody" FROM BODY
        body.classList.remove("gradientBody");
    }
});

dropdownItems.addEventListener("click", function () {
    console.log("dropdown hidden, link clicked");
    dropdownItems.style.display = "none";
    contentWrapper.style.display = "block";
    body.classList.remove("gradientBody");
});

// ARROW ANIMATION
var arrows = document.querySelectorAll(".arrow");
// DEFINE COLORS FOR ANIMATION
var colors = [
    "#e21fc5",
    "#40f97b",
    "#f46e00",
    "#3dcdf4"
];
// DECLARE COUNTER FOR COLOR DIFFERENCES
var counter = 0;


// SET INTERVAL x MILISECONDS
setInterval(function () {

    // WAIT 0, THEN 500, THEN 1000 MILISECONDS
    setTimeout(function () { // CHANGE COLOR OF 1st ARROW
        changeColor(arrows[0]);
    }, 0);
    setTimeout(function () { // CHANGE COLOR OF 2nd ARROW
        changeColor(arrows[1]);
    }, 500);
    setTimeout(function () { // CHANGE COLOR OF 3rd ARROW
        changeColor(arrows[2]);
    }, 1000);

}, 1500);

function changeColor(arrow) {
    // MAKE SURE COUNTER IS INSIDE ARRAY
    if (counter > 3) {
        counter = 0;
    }
    // CHANGE COLOR
    arrow.style.color = colors[counter]
    // COUNTER +1
    counter++;
}
