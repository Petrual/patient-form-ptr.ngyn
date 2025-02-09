/*
Name: Peter Nguyen
    File: homework1.html
    Date Created: January 28, 2025
    Date Updated: 2/8/2025 8:10 PM
    Version: 1.0
    Purpose: MIS 3371 Web Development Project HW 1 ... Patient Registration Form 😊
*/

// Dynamic Date
const d = new Date();
let text = d.toLocaleDateString();
document.getElementById("today").innerHTML= text;