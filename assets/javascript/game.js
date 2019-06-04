
$(document).ready(function(){
     // Declaring  global variables
var randomNumber;
var win = 0;
var lose = 0;
var counter =0;

var resetGame = function () {

     $(".crystals").empty();

     var images = ["assets/images/crystal1.jpg","assets/images/crystal2.jpg","assets/images/crystal3.jpg","assets/images/crystal4.png"];
     
     randomNumber = Math.floor(Math.random() * 102 + 19);

     console.log(randomNumber);

     $("#result").html('<h1 class="h1 p-2">' + randomNumber + '</h1>');

     for (var i =0; i < 4; i++ ){

          var randomValue = Math.floor(Math.random() *12) + 1;
          // console.log(randomvalue);
          var crystal = $("<div>");
          crystal.attr({
               "class": 'crystal',
               "data-random": randomValue,
          });
          crystal.css({
               "background-image" : "url('" + images[i] + "')",
               "background-size" : "cover"
          });
     

          $(".crystals").append(crystal);
          $("#lose").html('Losses: ' + lose);
          $("#win").html('Wins: ' + win);


     }
     $("#counter").html('<h1 class="h1 p-1">' + counter + '</h1>');
}

resetGame();


$(document).on('click', ".crystal", function(){

     var num = parseInt($(this).attr('data-random'));

     counter += num;

     $("#counter").html('<h1 class="h1 p-1">' + counter + '</h1>');

     console.log(counter);

     if(counter > randomNumber){
         
          lose++;

          $("#lose").html('Losses: ' + lose);

          counter = 0;

          resetGame();
     }
     else if(counter === randomNumber){
         
          win++;

          $("#win").html('Wins: ' + win);

          counter =0;

          resetGame();
     }

});

});
