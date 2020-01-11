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
      image: '<img src=great_dane.jpg alt="Great Dane">',
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
      image: '<img src=sheltie.jpg alt="Shetland Sheepdog" >',
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
      image: '<img src=cat.jpg alt="a Cat">',
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
      image: '<img src=chihuahua.jpg alt="Chihuahua">',
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
      image: '<img src=ferret.jpg alt="Long dog">',
      correctAnswer: 'Long dog'
    }
  ],
  questionNumber: 0,
  score: 0
};

//Templates ==========================================================

function startTemplate(){
  // eslint-disable-next-line quotes
  return (`<div id= "start"> <h1> Types of Dogs Quiz </h1> <h2> How much do you know about dogs? </h2> <nav> <button id="start-button" class="button" type="start">Start</button> </nav> </div>`);
}

function questionTemplate(index){
  const question = store.questions[index];
  return `<div id="question"> <h1>${question.question} </h1> ${question.image} 
<form id='question-form'> <label for="${question.answers[0]}" class="radio"> <input type="radio" name="answer-choice" value="${question.answers[0]}" required> ${question.answers[0]} </label>
<label for="${question.answers[1]}" class="radio"> <input type="radio" name="answer-choice" value="${question.answers[1]}" required> ${question.answers[1]} </label>  
<label for="${question.answers[2]}" class="radio"> <input type="radio" name="answer-choice" value="${question.answers[2]}" required> ${question.answers[2]}  </label>
<label for="${question.answers[3]}" class="radio"> <input type="radio" name="answer-choice" value="${question.answers[3]}" required> ${question.answers[3]} </label>
<nav> <button id='submit-button' type="submit"> Submit </button> </nav> <h3> Current Score: ${store.score} </h3> <h3> Question ${store.questionNumber + 1} out of 5 </h3>
</form> </div>`;
  
}

function rightResultTemplate(){
  return `<div class="right-result"> <h2> Correct! </h2> <p> That was a ${store.questions[store.questionNumber].correctAnswer} </p> <nav> <button id="next-button" type="button"> Next </button> </nav> </div>`;
}

function wrongResultTemplate(){
  return `<div class ="wrong-result"> <h2> Incorrect! </h2> <p> The correct answer was ${store.questions[store.questionNumber].correctAnswer} </p> <nav> <button id="next-button" type="submit"> Next </button> <nav> </div>`;
}

function finalResultTemplate(){
  return `<div class="final-result"> <h1> Your final results are: </h1> <h2> ${store.score} Correct out of 5! </h2> <nav> <button id="reset-button" type="button"> Try Again </button> </nav> </div>`;
}

//renders =========================================================

function startRender(){
  $('header').html(startTemplate());
}

function questionRender(){
  console.log('question is rendering');
  if(store.questionNumber === 0){
    console.log('herro');
    $('#question-view').html(questionTemplate(0));
  }
  else if(store.questionNumber === 1){
    $('#question-view').html(questionTemplate(1));
  }
  else if(store.questionNumber === 2){
    $('#question-view').html(questionTemplate(2));
  }
  else if(store.questionNumber === 3){
    $('#question-view').html(questionTemplate(3));
  }
  else if(store.questionNumber === 4){
    $('#question-view').html(questionTemplate(4));
  }
  else {console.log('something');}
}

function rightResultRender(){
  console.log('right result render run');
  $('label').closest('div').remove();
  $('#right-view').html(rightResultTemplate());
}

function wrongResultRender(){
  console.log('wrong result render run');
  $('label').closest('div').remove();
  $('#wrong-view').html(wrongResultTemplate());
}

function finalResultRender(){
  $('#results-view').html(finalResultTemplate());
}

// event handlers =================================================

function startButtonPress(){
  console.log('start is running');
  $('#start').on('click', '#start-button', function(event) {
    console.log('start is running listener');
    $(event.currentTarget).closest('div').remove();
    questionRender();
  });
} 

function userAnswer(){
  $('main').submit('#question-form', function(event){
    console.log('userAnswer is running');
    event.preventDefault();
    let selectedAnswer = $('input[type=radio][name=answer-choice]:checked').val();
    console.log(selectedAnswer);
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
  $('main').on('click', '#next-button', function(event){
    $(event.currentTarget).closest('div').remove();
    if (store.questionNumber < store.questions.length-1){
      store.questionNumber ++;
      questionRender(store.questionNumber);
      return;
    }
    else{
      finalResultRender();
    }
  });
}

function resetButtonPress(){
  $('main').on('click', '#reset-button', function(event){
    $(event.currentTarget).closest('div').remove();
    store.score = 0;
    store.questionNumber = 0;
    startRender();
    startButtonPress();
    
  });
}

// ================================================================

function handleQuizApp(){
  startRender();
  startButtonPress();
  userAnswer();
  nextButtonPress();
  resetButtonPress();
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