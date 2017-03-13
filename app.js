'use strict';
//I need to make a five yes or no question game.

function colorCobalt () {
  var userScore = 0;
  var cobaltQuestionYes = 'That\'s right! Colbalt was the color of James\' truck! You deserve MHANY KITTEHS!';
  var cobaltQuestionNo = 'Well.... I guess if you remembered that the truck was blue we can let it slide.';
  var blueQuestion = prompt('Did you notce what color of blue was mentioned in the Bio?');
  if (blueQuestion.toLowerCase() === 'yes' || blueQuestion.toLowerCase() === 'y') {
    console.log(cobaltQuestionYes);
    alert(cobaltQuestionYes);
    userScore++;
  }
  else if (blueQuestion.toLowerCase() === 'no' || blueQuestion.toLowerCase() === 'n') {
    alert(cobaltQuestionNo);
    console.log(cobaltQuestionNo);
  }
  else {
    console.log('WHAT IS YOUR MALFUNCTION');
    alert('WHAT IS YOUR MALFUNCTION!');
  }
}
colorCobalt();

function treeAlert() {
  var treeAlertYes = 'Many people like you and James have had a similar situation from having too much of a good thing.';
  var treeAlertNo = 'You must have had a good mentor to show you how to approach certain situations so to not be overwhelmed.';
  var treeQuestion = prompt('Did you ever have a hobby that was ruined for you?');
  if (treeQuestion.toLowerCase() === 'yes' || treeQuestion.toLowerCase() === 'y') {
    alert(treeAlertYes);
    console.log(treeAlertYes);
    userScore++;
  }
  else if (treeQuestion.toLowerCase() === 'no' || treeQuestion.toLowerCase() === 'n') {
    alert(treeAlertNo);
    console.log(treeAlertNo);
  }
  else {
    alert('WHY ARE YOU STILL MALFUNCTIONING!!!!');
    console.log('WHY ARE YOU STILL MALFUNCTIONING!!!');
  }
}
treeAlert();

function pictureAlert () {
  var pictureAlertYes = 'Well you Sir are mistaken! That is an actual plant that James helped grow.  For the past 6 years, James has been the grounds keeper as a side hustle for a very large event property in Woodinville, WA. ';
  var pictureAlertNo = 'Nice job! That is an actual plant that James helped grow.  For the past 6 years James has been the grounds keeper as a side hustle for a very large event property in Woodinville, WA. ';
  var pictureQuestion = prompt('Do you think the background picture of the webste is photoshopped?');
  if (pictureQuestion.toLowerCase() === 'yes' || pictureQuestion.toLowerCase() === 'y') {
    alert(pictureAlertYes);
    console.log(pictureAlertYes);
    userScore++;
  }
  else if (pictureQuestion.toLowerCase() === 'no' || pictureQuestion.toLowerCase() === 'n') {
    alert(pictureAlertNo);
    console.log(pictureAlertNo);
  }
  else {
    alert('WHAT IS YOUR MALFUNCTION!');
    console.log('WHAT IS YOUR MALFUNCTION!');
  }
}
pictureAlert();

function googleAlert() {
  var googleAlertYes = 'At one point, James worked for Microsoft in their game testing department.  He even worked on Call of Duty: Black Op\'s 2 before it hit the shelves! But alas Google still seems to be that next hurtle!';
  var googleAlertNo = 'There is a link to show what Google is all about. James sister actually worked in the Google Maps department but the first day she had to call James asking why her keyboard wasn\'t working.  Turns out her keyboard wasn\'t plugged in!';
  var googleMalfunction = 'ok.... seriously..... how...can.. you ... not ....answer YES OR NO!!!!!!!!! MALFUNCTION!!!!';
  var googleQuestion = prompt('It is no secret who James wants to work for, huh?');
  if (googleQuestion.toLowerCase() === 'yes' || googleQuestion.toLowerCase() === 'y') {
    alert(googleAlertYes );
    console.log(googleAlertYes);
    userScore++;
  }
  else if (googleQuestion.toLowerCase() === 'no' || googleQuestion.toLowerCase() === 'n') {
    alert(googleAlertNo);
    console.log(googleAlertNo);
  }
  else {
    alert(googleMalfunction);
    console.log(googleMalfunction);
  }
}
googleAlert ();

