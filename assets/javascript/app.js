
 var correctAnswers = 0;
 var wrongAnswers = 0;

 /* Grabs user input then:
 ---Compares to correct answer
 ---Shows if you got it correct or wrong
 ---Stops timer
 ---Adds correct/wrong answers to appropriate variable for scorekeeping
 */
 $(".list-group-item").click(function () {
     userInput = $(this).val();
     if (userInput === $(".answerThree").val()) {
         $(".question").html("Correct!");
         clearInterval(timer);
         clearInterval(endGame);
         correctAnswers++;

     } else {
         $(".question").html("Wrong!");
         clearInterval(timer);
         clearInterval(endGame);
         wrongAnswers++;
     }
 });

 // Question one and possible answers
 var questionOne1 = "Which NBA team started out the 2015-2016 regular season with a 24-0 record?"
 var answerOne1 = "Miami Heat";
 var answerTwo1 = "Cleveland Cavaliers";
 var answerThree1 = "Golden State Warriors";
 var answerFour1 = "San Antonio Spurs";

 // Question two and possible answers
 var questionTwo2 = "Who was the first NBA player to win the Most Valuable Player award unanimously?"
 var answerOne2 = "Stephen Curry";
 var answerTwo2 = "Shaquille O'Neal";
 var answerThree2 = "Michael Jordan";
 var answerFour2 = "LeBron James";

 // Question three and possible answers
 var questionThree3 = "Which team won the 2015 and 2017 NBA Finals?";
 var answerOne3 = "Cleveland Cavaliers";
 var answerTwo3 = "Golden State Warriors";
 var answerThree3 = "Hawaii Pineapples";
 var answerFour3 = "Los Angeles Clippers";

 // Question four and possible answers
 var questionFour4 = "Which NBA player holds the record for the most 3 pointers in a single season?";
 var answerOne4 = "Ray Allen";
 var answerTwo4 = "Kobe Bryant";
 var answerThree4 = "Reggie Miller";
 var answerFour4 = "Stephen Curry";

 // Question five and possible answers
 var questionFive5 = "This quiz happens to be all about one team.  The greatest NBA team of all time.  Which team are we talking about?";
 var answerOne5 = "Golden State Warriors";
 var answerTwo5 = "Boston Celtics";
 var answerThree5 = "Los Angeles Lakers";
 var answerFour5 = "Phoenix Suns";

 // Seconds in game
 var secondsLeft = 6;
 // Count down every one second
 var timer = setInterval(showTime, 1000);
 // Time ran out
 var endGame = setTimeout(timeUp, 6000);
 // Next Question
 var questionTwoTimer = setInterval(pushQuestionTwo, 2000);

 function pushQuestionTwo() {
     $(".question").html(questionOne2);
     $(".answerOne").html(answerOne2);
     $(".answerTwo").html(answerTwo2);
     $(".answerThree").html(answerThree2);
     $(".answerFour").html(answerFour2);
 }

 function showTime() {
     secondsLeft--;
     $("#time-left-panel").html(secondsLeft);
     if (secondsLeft == 0) {
         clearInterval(timer);
         $("#time-left-panel").html(secondsLeft);
     }
 }

 // Shows time ran out on screen
 function timeUp() {
     $("#time-left-panel").html("<h2>Time's Up!</h2>");
 }

 $(".question").html(questionOne1);
 $(".answerOne").html(answerOne1);
 $(".answerTwo").html(answerTwo1);
 $(".answerThree").html(answerThree1);
 $(".answerFour").html(answerFour1);

 $(".answerOne").on("click");
