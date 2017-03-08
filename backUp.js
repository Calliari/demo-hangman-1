for (var count = 0; count < word.length; count++) {
  if (btnValue === word.substring(count, count + 1)) {


  }
}



$('.guess').click(function() { // when a keyboard letter is pressed
  var count = $('#word [letter=' + $(this).text() + ']').each(function() { //add the letter itself to div id="word"
    $(this).text($(this).attr('letter')); // get the value from button clicked
  }).length;

  $(this).removeClass('guess').css('color', (count > 0 ? 'green' : 'red')).unbind('click');
});


$('#alpha').append( '<span></span>' ); // add a span tag to '#alpha' div
$('span').prop('class', 'guess'); // put class="guess" + value to <span>
$('span').prop('id', val);




$('#word').append($('<span class="letter" letter="' + val + '"> - </span>')); // put class="letter" + letter = "value" to <span>
$('#word').append($('<span class="letter" letter="' + val + '"> - </span>')); // put class="letter" + letter = "value" to <span>


// var count = $('#word [id=' + $(this).text() + ']').each(function() {
//   $(this).text($(this).attr('id'));
// }).length;

if (alphaValue === wordValue){
  $(this).removeClass('guess').css( 'color','red');


}else{
  $(this).removeClass('guess').css( 'color','green').unbind('click');
}



// last work version ###########################################

$('.guess').click(function() { // when a keyboard letter is pressed


  var count = $('#word [id=' + $(this).text() + ']').each(function() {
    $(this).text($(this).attr('id'));
  }).length;


  if (count > 0){
    $(this).removeClass('guess').css( 'color','green');


  }else{
    $(this).removeClass('guess').css( 'color','red').unbind('click');

    console.log('wrongGuess',wrongGuess);
    console.log('lives',lives);
  }

  wrongGuess++; // add 1 for every wrong guess
  lives--; //  minus 1 from lives when its gets wrong


});

//#################################################################


function gameOver(){
  if (lives <= 0){
    alert('Game Over');
    console.log('You are dead by now!');
  }
}


  // if (letterLeft <= 0 ){
  //   alert('You Won!');
  //   console.log('Congratulations, you complete the word!');
  // }


gameOver(); //message Game Over
gameWin(); //message Congratulations

  //#################################################################