function christianQuestion() {
  var christianQuestionYes = 'It is true. James has read through the Bible at least 5 times! Too many!';
  var christianQuestionNo = 'He was rasied Baptist and went to a private christian school';
  var christianQuestion = prompt('Can you guess what religion James was raised in?');
  if (christianQuestion.toLowerCase() === 'yes' || christianQuestion.toLowerCase() === 'y') {
    alert(christianQuestionYes );
    console.log(christianQuestionYes);
    userScore++;
  }
  else if (christianQuestion.toLowerCase() === 'no' || christianQuestion.toLowerCase() === 'n') {
    alert(christianQuestionNo);
    console.log(christianQuestionNo);
  }
  else {
    alert('You are a loaf of BREAD!');
    console.log('You are a loaf of BREAD!');
  }
}
christianQuestion();
/*
As a developer, I want to add a sixth question to my guessing game that takes numeric input by prompting a user to guess a number (for instance, "What is my favorite number?" or "How many Pokémon did I catch yesterday?"), and indicates to the user whether the guess is 'too high' or 'too low', and gives the user exactly four opportunities to get the correct answer, so that my fancy programming skills are showcased.
*/
function guessingGame() {
  var numberGame = true;
  var correctAnswer = 'Thats RIGHT! Nice JOB PANCAKE MAN!';
  var wayTooLow = 'You are WAAAAAAAAAAAAAAAY t00 low!';
  var gettingCloser = 'Y0u are ge77ing cl0ser!';
  var tooHigh = 'Y0ur answ3r is t00 high!';
  var soCLose = 'Y0u sir ar3 s9 v3ry cl0s3!!!!!';
  var numberTries = 0;

  while(numberTries < 4) {
    var userNumber = prompt('I have a random question for you, Writer. How many grapefruits did I bare hand slice to perfection for my DAILY dose of VITAMIN C?! HURRY!!!!!!!!!');

    if(userNumber == 1337) {
      alert('correctAnswer');
      console.log('correctAnswer');
      userScore++;
      break;
    }
    else if(userNumber < 400) {
      alert('wayTooLow');
      console.log('wayTooLow');
      numberTries++;
    }
    else if(userNumber < 800) {
      alert('gettingCloser');
      console.log('gettingCloser');
      numberTries++;
    }
    else if(userNumber < 1000) {
      alert('soCLose');
      console.log('soCLose');
      numberTries++;
    }
    else if(userNumber > 1337) {
      alert('tooHigh');
      console.log('tooHigh');
      numberTries++;
    }
  }
}
guessingGame();
/*
As a developer, I want to add a seventh question to my guessing game that has multiple possible correct answers that are stored in an array. For instance, "Can you guess a state that I have lived in besides Washington?", so that even more of my programming skills are showcased. For now, I will structure this question so that the user has six tries to get a single correct answer, and upon using up those tries OR getting a correct answer, displays a message to the user indicating all of the possible correct answers.
*/
function scareGame () {
  var scaredGame = true;
  var scaredCorrectAnswer = 'Nice! You got one! James is definetly scared of ';
  var scaredTries = 0;
  while(scaredTries < 6) {
    var scaredPrompt = prompt('Can you think of one thing that James is scared of?');

    if(scaredPrompt.toLowerCase() == 'clowns' || 'clown' || 'the dark' || 'dark' || 'bees') {
      alert(scaredCorrectAnswer + scaredPrompt + '.');
      console.log(scaredCorrectAnswer + scaredPrompt + '.');
      userScore++;
      break;
    }
    else {
      scaredTries++;
    }
  }
}

scareGame();

console.log('The user got ' + userScore + ' out of 7.');
