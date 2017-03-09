$(document).ready(function() {

  $('#lives').text( 3 );
  $('#tries').text( 0 );
  $('#wrongGuess').text( 0 );
  $('#score').text(0 + '%');

  var clickOk = $('#clickOk')[0];  // sounds for buttons when is ok guessing
  var clickError = $('#clickError')[0];  //sounds for buttons when is error guessing


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

    var lives = $('#lives').text();
    var wrongGuess = 0;
    var tries = 0;
    var score = 0;

    for(var i = 0; i < alpha.length; i++){// take each letter in the array by index then by value (alpha[i]) put inside span
      $('#alpha').append( $('<button role="button" class="guessBtn" id="'+ alpha[i] +'" ">' + alpha[i] + '</button>') ); // put class="guess" + value to <span>
      $('#alpha').addClass('keypadBoxH');
    }

    for(var j = 0; j < word.length; j++){ // take each letter in the (word[i]) put inside (<span>)
      $('#word').append( $('<span class="letter unsolved" id="' + word[j] + '"> _ </span>') );
    }

    $('.guessBtn').click(function() { // when a keyboard letter is pressed
      var count = $('#word [id=' + $(this).text() + ']').each(function() {
        $(this).text($(this).attr('id')).removeClass('unsolved');
      }).length;

      if (count > 0){
        $(this).removeClass('guessBtn').addClass('correct');  // remove a class and add css color green

        clickOk.play();


      } else {
        $(this).removeClass('guessBtn').addClass('incorrect').unbind('click'); // remove a class and add css color red

        lives--; // take 1 from the lives when wrong letter is guessed
        wrongGuess++; // counting player's tries (+ 1)

        clickError.play();

      }
      tries++; // counting the tries of guessing

      function updateScores(){
        $('#tries').text( tries );
        $('#wrongGuess').text( wrongGuess );
        $('#score').text( score + '%' );
        $('#lives').text( lives );

      }
      updateScores();

      if (isHangmanSolved()) {
        alert('Congratulations, you have SOLVED it!');
        $('#messageBox').text('Congratulations!!');

      }else if(lives === 0){
        $('#lives').text('Dead!!!');
        $('#messageBox').text('You are Dead Now!!');
        $('#alpha').removeClass('keypadBoxH');
        $('button').attr('disabled', 'disabled');



        // $('#alpha button').removeClass('keypadBox :hover').addClass('disabled');
        alert('Game Over!');

      }

      // debugging tool ################################################ß

      console.log('--------------');
      console.log('lives', lives);
      console.log('tries:', tries);
      console.log('wrongLetter', wrongGuess);

    });
    console.log(word); // debugging tool

  }
  hangman();

});
