'use strict';
const store = {
  // 5 or more questions are required
  questions: [
    {
      id: 1,
      question: 'What kind of dog is this?',
      answers: [
        'Golden Retriever',
        'Great Dane',
        'Daschund',
        'Chihuahua'
      ],
      correctAnswer: 'Great Dane'
    },
    {
      id: 2,
      question: 'What kind of dog is this?',
      answers: [
        'Border Collie',
        'Australian Shepard',
        'Shetland Sheepdog',
        'Smooth Collie'
      ],
      correctAnswer: 'Shetland Sheepdog'
    },
    {
      id: 3,
      question: 'What kind of dog is this?',
      answers: [
        'Chinese Crested',
        'Shiba inu',
        'Greyhound',
        'a Cat'
      ],
      correctAnswer: 'a Cat'
    },
    {
      id: 4,
      question: 'What kind of dog is this?',
      answers: [
        'Chihuahua',
        'A cat',
        'Daschund',
        'Shih tzu'
      ],
      correctAnswer: 'Chihuahua'
    },
    {
      id: 5,
      question: 'What kind of dog is this?',
      answers: [
        'Long dog',
        'A cat',
        'Pomeranian',
        'Daschund'
      ],
      correctAnswer: 'Long dog'
    }
  ],
  questionNumber: 0,
  score: 0
};

function startRender(){
  // eslint-disable-next-line quotes
  $('header').html(`<h1> Types of Dogs Quiz </h1> <h2> How much do you know about dogs? </h2> <div id= 'intro'> <button id="start-button" class="button" type="start">Start</button></div>`);
}
function questionRender(index){
  const question = store.questions[index];
  $('#question-view').html(`<div id="question"> <h1>${question.question} </h1>
<form id='question-form'> <label for="${question.answers[0]}"> <input type="radio" name="answer-choice" value="${question.answers[0]}"> ${question.answers[0]} </label>
<label for="${question.answers[1]}"> <input type="radio" name="answer-choice" value="${question.answers[1]}" > ${question.answers[1]} </label>  
<label for="${question.answers[2]}"> <input type="radio" name="answer-choice" value="${question.answers[2]}"> ${question.answers[2]}  </label>
<label for="${question.answers[3]}"> <input type="radio" name="answer-choice" value="${question.answers[3]}"> ${question.answers[3]} </label>
<button id='submit-button' type="submit"> Submit </button>
</form> </div>`);
  
}



function startButtonPress(){
  $('#intro').on('click', '#start-button', function(event) {
    $(event.currentTarget).closest('header').remove();
    questionRender(0);
  });
} 

function rightResultRender(){
  console.log('right result render run');
    $('label').closest('div').remove();
    $('#right-view').html('<h2> Correct! </h2> <button id="next-button" type="submit"> Next </button>');
  }
  


function wrongResultRender(){
  console.log('wrong result render run');
  $('label').closest('div').remove();
  $('#wrong-view').html('<h2> Incorrect! </h2> <button id="next-button" type="submit"> Next </button>');
}



function userAnswer(){
  $('main').submit('#question-form', function(event){
    console.log('userAnswer is running');
    event.preventDefault();
    let selectedAnswer = $('input[type=radio][name=answer-choice]:checked').val();
    if(!selectedAnswer){
      try {
        !selectedAnswer;
        alert('Please enter answer');
        //throw 'Please enter answer';
      }
       catch(e) {
         console.error(e);
      }      
      return;
    }
    if(selectedAnswer === store.questions[store.questionNumber].correctAnswer){
      store.score += 1;
      rightResultRender();
    }
    else {
      wrongResultRender();
    }
  });
}

function nextButtonPress(){
}
function restartButtonPress(){
}
function finalResultRender(){
}
function resetButtonPress(){
}
function handleQuizApp(){
  startRender();
  startButtonPress();
  userAnswer();
}

$(handleQuizApp);

/**
 *
 * Your app should include a render() function, that regenerates
 * the view each time the store is updated. See your course
 * material, consult your instructor, and reference the slides
 * for more details.
 *
 * NO additional HTML elements should be added to the index.html file.
 *
 * You may add attributes (classes, ids, etc) to the existing HTML elements, or link stylesheets or additional scripts if necessary
 *
 */