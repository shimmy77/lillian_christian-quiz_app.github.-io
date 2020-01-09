/**
 * Example store structure
 */
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
}
function startButtonPress(){
} 
function questionRender(){
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