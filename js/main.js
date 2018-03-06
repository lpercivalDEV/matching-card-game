//Project Name:
//Client Name:
//Author: Lilly Percival
//Dev @ RC in Boston

///-----------------------------------------------------------///
///---------------PSEUDO---CODE--------------------///
///---------------------------------------------------------///
// MORNING CHALLENGE: Make a 10 card memory game -
// users must be able to select two cards and check if they are a match. If they are
// a match, they stay flipped. If not, they flip back over. Game is done when
// all cards are matched and flipped over.
// Bonus - for no business cards this week finish your app by 11am w/ shuffling
// (find a shuffling algorithm online)
//
//
//
// I will need to have 10 cards --> 5 matches
// User can select two cards at a time, click on cards, and
    //...ideally shuffle cards byt clicking button
// User expects cards to flip over as they are clicked and for matches to remain visible
// User can see cards, and see buttons
//
// I will need a function for shuffling which may include a "math.random"
//  I will need a function to restart the game once all matches are made
// I will need an alert to let the user know they have won the game
// I will need a function that flips cards back over if they are not a matched
// I will need an event listener for clicks (on cards and on button)
//
//
///--------------------------------------------------------------------------------///
///~~~~~~~~~~~~~~~~~ACTUAL---CODE~~~~~~~~~~~~~~~~~~///
///-------------------------------------------------------------------------------///


$(document ).ready(function(){
    $("#shuffle").on("click", function(){
        //put shuffle algorithm here!!!

    });

    var app = {
    cards: ["cat", "cat", "dog", "dog", "tiger", "tiger", "elephant", "elephant", "crocodile", "crocodile"],
    init: function() {
      app.shuffle();
    },
    shuffle: function() {
      var random = 0;
      var temp = 0;
      for (i = 1; i < app.cards.length; i++) {
        random = Math.round(Math.random() * i);
        temp = app.cards[i];
        app.cards[i] = app.cards[random];
        app.cards[random] = temp;
      }
      app.assignCards();
      console.log('Shuffled Card Array: ' + app.cards);
    },
    assignCards: function() {
      $('.card').each(function(index) {
        $(this).attr('data-card-value', app.cards[index]);
      });
      app.clickHandlers();
    },
    clickHandlers: function() {
      $('.card').on('click', function() {
        $(this).html('<img>'+$(this).data('cardValue')).addClass('selected');

        app.checkMatch();
      });
    },
    checkMatch: function() {
      if ($('.selected').length === 2) {
        if ('cardValue')
        if ($('.selected').first().data('cardValue') == $('.selected').last().data('cardValue')) {
          $('.selected').each(function() {
            $(this).css("background", "green").animate({
              opacity: 0
            }).removeClass('unmatched');
          });
          $('.selected').each(function() {
            $(this).removeClass('selected');
          });
          app.checkWin();
        } else {
          setTimeout(function() {
            $('.selected').each(function() {
              $(this).html('').removeClass('selected');
            });
          }, 1000);
        }
      }
    },
    checkWin: function() {
      if ($('.unmatched').length === 0) {
        $('.win').html('You Won!');
      }
    }
  };
  app.init();

});
