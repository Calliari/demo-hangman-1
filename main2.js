$(document).ready(function() {

  function numberOfLettersUnsolved() {
    return $('#word .unsolved').length;
  }

  function isHangmanSolved() {
    return numberOfLettersUnsolved() === 0;
  }

  // source: http://stackoverflow.com/a/4550514
  function pickRandomArrayElement(array) {
    return array[Math.floor(Math.random() * array.length)];
  }

  function hangman() {

    var words = ['MADRID','BRASILIA','ROME']; // array of words
    var word = pickRandomArrayElement(words);  // pick word random

    var alpha = ['A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
      'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var wrongGuess = 0;
    var lives = 10;
    var tries= 0;

    for(var i = 0; i < alpha.length; i++){// take each letter in the array by index then by value (alpha[i]) put inside span
      $('#alpha').append( $('<span class="guess" id="'+ alpha[i] +'" ">' + alpha[i] + '</span>') ); // put class="guess" + value to <span>
    }

    for(var j = 0; j < word.length; j++){ // take each letter in the (word[i]) put inside (<span>)
      $('#word').append( $('<span class="letter unsolved" id="' + word[j] + '"> __ </span>') );
    }

    $('.guess').click(function() { // when a keyboard letter is pressed

      var count = $('#word [id=' + $(this).text() + ']').each(function() {
        $(this).text($(this).attr('id')).removeClass('unsolved');
      }).length;

      if (count > 0){
        $(this).removeClass('guess').addClass('correct');  // remove a class and add css color green

      } else {
        $(this).removeClass('guess').addClass('incorrect').unbind('click'); // remove a class and add css color red

        lives--; // take 1 from the lives when wrong letter is guessed
        wrongGuess++; // counting player's tries (+ 1)

      }
      tries++; // counting the tries of guessing

      console.log('--------------');
      console.log('lives', lives);
      console.log('tries:', tries);
      console.log('wrongLetter', wrongGuess);

      if (isHangmanSolved()) {
        alert('Congratulations, you have SOLVED it!');
      }

    });
    console.log(word); // debugging tool

  }
  hangman();

});
