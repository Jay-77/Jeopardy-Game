 // console.group('Main.js loaded');


var questions = [
/* HTML Questions */
  {
    prompt: 'What does HTML stand for?',
    options: [ 'Hyper Text Markup Language', 'Home Tool Markup Language', 'Hyperlinks and Text Markup Language', 'Holding Text Memory Language'],
    correctAnswer: 'Hyper Text Markup Language',
    cashPrize: 10  },
  {
    prompt: 'What is the largest HTML heading?',
    options: ['<h6>', '<head>', '<h1>', '<heading>'],
    correctAnswer: '<h1>',
    cashPrize: 20
  },
  {
    prompt: 'What is the HTML element for inserting a line break?',
    options: ['<lb>', '<br>', '<break>', '<linebreak>'],
    correctAnswer: '<br>',
    cashPrize: 30
  },
  {
    prompt: 'What is the HTML element for bold text?',
    options: ['<strong>', '<bold>', '<important>', '<b>'],
    correctAnswer: '<b>',
    cashPrize: 40
  },
  {
    prompt: 'What HTML element is used for foot notes or chemical formulas?',
    options: ['<sub>', '<important>', '<formulas>', '<fn> '],
    correctAnswer: '<sub>',
    cashPrize: 50
  },
  /* CSS Questions */
  {
    prompt: 'What does CSS stand for?',
    options: [ 'Cascading Style Sheets', 'Computer Style Sheets', 'Colorful Style Sheets', 'Creative Style Sheets'],
    correctAnswer: 'Cascading Style Sheets',
    cashPrize: 10  },
  {
    prompt: 'Where in an HTML document is the correct place to refer to an external style sheet?',
    options: ['<head>', 'At the end of the document', '<head>', 'At the beginning of document'],
    correctAnswer: '<head>',
    cashPrize: 20
  },
  {
    prompt: 'Which is the correct CSS syntax?',
    options: ['{body;color:black;}', '{body:color=black;}', 'body {color: black;', 'body:color=black;'],
    correctAnswer: 'body {color: black;',
    cashPrize: 30
  },
  {
    prompt: 'How do you insert a comment in a CSS file?"?',
    options: ['()', '/*  */', '//  //', '///  ///'],
    correctAnswer: '/*  */',
    cashPrize: 40
  },
  {
    prompt: 'How do you add a background color for all <h1> elements?? ',
    options: ['h1 {background-color:#FFFFFF;}', 'all.h1 {background-color: #FFFFFF;}', 'h1.all {background-color: #FFFFFF;}', '#h1 {background-color; FFFFFF'],
    correctAnswer: 'h1 {background-color:#FFFFFF;}',
    cashPrize: 50
  },
  /* Terminal Questions */
 {
    prompt: 'What command clears the content of your terminal display?',
    options: ['clear.all', 'delete', 'clear', 'remove.all' ],
    correctAnswer: 'clear',
    cashPrize: 10  },
  {
    prompt: 'What do you type in to move to the parent directory?',
    options: ['parent cd', 'cd ..', 'cd', 'cd ~'],
    correctAnswer: 'cd ..',
    cashPrize: 20
  },
  {
    prompt: 'What command creates an empty directory?',
    options: ['touch (file name)', 'makedir (file name)', 'touch.mk.dir', 'mkdir (file name)'],
    correctAnswer: 'mkdir (file name)',
    cashPrize: 30
  },
  {
    prompt: 'What command is used to display your previous commands?',
    options: ['up and down keys', 'right key' ,'last', 'ls', 'touch'],
    correctAnswer: 'up and down keys',
    cashPrize: 40
  },
  {
    prompt: 'What is the command to remove a directory and all files within?',
    options: ['remove all', 'rm -r (directory name)', 'rm', 'delete all (directory name)'],
    correctAnswer: 'rm -r (directory name)',
    cashPrize: 50
  },
  /* Javascript Questions */
 {
    prompt: 'Inside which HTML element do we put the JavaScript?',
    options: ['<javascript>', '<script>', '<js>', '<scripting>' ],
    correctAnswer: '<script>',
    cashPrize:   10  },
  {
    prompt: 'Where is the correct place to insert a JavaScript?',
    options: ['<java>', '<head>', '<body>', 'Both the <head> section and the <body> section'],
    correctAnswer: 'Both the <head> section and the <body> section',
    cashPrize: 20
  },
  {
    prompt: 'How do you write "Hello World" in an alert box?',
    options: ['msg("Hello World")', 'alert("Hello World");', 'msgBox("Hello World")', 'alertBox("Hello World");'],
    correctAnswer: 'alert("Hello World");',
    cashPrize: 30
  },
  {
    prompt: 'How do you create a function in JavaScript',
    options: ['function myFunction()', 'function = myFunction()', 'function:myFunction()', 'function:myFunction=()'],
    correctAnswer: 'function myFunction()',
    cashPrize: 40
  },
  {
    prompt: 'What does === mean?',
    options: ['is equal to', 'strict not equal to', 'is not equal to', 'strict equal to'],
    correctAnswer: 'strict equal to',
    cashPrize: 50
  },
/* Github Questions */
 {
    prompt: 'What command starts git in the terminal?',
    options: ['git branch', 'git add', 'start git', 'git init'],
    correctAnswer: 'git init',
    cashPrize: 10  },
    {
    prompt: 'How can you show all commits starting with the newest?',
    options: ['git log', 'git history', 'git commit history', 'git log history'],
    correctAnswer: 'git log',
    cashPrize: 20
    },
    {
    prompt: 'What is Github?',
    options: ['Text editor', 'CVS', 'RCS', 'Version Control Repository'],
    correctAnswer: 'Version Control Repository',
    cashPrize: 30
    },
    {
    prompt: 'Which of these frameworks include support for TypeScript?',
    options: ['Text editor', 'Angular', 'JQuery', 'Whitespace'],
    correctAnswer: 'Angular',
    cashPrize: 40
    },
    {
    prompt: 'How  would you replace local changes using this command?',
    options: ['git add <filename>', 'git pull', 'git fetch origin', 'git checkout -- <filename>' ],
    correctAnswer: 'git checkout -- <filename>',
    cashPrize: 50
    }
];


