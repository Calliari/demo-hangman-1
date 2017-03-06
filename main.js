// console.log('in main.js');
// console.log($);

$(document).ready(function(){

  var geusses = [ ];      // Stored geusses
  var words ;              // Selected word



  // Modal for the info button
  $('#myModal').on('shown.bs.modal', function () {
    $('#myInput').focus();
  });
  // ./END Modal for the info button


  // keypad letters in for the guessingWord
  var alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h',
    'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's',
    't', 'u', 'v', 'w', 'x', 'y', 'z'];

    // keypad in for the guessingWord
  for (var i = 0; i < alphabet.length; i++) {
    var letterButton = $('<button></button>');//
    letterButton.prop('value', alphabet[i]); //add a value to a tag
    letterButton.append(alphabet[i]); // add an button

    $('.btn-group').append(letterButton);

  }
  // put button in the inside div id="#hold"
  $( 'button' ).click(function() {
    $('#hold').append($(this).val());

  });
  // ./ END keypad in for the guessingWord


  words = ['madrid', 'italy', 'brazil'];

  var getRandomWord = function () {
    var word = words[Math.floor(Math.random() * words.length)];
    console.log(word);
    return word;

  };

  $(function() { // after page load
    $('.textbox').append(getRandomWord());
  });









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
