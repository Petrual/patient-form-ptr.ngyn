/*
Name: Peter Nguyen

    File: hw2.js
    Name: Peter Nguyen
    Date Created: January 28, 2025
    Date Updated: 3/9/2025 5:25 PM
    Version: 2.1
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
//ssn validatation javascript code
function validateSsn() {
    const ssn = document.getElementById("ssn").value;
//regex for ssn pattern
    const ssnR = /^[0-9]{3}-?[0-9]{2}-?[0-9]{4}$/;
 
    if (!ssnR.test(ssn)) {
        document.getElementById("ssn-error").innerHTML = 
        "Please enter a valid SSN";
        return false;
    } else {
        document.getElementById("ssn-error").innerHTML = "";
        return true;
    }
}
// primary address validation 
function validateAddress1() {
    var ad1 = document.getElementById("address1").value;
    console.log(ad1);
    console.log(ad1.length);

    if (ad1.length < 2) {
        document.getElementById("address1-error").innerHTML = "Please fill out your address";
    }
    else {
        document.getElementByID("address1-error)").innerHTML = "";
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
    email = document.getElementById("email").value;
    var emailR = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; //regex pattern for email
        
    if(email=="") {
        document.getElementById("email-error").innerHTML = 
        "Email cannot be left blank";
        return false;
    } else if(!email.match(emailR)) {
        document.getElementById("email-error").innerHTML =
        "Please enter a valid email address.";
        return false;
    } else {
        document.getElementById("email-error").innerHTML ="";
        return true; 
    }
} 

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

function validatePword() {
    const pword = document.getElementById("pword").value;
    const uname = document.getELementById("uname").value;

    //sets up and initializes array
    const errorMessage = [];

    //check for lowercase letters
    if(!pword.match(/[a-z]/)) {
        errorMessage.push("Enter at least one lowercase letter.");
    }

    //check for uppercase letters
    if(!pword.match(/[A-Z]/)) {
        errorMessage.push("Enter at least one uppercase letter.");
    }

    //checks for numbers
    if(!pword.match(/[0-9]/)) {
        errorMessage.push("Needs to include at least one number.");
    }

    //checks for special characters
    if(!pword.match(/[!\@#\$%&*\-_\\.+\(\)]/)) {
        errorMessage.push("Needs to include at least one special character.");
    }

    //checks that username is not contained within the password
    if (pword==uname || pword.includes(uname)) {
        errorMessage.push("Password cannot contain username.");
    }

    //displays errors if parameters are not met
    const errorContainer = document.querySelector(".pword-message");
    errorContainer.innerHTML = errorMessage
    .map((message) => `<span>${message}</span><br>`)
    .join('');
}

// Confirm Password, ensures password matches initial password input js
function validateConPword() {
    const pword1 = document.getElementById("pword").value;
    const pword2 = document.getElementById("con_pword").value; // Corrected here

    if (pword1 !== pword2) {
        document.getElementById("con_pword-error").innerHTML = 
        "Passwords do not match.";
        return false;
    } else {
        document.getElementById("con_pword-error").innerHTML = 
        "Password confirmed.";
        return true;
    }
}

// review button js (display user input back to user)
function reviewInput() {
    var formcontent = document.getElementById("signup");
    var formoutput = "<table class='output'><th colspan = '3'> Review Your Information:</th>";
    for (let i = 0; i < formcontent.length; i++) {
        if (formcontent.elements[i].    value !== "") {
            switch (formcontent.elements[i].type) {
                case "checkbox":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>&#x2713;</td></tr>`;
                    }
                    break;
                case "radio":
                    if (formcontent.elements[i].checked) {
                        formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
                    }
                    break;
                default:
                    formoutput += `<tr><td align='right'>${formcontent.elements[i].name}</td><td>${formcontent.elements[i].value}</td></tr>`;
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