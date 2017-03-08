$(document).ready(function() {

  function hangman() {

    var words = ['MADRID','BRAZIL','ITALY']; // array of words
    var word = words[Math.floor(Math.random() * words.length)];  // pick word random

    var alpha = ['A', 'B', 'C', 'D', 'E', 'F',
      'G', 'H', 'I', 'J', 'K', 'L', 'M', 'N', 'O', 'P',
      'Q', 'R', 'S','T', 'U', 'V', 'W', 'X', 'Y', 'Z'];

    var wrongGuess = 0;
    var lives = 10;
    var tries= 0;


    $.each(alpha, function(i, val) { // take each letter in the array by index then by value (i, val)
      $('#alpha').append( $('<span class="guess" id="'+ val +'" ">' + val + '</span>') ); // put class="guess" + value to <span>

    //  console.log(i, val); // debugging tool
    });

    $.each(word.split(''), function(i, val) { //take each letter inside the 'word' by index and value (i, val)
      $('#word').append( $('<span class="letter" id="' + val + '"> __ </span>') ); // put class="letter" + letter = "value" to <span>

      //console.log(i, val); // debugging tool
    });

    $('.guess').click(function() { // when a keyboard letter is pressed

      var count = $('#word [id=' + $(this).text() + ']').each(function() {
        $(this).text($(this).attr('id'));
      }).length;

      if (count > 0){
        $(this).removeClass('guess').css( 'color','green');  // remove a class and add css color green
      }else{
        $(this).removeClass('guess').css( 'color','red').unbind('click'); // remove a class and add css color red

        lives--; // take 1 from the lives when wrong letter is guessed
        wrongGuess++; // counting player's tries (+ 1)

      }

      tries++; // counting the tries of guessing
      debugging();

    });
    console.log('Word in dashes', word); // debugging tool

    function debugging(){
      console.log('--------------');
      console.log('lives', lives);
      console.log('tries:', tries);
      console.log('wrongLetter', wrongGuess);

    }

  }
  hangman();

});
