// ⭐️ Example Challenge START ⭐️

/**Example Task : processFirstItem()
 * This example shows how you might go about solving the rest of the tasks
 * 
 * Use the higher order function processFirstItem below to do the following:
 *  1. Receive an array of strings in a parameter
 *  2. Receive a callback function that takes a string as its argument in a parameter
 *  3. Return the result of invoking the callback function and passing in the FIRST 
 *     element in the array as the argument
 * 
 * The following code is demonstrating a way of completing this task
 * It returns the string `foofoo`
*/

function processFirstItem(stringList, callback) {
  return callback(stringList[0])
}
console.log(processFirstItem(['foo','bar'],function(str){return str+str}));

// ⭐️ Example Challenge END ⭐️


///// M V P ///////

/*Task 1: counterMaker()
  
  Study the code for counter1 and counter2, then answer the questions below.
  
  1. What is the difference between counter1 and counter2?
    Counter 2 has let as a global variable, which it will come out to 'undefined' when invoked. 
  
  2. Which of the two uses a closure? How can you tell?
    Counter 1 uses closure because it is invoking a function that calls a variable a higher level above it when it reaches for the variable 'count' which is declared under the function declaration.
  
  3. In what scenario would the counter1 code be preferable? In what scenario would 
     counter2 be better?  
        Counter 1 will be best used for keeping tracks of scores in games and the previous scores. Whereas counter 2 will be used to keep the count as the same number as always at 0. But it also returns the function itself in the console. 
*/

// counter1 code
function counterMaker() {
  let count = 0;
  return function counter() {
   return count++;
  }
}

const counter1 = counterMaker();

// counter2 code
let count = 0;

function counter2() {
  return count++;
}


/* ⚾️⚾️⚾️ Task 2: inning() ⚾️⚾️⚾️
Use the inning function below to do the following:
  1. Return a random whole number of points between 0 and 2 scored by one team in an inning
  
  For example: invoking inning() should return a numerical score value of 0, 1, or 2
  
NOTE: This will be a callback function for the tasks below
*/

function inning(){
    /*Code Here*/
    return Math.floor(Math.random() * 3);
}


/* ⚾️⚾️⚾️ Task 3: finalScore() ⚾️⚾️⚾️
Use the finalScore function below to do the following:
  1. Receive the callback function `inning` that was created in Task 2 
  2. Receive a number of innings to be played
  3. After each inning, update the score of the home and away teams
  4. After the last inning, return an object containing the final (total) score of the innings played
  
  For example: invoking finalScore(inning, 9) might return this object:
{
  "Home": 11,
  "Away": 5
}
*/ 

function finalScore(inningcb, numOfInningsToBePlayed){
  /*Code Here*/
  
  let homeScore = 0;
  let awayScore = 0;

  for (let i=0; i < numOfInningsToBePlayed; i++){
    // everytime it loops, it adds a different current score to homeScore and awayScore
  
    const currentScoreForHome = inningcb();
    const currentScoreForAway = inningcb();
    homeScore = homeScore + currentScoreForHome;
    awayScore = awayScore + currentScoreForAway;
  } console.log('hello')
  return  {
    Home: homeScore, //should be total score
    Away: awayScore //should be total score
  }
}
console.log(finalScore(inning, 9));

/* ⚾️⚾️⚾️ Task 4: getInningScore() ⚾️⚾️⚾️
Use the getInningScore() function below to do the following:
  1. Receive a callback function - you will pass in the inning function from task 2 as your argument 
  2. Return an object with a score for home and a score for away that populates from invoking the inning callback function */

function getInningScore(functioncb){
  /*Your Code Here */
return {
  Home: functioncb(),
  Away: functioncb()
}
}
console.log(getInningScore(inning));

/* ⚾️⚾️⚾️ Task 5: scoreboard() ⚾️⚾️⚾️
Use the scoreboard function below to do the following:
  1. Receive the callback function `getInningScore` from Task 4
  2. Receive the callback function `inning` from Task 2
  3. Receive a number of innings to be played
  4. Return an array where each of it's index values equals a string stating the
  Home and Away team's scores for each inning.  Not the cummulative score.
  5. If there's a tie at the end of the innings, add this message containing the score to the end of the array:  "This game will require extra innings: Away 12 - Home 12"  (see tie example below)
     If there isn't a tie, add this message to the end of the array: "Final Score: Away 13 - Home 11"  (see no tie example below)
  
  NO TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 2", 
  "Inning 2: Away 2 - Home 1",
  "Inning 3: Away 0 - Home 2", 
  "Inning 4: Away 2 - Home 2", 
  "Inning 5: Away 2 - Home 0", 
  "Inning 6: Away 1 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 2",
  "Inning 9: Away 1 - Home 0", 
  "Final Score: Away 11 - Home 12"  
]

  TIE example: invoking scoreboard(getInningScore,inning, 9) might return 
  an array of strings like this:
[
  "Inning 1: Away 1 - Home 1", 
  "Inning 2: Away 2 - Home 2",
  "Inning 3: Away 1 - Home 0", 
  "Inning 4: Away 1 - Home 2", 
  "Inning 5: Away 0 - Home 0", 
  "Inning 6: Away 2 - Home 1", 
  "Inning 7: Away 0 - Home 2", 
  "Inning 8: Away 2 - Home 1",
  "Inning 9: Away 1 - Home 1", 
  "This game will require extra innings: Away 10 - Home 10"
]  
  */

function scoreboard(getInningScore2, inning2, num) {
  /* CODE HERE */
  const finalNum = []; //the final variable to call everything
  let totalHomeScore = 0; // sum of home scores to start at 0 then gets added later
  let totalAwayScore = 0; // sum of away scores to start at 0  then gets added later

  for (let i = 1; i <= num; i++) {
    // loops through each innings until 9; innings start at 1 and not 0
    const inningScore = getInningScore2(inning2); // this is the inning score between 0-2 that is randomly generated in task 2
    totalHomeScore = totalHomeScore + inningScore.Home; // we're adding the inningScore of home object to the totalHomeScore
    totalAwayScore = totalAwayScore + inningScore.Away; // we're adding the inningScore of away object to the totalAwayScore
    finalNum.push(`Inning ${i}: Away ${inningScore.Away} - Home ${inningScore.Home}`); // this line should print 'inning #: inning score for away # 0-2) - inning score for home # (0-2) 9 times'
  } 
  if  (totalHomeScore === totalAwayScore) {
    // if the inning #'s is equal to the last inning (9) AND total home score is equal to total away score, then there's a tie - print this line below
    finalNum.push(`This game will require extra innings: Away ${totalAwayScore} - Home ${totalHomeScore} `); 
  } else { 
    // if there's no tie, print final score: away & home
    finalNum.push(`Final Score: Away ${totalAwayScore} - Home ${totalHomeScore}`);
  }
  return finalNum;
}

console.log(scoreboard(getInningScore, inning, 9));


/* 🛑🛑🛑🛑🛑 Please do not modify anything below this line 🛑🛑🛑🛑🛑 */
function foo(){
  console.log('its working');
  return 'bar';
}
foo();
module.exports = {
  foo,
  processFirstItem,
  counter1,
  counter2,
  inning,
  finalScore,
  getInningScore,
  scoreboard,
}
