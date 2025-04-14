/*
    Name: Peter Nguyen
    File: hw3.js
    Date Created: January 28, 2025
    Date Updated: 4/13/2025 7:20 PM
    Version: 3.1
    Purpose: MIS 3371 Web Development Project HW 3(JS) ... Patient Registration Form 😊
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
// dob validation js code //
function validateDob() {
    dob=document.getElementById("dob");
    let date = new Date(dob.value);
    let maxDate = new Date().setFullYear(new Date()-120);

    if(date>new Date())
    {
        document.getElementByIda("dob-error").innerHTML= 
        "Date cannot be in the future."
        dob.value="";
        return false;
    }
    else if(date < new Date(maxDate)) 
        {
            document.getElementById("dob-error").innerHTML = 
            "Date cannot be more than 120 years ago."
            dob.value="";
            return false;
        }
        else
        {
            document.getElementById("dob-error").innerHTML = "";
            return true;
        }
}
// first name validation js code
function validateFname() {
    const fname = document.getElementById("fname").value.trim();
    const namePattern = /^[a-zA-Z']+$/; // Regex pattern for first name

    if (fname === "") {
        document.getElementById("fname-error").innerHTML = "First name field cannot be empty.";
        return false;
    } else if (!fname.match(namePattern)) {
        document.getElementById("fname-error").innerHTML = "Letters, apostrophes, and hyphens only.";
        return false;
    } else if (fname.length < 2) {
        document.getElementById("fname-error").innerHTML = "First name must be at least 2 characters long.";
        return false;
    } else if (fname.length > 30) {
        document.getElementById("fname-error").innerHTML = "First name cannot exceed 30 characters.";
        return false;
    } else {
        document.getElementById("fname-error").innerHTML = ""; // Clear error message
        return true;
    }
}

// middle initial validation js code
function validateMini() 
{
    mini=document.getElementById("mini").value;
    const namePattern = /^[A-Z]+$/; //regex pattern for middle initial

    //make middle initial uppercase
    mini = mini.toUpperCase();
    document.getElementById("mini").value = mini;

    //check middle initial is only 1 character
    if(!mini.match(namePattern)) {
        document.getElementById("mini-error").innerHTML = "optional, 1 character, no numbers, blank/null ok";
        return false;
    } else if (!mini.match(namePattern)) { //checks if middle initial matches pattern
        document.getElementById("mini-error").innerHTML = "Letters only.";
        return false;
    } else {
        document.getElementById("mini-error").innerHTML = "";
        return true; 
    }
}

// last name validation js code
function validateLname() {
    const lname = document.getElementById("lname").value.trim();
    const namePattern = /^[a-zA-Z']+$/; // Regex pattern for first name

    if (lname === "") {
        document.getElementById("lname-error").innerHTML = "Last name field cannot be empty.";
        return false;
    } else if (!lname.match(namePattern)) {
        document.getElementById("lname-error").innerHTML = "Letters, apostrophes, and hyphens only.";
        return false;
    } else if (lname.length < 2) {
        document.getElementById("lname-error").innerHTML = "Last name must be at least 2 characters long.";
        return false;
    } else if (lname.length > 30) {
        document.getElementById("lname-error").innerHTML = "Last name cannot exceed 30 characters.";
        return false;
    } else {
        document.getElementById("lname-error").innerHTML = ""; // Clear error message
        return true;
    }
}
//ssn validatation javascript code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
//regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
 
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN.";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
// SSN on the fly formatting js
function formatSSN() 
{
    document.getElementById("ssn").addEventListener("input", function (e) { // Event listener to interact with the input field
        let ssn = e.target.value.replace(/\D/g, ""); // Remove all non-digit characters
        if (ssn.length > 3 && ssn.length <= 5) { 
            ssn = ssn.slice(0, 3) + "-" + ssn.slice(3); // Add dash after the first 3 digits
        } else if (ssn.length > 5) {
            ssn = ssn.slice(0, 3) + "-" + ssn.slice(3, 5) + "-" + ssn.slice(5, 9); // Add dashes after 3rd and 5th digits
        }
        e.target.value = ssn; // Update the input field value
    });
}
// primary address validation 
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please fill out your address.";
    }
    else {
        document.getElementById("address1-error)").innerHTML = "";
        return true;
    }
} 

// city validation
function validateCity() {
    city = document.getElementById("city").value.trim();

    if(!city) {
        document.getElementById("city-error").innerHTML = "City cannot be left blank.";
        return false;  
    } else {
        document.getElementById("city-error").innerHTML = "";
        return true;
    }
}

// zipcode validation

function validateZip(){
    const zipInput = document.getElementById("zip");
    let zip = zipInput.value.replace(/[^\d-]/g, "") //removes non-number/dash characters

    if(!zip) {
        document.getElementById("zip-error").innerHTML =
        "Zipcode cannot be left blank";
        return false;
    }

    if(zip.length > 5) {
        zip = zip.slice(0,5); //removes any additional charcters after the 5th character
    }

    zipInput.value = zip;
    document.getElementById("zip-error").innerHTML = "";
    return true;
} 

// email validation
function validateEmail() {
    var emailInput = document.getElementById("email");
    var email = emailInput.value.trim();
    var emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/; // Regex for strict email format
    var errorElement = document.getElementById("email-error");

    if (email === "") {
        errorElement.innerHTML = "Email cannot be left blank.";
        return false;
    } else if (!email.match(emailPattern)) {
        errorElement.innerHTML = "Please enter a valid email address (user@domain.tld).";
        return false;
    } else {
        errorElement.innerHTML = ""; // Clear error message
        return true;
    }
}
// js to attachEventListeners to form fields
function attachEventListeners() {

    // Email validation listeners
    var emailInput = document.getElementById("email");
    emailInput.addEventListener("input", validateEmail);
    emailInput.addEventListener("blur", validateEmail);

    // Phone number validation listeners
    var phoneInput = document.getElementById("phonenum");
    phoneInput.addEventListener("blur", validatePhonenum);

    // Confirmation password validation listeners
    var conPwordInput = document.getElementById("con_pword");
    conPwordInput.addEventListener("blur", validateConPword);
    conPwordInput.addEventListener("input", validateConPword);
    conPwordInput.addEventListener("focus", validateConPword);    
}

// Attach event listeners when the DOM is fully loaded
document.addEventListener("DOMContentLoaded", attachEventListeners);

//phone # validation
function validatePhonenum() {
    const phoneInput = document.getElementById("phonenum");
    const phone = phoneInput.value.replace(/\D/g, ""); // removes all non-number characters
    
    if(phone.length === 0) {
        document.getElementById("phonenum-error").innerHTML = 
        "Please input a valid Phone Number";
        return false;
    }

    const formattedPhone = phone.slice(0,3) + "-" + phone.slice(3,6) + "-" + phone.slice(6,10);
    phoneInput.value = formattedPhone;
    document.getElementById("phonenum-error").innerHTML = "";
    return true;

}

//username validation js
function validateUname() {

    uname = document.getElementById("uname").value.toLowerCase();
    document.getElementById("uname").value = uname;

    if (uname.length == 0) {
        document.getElementById("uname-error").innerHTML = 
        "User ID cannot be left blank";
        return false;
    }

    if (!isNaN(uname.charAt(0))) {
        document.getElementById("uname-error").innerHTML = 
        "User ID cannot begin with a number";
        return false;
    }

    let regex = /^[a-zA-Z0-9_-]+$/;
    if (!regex.test(uname)) {
        document.getElementById("uname-error").innerHTML = 
        "Username can only have letters, numbers, underscores, and dashes";
        return false;
    } else if (uname.length < 5) {
        document.getElementById("uname-error").innerHTML = 
        "Username must contain at least 5 characters";
        return false;
    } else if (uname.length > 30) {
        document.getElementById("uname-error").innerHTML = 
        "Username can't exceed 30 characters";
        return false;
    } else {
        document.getElementById("uname-error").innerHTML = "";
        return true;
    }
}

//password validation js

// Password validation function
function validatePword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getElementById("uname").value;

    // Clear all previous messages
    document.getElementById("msg1").innerHTML = "";
    document.getElementById("msg2").innerHTML = "";
    document.getElementById("msg3").innerHTML = "";
    document.getElementById("msg4").innerHTML = "";
    document.getElementById("msg5").innerHTML = "";
    document.getElementById("msg6").innerHTML = "";
    document.getElementById("msg7").innerHTML = "";

    let isValid = true;

    // Check for lowercase letters
    if (!pword.match(/[a-z]/)) {
        document.getElementById("msg1").innerHTML = "Enter at least one lowercase letter.";
        isValid = false;
    }

    // Check for uppercase letters
    if (!pword.match(/[A-Z]/)) {
        document.getElementById("msg2").innerHTML = "Enter at least one uppercase letter.";
        isValid = false;
    }

    // Check for numbers
    if (!pword.match(/[0-9]/)) {
        document.getElementById("msg3").innerHTML = "Needs to include at least one number.";
        isValid = false;
    }

    // Check for special characters
    if (!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        document.getElementById("msg4").innerHTML = "Needs to include at least one special character.";
        isValid = false;
    }

    // Check that username is not contained within the password
    if (pword === uname || pword.includes(uname)) {
        document.getElementById("msg5").innerHTML = "Password cannot contain username.";
        isValid = false;
    }

    // Check password length
    if (pword.length < 10) {
        document.getElementById("msg6").innerHTML = "Password must be at least 10 characters long.";
        isValid = false;
    }

    if (pword.length > 30) {
        document.getElementById("msg7").innerHTML = "Password cannot exceed 30 characters.";
        isValid = false;
    }

    // Show or hide the password message container
    const errorContainer = document.querySelector(".pword-message");
    if (!isValid) {
        errorContainer.style.display = "block"; // Show error messages
    } else {
        errorContainer.style.display = "none"; // Hide error messages
    }

    return isValid;
}

// Confirmation password validation function
function validateConPword() {
    const pword = document.getElementById("pword").value;
    const conPword = document.getElementById("con_pword").value;
    const errorElement = document.getElementById("con_pword-error");

    // Clear previous classes
    errorElement.classList.remove("error", "success");

    if (conPword === "") {
        errorElement.innerHTML = "Please re-enter your password.";
        errorElement.classList.add("error"); 
        return false;
    } else if (pword !== conPword) {
        errorElement.innerHTML = "Passwords do not match.";
        errorElement.classList.add("error"); 
        return false;
    } else if (!validatePword()) {
        errorElement.innerHTML = "Password does not meet all requirements.";
        errorElement.classList.add("error"); 
        return false;
    } else {
        errorElement.innerHTML = "Password confirmed.";
        errorElement.classList.add("success"); 
        return true;
    }
}

// review button js (display user input back to user)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan='3'>Review Your Information:</th>";
    for (let i = 0; i < formcontent.elements.length; i++) {
        if (formcontent.elements[i].value !== "") {
            let datatype = formcontent.elements[i].type;
            switch (datatype) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td class='outputdata'>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td class='outputdata'>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                case "range":
                case "select-one":
                case "text":
                case "password":
                case "textarea":
                case "email":
                case "tel":
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td class='outputdata'>${formcontent.elements[i].value}</td></tr>`;
                    break;
                default:
                    break;
            }
        }
    }
    formoutput += "</table>";
    document.getElementById("showInput").innerHTML = formoutput;
}

// remove review data
function removeReview() {
    document.getElementById("showInput").innerHTML = "";
}

//shows alert box when applicable js

function showAlert(errorMessages) {
    const alertBox = document.getElementById("alert-box");
    const alertContent = document.getElementById("alert-content");

    // Clear previous error messages in the alert box
    alertContent.innerHTML = `<h4>Please address the following errors:</h4>`;

    // Add error messages to the alert box
    errorMessages.forEach((message) => {
        const errorElement = document.createElement("p");
        errorElement.textContent = message;
        errorElement.style.color = "red"; // Style the error messages
        alertContent.appendChild(errorElement);
    });

    // Add the "OK" button back to the alert box
    const closeAlert = document.createElement("button");
    closeAlert.id = "close-alert";
    closeAlert.textContent = "Ok";
    closeAlert.style.marginTop = "10px";
    closeAlert.onclick = function () {
        alertBox.style.display = "none"; // Hide the alert box when "OK" is clicked
    };
    alertContent.appendChild(closeAlert);

    alertBox.style.display = "block"; // Show the alert box
}

function validateInput() {
    let valid = true;
    const errorMessages = [];

    // Call each validation function and collect error messages
    if (!validateFname()) {
        errorMessages.push("First name is invalid.");
        valid = false;
    }
    if (!validateMini()) {
        errorMessages.push("Middle initial is invalid.");
        valid = false;
    }
    if (!validateLname()) {
        errorMessages.push("Last name is invalid.");
        valid = false;
    }
    if (!validateDob()) {
        errorMessages.push("Date of birth is invalid.");
        valid = false;
    }
    if (!validateSsn()) {
        errorMessages.push("Social Security Number is invalid.");
        valid = false;
    }
    if (!validateAddress1()) {
        errorMessages.push("Primary address is invalid.");
        valid = false;
    }
    if (!validateCity()) {
        errorMessages.push("City is invalid.");
        valid = false;
    }
    if (!validateZip()) {
        errorMessages.push("Zipcode is invalid.");
        valid = false;
    }
    if (!validateEmail()) {
        errorMessages.push("Email is invalid.");
        valid = false;
    }
    if (!validatePhonenum()) {
        errorMessages.push("Phone number is invalid.");
        valid = false;
    }
    if (!validateUname()) {
        errorMessages.push("Username is invalid.");
        valid = false;
    }
    if (!validatePword()) {
        errorMessages.push("Password is invalid.");
        valid = false;
    }

    // If any validation fails, show the alert box with error messages
    if (!valid) {
        showAlert(errorMessages); // Display the alert box with error messages
    } else {
        document.getElementById("submit").disabled = false; // Enable the submit button
    }
}