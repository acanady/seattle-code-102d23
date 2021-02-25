'use strict'

// function getUserName(){
//     let userName = prompt('Please Enter your Name: ');
//     document.write('<p> Hello and welcome ' + userName + '. </p>')
//     return userName;
// }

// let userNameOutside = getUserName()

// function specialMessage(){
//     // ROGER ROger ROGer roger rogER rogeR

//     let userNameLower = userNameOutside.toLowerCase();
//     console.log(userNameLower);
//     if (userNameOutside.toLowerCase() == 'roger'){
//         console.log(userNameOutside)
//         document.write('<h3 id="roger">' + 'What is they Bidding Darth ' + userNameOutside + '</h3>');
//     } else {
//         document.write('<h3 id="not_roger">' + userNameOutside + ' your lack of faith is disturbing! </h3>');
//     }
// }

// function getMonthAndYear(){
//     let dateTime = new Date();
//     let monthNow = dateTime.getMonth();
//     let yearNow = dateTime.getFullYear();
//     let message;
    
//     yearNow -= 1
    
//     if(yearNow > 2020){
//         console.log(yearNow)
//         console.log('Thank Goodness that is OVER!')
//     }
    
//     if(monthNow < 3 || monthNow > 10){
//         message = "Brrrr, it is cold out.";
//     } else if(monthNow < 7) {
//         message = "Better Check those allergies."
//     } else if(monthNow <= 10){
//         message = "Time to crank up that AC.";
//     } else {
//         message = "Odd weather we are having this year!"
//     }
    
//     document.write("Weather Forecast: " + message)
// }

function numberGuessingGame(){
    // set the correct number
    // Got random number generator from w3schools
    let correctAnswer = Math.floor(Math.random() * 100) + 1;
    console.log(correctAnswer);
     // I need to set the number of guesses

     let guesses = 8;
    // maybe later we can get a random number

    // I need get a number from the user
    // check if they have guesses left
    for(let i = 0; i < guesses; i++){
        let userAnswer = prompt('Please Enter a number 1-100');
        while(userAnswer < 1 || userAnswer > 100){
            userAnswer = prompt('Outside of Range. Please Enter a number 1-100')
        }


        // check if the guess is right?
        if(userAnswer == correctAnswer){
            alert('DING DING DING!  You got it right!');
            break;
        }else if(userAnswer > correctAnswer){
            alert('Your answer is to high! Try Again!')
        } else if(userAnswer < correctAnswer){
            alert('Your answer is to low! Try Again!')
        }
    }

}