'use strict';
const store = {
  // 5 or more questions are required
  questions: [
    {
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
function questionRender(){
  console.log('qrenderrun');
}
function startButtonPress(){
  $('#intro').on('click', '#start-button', function(event) {
    $(event.currentTarget).closest('header').remove();
    questionRender();
  });
} 

function userAnswer(){
}
function userAnswerCheck(){
}
function nextButtonPress(){
}
function nextQuestionCheck(){
}
function resultsRender(){
}
function restartButtonPress(){
}

function handleQuizApp(){
  //console.log('handle-quiz-app');
  startRender();
  startButtonPress();
  //questionRender();
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