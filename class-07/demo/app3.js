'use strict'

function getUserName(){
    let userName = prompt('Please Enter your Name: ');
    document.write('<p> Hello and welcome ' + userName + '. </p>')
    return userName;
}

let userNameOutside = getUserName()

function specialMessage(){
    // ROGER ROger ROGer roger rogER rogeR

    let userNameLower = userNameOutside.toLowerCase();
    console.log(userNameLower);
    if (userNameOutside.toLowerCase() == 'roger'){
        console.log(userNameOutside)
        document.write('<h3 id="roger">' + 'What is they Bidding Darth ' + userNameOutside + '</h3>');
    } else {
        document.write('<h3 id="not_roger">' + userNameOutside + ' your lack of faith is disturbing! </h3>');
    }
}

function getMonthAndYear(){
    let dateTime = new Date();
    let monthNow = dateTime.getMonth();
    let yearNow = dateTime.getFullYear();
    let message;
    
    yearNow -= 1
    
    if(yearNow > 2020){
        console.log(yearNow)
        console.log('Thank Goodness that is OVER!')
    }
    
    if(monthNow < 3 || monthNow > 10){
        message = "Brrrr, it is cold out.";
    } else if(monthNow < 7) {
        message = "Better Check those allergies."
    } else if(monthNow <= 10){
        message = "Time to crank up that AC.";
    } else {
        message = "Odd weather we are having this year!"
    }
    
    document.write("Weather Forecast: " + message)
}

// getMonthAndYear();