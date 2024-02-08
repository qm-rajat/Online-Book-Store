var MenuItems = document.getElementById("MenuItems");   //This line retrieves an HTML element with the id "MenuItems" and stores it in the variable "MenuItems"




var LoginForm = document.getElementById("LoginForm");  //This line retrieves an HTML element with the id "LoginForm" and stores it in the variable 'LoginForm'
var RegForm = document.getElementById("RegForm");      //This line retrieves an HTML element with the id "RegForm" and stores it in the variable 'RegForm'
var Indicator = document.getElementById("Indicator");  //This line retrieves an HTML element with the id "Indicator" and stores it in the variable 'Indicator'

function register(){
    RegForm.style.transform = "translateX(0px)";
    LoginForm.style.transform = "translateX(0px)";
    Indicator.style.transform = "translateX(100px)";
}

function Login(){
    RegForm.style.transform = "translateX(300px)";
    LoginForm.style.transform = "translateX(300px)";
    Indicator.style.transform = "translateX(0px)";
}




/*

function register() { ... }
This is a JavaScript function named "register". When called, this function does the following:
It moves the registration form (RegForm) and login form (LoginForm) to the left (0px) by setting their "transform" property to "translateX(0px)".
It moves the indicator (possibly a visual indicator of the active form) to the right (100px) by setting its "transform" property to "translateX(100px)".




function Login() { ... }

This is another JavaScript function named "Login". When called, this function does the following:
It moves the registration form (RegForm) and login form (LoginForm) to the right (300px) by setting their "transform" property to "translateX(300px)".
It moves the indicator (possibly a visual indicator of the active form) to the left (0px) by setting its "transform" property to "translateX(0px)".

*/