/*
Name: Peter Nguyen

    File: hw2.js
    Name: Peter Nguyen
    Date Created: January 28, 2025
    Date Updated: 3/8/2025 2:25 AM
    Version: 1.1
    Purpose: MIS 3371 Web Development Project HW 2 (JS) ... Patient Registration Form 😊
    */

//dyanmic date//
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML = text;

// range slider js code //
let slider = document.getElementById("slider");
    let output = document.getElementById("slider-range");
    output.innerHTML = slider.value;

    slider.oninput = function() {output.innerHTML = this.value;}