// Global variable  score...
var score = 0;
//

$(function() {
   // Hide the box after submit
    $("#closesubmit").click(function(){
    $("#myModal").modal("hide");
    });
});
$(function() {
  // Remove Element after click
  $(".gridbtn").click(function() {
    $(this).addClass("disabled");
    $(this).remove();
    });
});
 // Submit Question Answer
function submit(a, b) {
  var selected = $(".modal-body input:checked").val();
  // Determine if correct answer was chosen and alert prize
  if ( selected === questions[window.currentQuestion].correctAnswer ) {
    // console.log(selected + " was selected");
    chaching.play();
    window.addprize = questions[window.currentQuestion].cashPrize;
    score = score + window.addprize;
    console.log(score);
    $('#score1').html("  $"+score);
  }
  // Determine if incorrect answer was chosen and alert prize
  if ( selected !== questions[window.currentQuestion].correctAnswer ) {
    buzzer.play();
    window.subprize = questions[window.currentQuestion].cashPrize;
    score = score - window.subprize;
    $('#score1').html("  $"+score);
  }
}
// Get question info from array, prepare
function getOptions(question) {
  var $buttonDiv = $('<div id="disabled" class="btn-group" data-toggle="buttons"></div>');
  question.options.forEach(function(opt) {
    var $div = $('<div class="radio">');
    var $label = $('<label class="radio-inline"></label');
    var $input = $('<input type="radio" name="opts" value="' + opt + '">');
    $label.append($input);
    $label.append(opt);
    $div.append($label);
    $buttonDiv.append($div);
  });
  return $buttonDiv;
}
// Populate box window with specific question
function showQuestion(event, $modal) {
  var button = $(event.relatedTarget);  // Button that triggered the modal
  var num = parseInt(button.data('num'));
  var question = questions[num];
  window.currentQuestion = num;
  $modal.find('.modal-title').text(question.prompt);
  $modal.find('.modal-body').empty().append(getOptions(question));
}
// Modal show/close functions
$(function() {
  $("#myModal").on('show.bs.modal', function(event) {
    showQuestion(event, $(this));
  });
});
$("#myModal").on('hidden.bs.modal', function () {
            console.log('The modal is now hidden.');
    });
 $('.modal-body input:checked').submit(function() {
    $('#myModal').modal('toggle');
    return false;
});