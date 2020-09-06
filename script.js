document.addEventListener("DOMContentLoaded", addNavlistener);
var workPageShowing = false;
var aboutPageShowing = false;

function addNavlistener() {
    document.querySelector("#nav-toggle").addEventListener("click", toggleNav);
    setMenuListeners();
    setInfopageListeners();
}

//ADD LISTENERS
function setMenuListeners() {
    let navElements = document.querySelectorAll(".nav-item");
    for (let i = 0; i < navElements.length; i++) {
        navElements[i].addEventListener("click", function () {
            goTo(i);
        });
    }
}

function toggleNav() {
    let nav = document.querySelector("nav");
    let navButton = document.querySelector("#nav-toggle");
    if (nav.classList.contains("active")) {
        enableScroll(); // SCROLL FUNTION FRAMEWORK
        navButton.classList.remove("active");
        nav.classList.remove("active");
        showScrollbar();
    } else {
        nav.classList.add("active");
        navButton.classList.add("active");
        disableScroll();
        hideScrollbar();
    }
}

function goTo(i) {
    toggleNav();
    enableScroll();
    scrollTo(i);
}

//CALL NEW PAGE
function toggleOverlay() {
    let overlay = document.querySelector(".background-overlay");
    if (overlay.classList.contains("active")) {
        enableScroll(); // SCROLL FUNTION FRAMEWORK
        overlay.classList.remove("active");
        showScrollbar();
    } else {
        overlay.classList.add("active");
        disableScroll();
        hideScrollbar();
    }
}

function showScrollbar() {
    let scrollbar = document.querySelector(".fpsScrollbar");
    scrollbar.style.visibility = "visible";
}

function hideScrollbar() {
    let scrollbar = document.querySelector(".fpsScrollbar");
    scrollbar.style.visibility = "hidden";
}

function setInfopageListeners() {
    let myworkButton = document.querySelector(".second-page .more");
    let aboutButton = document.querySelector(".third-page .more");
    let backButton = document.querySelector(".background-overlay .back-button");

    myworkButton.addEventListener("click", toggleWork);
    aboutButton.addEventListener("click", toggleAbout);
    backButton.addEventListener("click", goBack);
}

function toggleWork() {
    let workPage = document.querySelector("#work");
    toggleOverlay();
    if (workPageShowing) {
        workPageShowing = false;
        workPage.classList.remove("active");
    } else {
        workPageShowing = true;
        workPage.classList.add("active");
    }
}

function toggleAbout() {
    let aboutPage = document.querySelector("#about");
    toggleOverlay();
    if (aboutPageShowing) {
        aboutPageShowing = false;
        aboutPage.classList.remove("active");
    } else {
        aboutPageShowing = true;
        aboutPage.classList.add("active");
    }
}

function goBack() {
    if (workPageShowing) {
        toggleWork();
    } else if (aboutPageShowing) {
        toggleAbout();
    }
}
