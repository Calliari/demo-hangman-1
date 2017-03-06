// console.log('in main.js');
// console.log($);

$(document).ready(function(){

  var categories;         // Array of topics
  var chosenCategory;     // Selected catagory
  var getHint ;          // Word getHint
  var word ;              // Selected word
  var guess ;             // Geuss
  var geusses = [ ];      // Stored geusses
  var lives ;             // Lives
  var counter ;           // Count correct geusses
  var space;              // Number of spaces in word '-'



  // Modal for the info button
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
  // ./END Modal for the info button


  // keypad letters in for the guessingWord
  var alphabet = ['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H',
    'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S',
    'T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    // keypad in for the guessingWord
  for (var i = 0; i < alphabet.length; i++) {
    var letterButton = $('<button></button>');//
    letterButton.prop('value', alphabet[i]); //add a value to a tag
    letterButton.append(alphabet[i]); // add an button

    $('.btn-group').append(letterButton);

  }
  // put button in the inside div id="#wrongLetterHold"
  $( 'button' ).click(function() {
    $('#wrongLetterHold').append(' ',$(this).val(), ' ');

  });
  // ./ END keypad in for the guessingWord

  var words = ['madrid', 'italy', 'brazil', 'a'];
  word = words[Math.floor(Math.random() * words.length)];
  word = word.toUpperCase(); // make all letters upper case
  // make the words into dashes '-'
  for (var j = 0; j < word.length; j++){
    //console.log(word[j] = '- ');
    $('.dashes').append(word[j] = '- ');
    $('.textBox').append(word[j]); //delete later, this is only for testing

  }


  //once you got all wrong letters, you lose
// 	if(allWrongLetter === words.length){
// 		window.alert("Uh...I guess you're dead now.");
// 	}
// }



  //$('.textbox').append(word);
  //console.log(word);












  // Create geusses ul
  //  result = function () {
  //    var wordHolder = document.getElementById('hold');
  //    var correct = document.createElement('ul');
   //
  //    for (var i = 0; i < word.length; i++) {
  //      correct.setAttribute('id', 'my-word');
  //      var guess = document.createElement('li');
  //      guess.setAttribute('class', 'guess');
  //      if (word[i] === '-') {
  //        guess.innerHTML = '-';
  //      } else {
  //        guess.innerHTML = '-';
  //      }
   //
  //      geusses.push(guess);
  //      wordHolder.appendChild(correct);
  //      correct.appendChild(guess);
  //    }
  //  };




// $('button').click(function(){
//   $('h2').hide();
// });

});
