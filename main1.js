console.log('in main.js');
console.log($);

// The canvas is backgroing for the game play area

function startGame() {
  myGameArea.start();
}

var myGameArea = {
  canvas: document.createElement('canvas'),
  start: function() {
    this.canvas.width = 800;
    this.canvas.height = 500;
    this.canvas.style.marginTop = '60px';
    this.canvas.style.backgroundColor =  '#f1f1f1';
    this.canvas.style.border = '1px solid #d3d3d3';
    this.canvas.classList.add('center-block');

    this.context = this.canvas.getContext('2d');
    document.body.insertBefore(this.canvas, document.body.childNodes[0]);

    this.context.font = '20px helvetica';
    this.context.fillText('Questions:',10,30); // Questions text
    this.context.fillText('Used:',10,60); // Used text
    this.context.fillText('Tried:',10,90); // Tried text
    this.context.fillText('Revel:',200,30); // Revel clue text

    this.context.fillText('Info',580,30); // Info button up left screen
    this.context.fillText('New Game',680,30); // New button up left screen

    this.context.fillText('__ __ __ __',10,300); // the word to be guessed


    $(document).ready(function(){
      $('#btn1').click(function(){
        $('p').prepend('<b>Prepended text</b>. ');
      });
      $('#btn2').click(function(){
        $('ol').prepend('<li>Prepended item</li>');
      });
    });

  // keyboard pad
    // var divKeyPad = document.createElement('div');
    // divKeyPad.style.backgroundColor =  'red';
    // divKeyPad.style.border = '1px solid #d3d3d3';
    // divKeyPad.width = 500;
    // divKeyPad.id = 'test';
    // divKeyPad.innerHTML = '<span class="msg">Hello world.</span>';
    //
    // myGameArea.appendChild(divKeyPad);



  }
};
