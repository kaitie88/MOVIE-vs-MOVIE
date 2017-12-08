$( document ).ready(function() {
    console.log( "ready!" );
  $('#generate').on("click", function(){
//     alert("still here");
    
    $('.movie-poster-one-bg').addClass("grow-left");
    $('.movie-poster-two-bg').addClass("grow-right"); 
  });
});